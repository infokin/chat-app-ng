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

export namespace Message {

  export class Builder {
    private instance: Message = new Message();

    public static create(): Builder {
      return new Builder();
    }

    public setContent(content: string): Builder {
      this.instance.setContent(content);
      return this;
    }

    public build(): Message {
      return this.instance;
    }
  }

}
