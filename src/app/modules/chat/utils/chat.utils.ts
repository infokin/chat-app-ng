import { isEmpty } from "lodash-es";
import { Message } from "../models";

export class ChatUtils {

  private constructor() {
  }

  public static convertMessageToText(messages: Message[]): string {
    return messages
      .filter((message: Message): boolean => {
        return !isEmpty(message.getContent());
      })
      .map((message: Message): string => {
        return message.getContent() || "";
      })
      .join("\n");
  }

}
