import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from '../../models';
import {JsonUtils} from '../../utils/json-utils';
import {NGXLogger} from 'ngx-logger';
import {environment} from '../../../environments/environment';
import {deserializeArray} from '../../operators/deserialize-array.operator';

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
    const body: string = JsonUtils.serialize(message);
    this.logger.debug('Sending message: ', message);
    return this.http.post<Message>(MessageService.MESSAGES_PATH, body);
  }

  public getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(MessageService.MESSAGES_PATH).pipe(
      deserializeArray(Message)
    );
  }
}
