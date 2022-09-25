import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from '../../models';
import {JsonConvert} from 'json2typescript';

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

    const jsonConvert: JsonConvert = new JsonConvert();
    try {
      /**
       * Copied from https://www.npmjs.com/package/json2typescript
       * The returned value will be an instance or an array of instances of the given class reference.
       * Tip: The return value is not a string. In case you need a string as result,
       * use JSON.stringify() after calling the serialize method.
       */
      const body: string = jsonConvert.serializeObject(message, Message);
      const bodyJson = JSON.stringify(body);
      return this.http.post<Message>(this.chatUrl, bodyJson);
    } catch (error: unknown) {
      console.error(error);
      throw new Error('Converting from message to json failed.');
    }
  }

}
