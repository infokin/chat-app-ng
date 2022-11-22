import { JsonUtils } from './json-utils';
import { Message } from '../models';

interface IMessage {
  content: string;
}

describe('JsonUtils', (): void => {
  it('should serialize', (): void => {
    const message: Message = new Message();
    const content: string = 'this is a message'
    message.setContent(content);

    const serializedMessage: string = JsonUtils.serialize(message, Message);
    expect(serializedMessage).toContain(content);
  });

  it('should deserialize', (): void => {
    const msg1: IMessage = {
      content: 'message one'
    };

    const msg2: IMessage = {
      content: 'message two'
    };

    const input: IMessage[] = [msg1, msg2];
    const result: Message[] = JsonUtils.deserializeArray<Message>(input, Message);

    expect(result.length).toEqual(input.length);
    result.forEach((value: Message, index: number) => {
      expect(value.getContent()).toEqual(input[index]?.content)
    })
  })
})
