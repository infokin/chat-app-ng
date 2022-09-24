import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('Message')
export class Message {

  @JsonProperty('content', String)
  private content: string | undefined = undefined;

  public getContent(): string | undefined {
    return this.content;
  }

  public setContent(content: string | undefined): void {
    this.content = content;
  }

}
