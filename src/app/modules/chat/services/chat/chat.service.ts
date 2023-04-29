import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NGXLogger } from "ngx-logger";
import { Observable, Subscriber, TeardownLogic } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { deserializeArray } from "../../../../common/operators";
import { JsonUtils } from "../../../../common/utils";
import { Message } from "../../models";

@Injectable()
export class ChatService {

  private static readonly MESSAGE_SERVICE_URL: string = environment.messageServiceUrl;

  constructor(
    private http: HttpClient,
    private logger: NGXLogger
  ) {
  }

  public getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(ChatService.MESSAGE_SERVICE_URL)
      .pipe(
        deserializeArray(Message)
      );
  }

  public getMessageStream(): Observable<Message> {
    return new Observable<Message>((subscriber: Subscriber<Message>): TeardownLogic => {
      const eventSource: EventSource = new EventSource(ChatService.MESSAGE_SERVICE_URL);

      eventSource.onmessage = (event: MessageEvent<object>): void => {
        this.logger.debug("Received SSE message", event.data);
        const message: Message = JsonUtils.deserializeObject<Message>(event.data, Message);
        subscriber.next(message);
      };

      eventSource.onerror = (error: unknown): void => {
        this.logger.debug("Error in SSE connection", error);

        if (eventSource.readyState === eventSource.CLOSED) {
          this.logger.debug("SSE connection closed");
          subscriber.complete();
        }

        subscriber.error(error);
      };

      return (): void => {
        this.logger.debug("Closing SSE connection");
        eventSource.close();
      };
    });
  }

  public sendMessage(message: Message): Observable<void> {
    this.logger.debug("Sending message: ", message);

    const body: string = JsonUtils.serializeObject(message);
    const headers: HttpHeaders = new HttpHeaders()
      .set("Content-Type", "application/json");

    return this.http.post<void>(ChatService.MESSAGE_SERVICE_URL, body, {headers});
  }

}
