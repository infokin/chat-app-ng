import {JsonUtils} from './json-utils';
import {Message} from '../models';

interface IMessage {
  content: string;
}

describe('JsonUtils', (): void => {
  it('should serialize an object', (): void => {
    const message: Message = new Message();
    const content: string = 'this is a message'
    message.setContent(content);

    const serializedMessage: string = JsonUtils.serialize(message, Message);
    expect(serializedMessage).toContain(content);
  });

  it('should serialize an array', (): void => {
    const message1: Message = new Message();
    const content1: string = 'this is a message'
    message1.setContent(content1);

    const message2: Message = new Message();
    const content2: string = 'this is a message'
    message2.setContent(content2);

    const serializedMessage: string = JsonUtils.serialize([message1, message2], Message);
    expect(serializedMessage).toContain(content1);
    expect(serializedMessage).toContain(content2);
  });

  it('should deserialize as array', (): void => {
    const msg1: IMessage = {
      content: 'message one'
    };

    const msg2: IMessage = {
      content: 'message two'
    };

    const input: IMessage[] = [msg1, msg2];
    const result: Message | Message[] = JsonUtils.deserialize<Message>(input, Message) as Message[];

    expect(result.length).toEqual(input.length);
    result.forEach((value: Message, index: number) => {
      expect(value.getContent()).toEqual(input[index]?.content)
    })
  }),

    it('should deserialize as object', (): void => {
      const msg1: IMessage = {
        content: 'message one'
      };

      const result: Message = JsonUtils.deserialize<Message>(msg1, Message) as Message;

      expect(result).toBeInstanceOf(Message);
      expect(result.getContent()).toEqual(msg1.content);
    })
})
