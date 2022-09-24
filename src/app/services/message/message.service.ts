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
       * Copied from json2typescript
       * The returned value will be an instance or an array of instances of the given class reference.
       * Tip: The param json must not be a string, but an object or an array.
       * Use JSON.parse() before applying the deserialize method in case you have a json string.
       */
      const body: string = jsonConvert.serializeObject(message, Message);
      return this.http.post<Message>(this.chatUrl, body);
    } catch (error: unknown) {
      console.error(error);
      throw new Error('Converting from message to json failed.');
    }
  }

}
