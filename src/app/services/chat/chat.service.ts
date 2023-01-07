import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Message } from "../../models";
import { JsonUtils } from "../../utils";
import { NGXLogger } from "ngx-logger";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
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
    return of([]);
    // return this.http.get(ChatService.MESSAGES_URI)
    //   .pipe(
    //     deserializeArray(Message)
    //   );
  }
}
