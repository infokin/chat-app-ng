import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ChatService } from "../../../modules/chat/services/chat/chat.service";
import { Message } from "../../../modules/chat/models";

@Component({
  selector: "chat-app-send-messages",
  templateUrl: "./send-messages.component.html",
  styleUrls: ["./send-messages.component.scss"]
})
export class SendMessagesComponent {

  public messageForm: FormGroup<{
    content: FormControl<string | null>;
  }>;

  constructor(
    private formBuilder: FormBuilder,
    private chatService: ChatService
  ) {
    this.messageForm = this.formBuilder
      .group({
        content: ["", Validators.required]
      });
  }

  public sendMessage(): void {
    const content: string | null = this.messageForm.controls["content"].value;
    if(content === null) {
      return;
    }
    const message: Message = Message.Builder
      .create()
      .setContent(content)
      .build();
    this.chatService.sendMessage(message);
    this.messageForm.reset();
  }
}
