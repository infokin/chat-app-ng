import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from '../../models';
import {JsonUtils} from '../../utils/json-utils';
import {NGXLogger} from 'ngx-logger';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private static readonly MESSAGES_PATH: string = `${environment.serverUrl}/messages`;

  constructor(
    private http: HttpClient,
    private logger: NGXLogger
  ) {
  }

  public sendMessage(message: Message): Observable<Message> {
    let body: string = JsonUtils.serialize<Message>(message);
    return this.http.post<Message>(MessageService.MESSAGES_PATH, JSON.stringify(body));
  }
}
