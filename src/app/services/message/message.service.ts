import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message} from '../../common/interfaces/message.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // TODO: put serverUrl in an config file
  private serverUrl = 'localhost:8080';
  private chatUrl = `${this.serverUrl}/messages`;

  constructor(private http: HttpClient) {
  }

  public sendMessage(msg: Message): Observable<Message> {
    return this.http.post<Message>(this.chatUrl, msg);
  }
}
