import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscriber } from "rxjs";
import { Message } from "../../models";
import { JsonUtils } from "../../../../common/utils";
import { NGXLogger } from "ngx-logger";
import { environment } from "../../../../../environments/environment";
import { deserializeArray } from "../../../../common/operators";

@Injectable({providedIn: "root"})
export class ChatService {

  private static readonly MESSAGES_URI: string = `${environment.serverUrl}/messages`;

  constructor(
    private http: HttpClient,
    private logger: NGXLogger
  ) {
  }

  public sendMessage(message: Message): Observable<Message> {
    this.logger.debug("Sending message: ", message);
    const body: string = JsonUtils.serialize(message);
    return this.http.post<Message>(ChatService.MESSAGES_URI, body);
  }

  public getMessages(): Observable<Message[]> {
    return this.http.get<string>(ChatService.MESSAGES_URI)
      .pipe(
        deserializeArray(Message)
      );
  }

  public getMessageStream(): Observable<Message> {
    return new Observable<Message>((obs: Subscriber<Message>) => {
      const eventSource: EventSource = new EventSource(ChatService.MESSAGES_URI);

      eventSource
        .addEventListener("error", (error: unknown) => {
          this.logger.error("Error in sse connection", error);
          obs.error(error);
        });

      eventSource.addEventListener("message", (msg: MessageEvent<Message>) => {
        this.logger.info("Received sse message", msg.data);
        obs.next(msg.data);
      });

      return () => eventSource.close();
    });
  }
}
