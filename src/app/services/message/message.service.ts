import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from '../../models';
import {JsonUtils} from '../../utils/json-utils';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // TODO: put serverUrl in an config file
  private serverUrl: string = 'localhost:8080';
  private chatUrl: string = `${this.serverUrl}/messages`;

  constructor(
    private http: HttpClient
  ) {
  }

  public sendMessage(message: Message): Observable<Message> {
    let body: any;
    try {
      body = JsonUtils.serializeObject(message, Message);
    } catch (error: unknown) {
      console.error(error);
      throw new Error('Converting from message to json failed.');
    }

    return this.http.post<Message>(this.chatUrl, JSON.stringify(body));
  }
}