import { JsonUtils } from './json-utils';
import { Message } from '../models';

describe('JsonUtils', (): void => {
  it('should serialize', (): void => {
    const message: Message = new Message();
    const content: string = 'this is a message'
    message.setContent(content);

    const serializedMessage: string = JsonUtils.serialize(message, Message);
    expect(serializedMessage).toContain(content);
  });
})
