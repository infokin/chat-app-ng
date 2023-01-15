import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../../../modules/chat/services/chat/chat.service';
import { Message } from '../../../modules/chat/models';

@Component({
  selector: 'app-chat-send-messages',
  templateUrl: './send-messages.component.html',
  styleUrls: ['./send-messages.component.scss'],
})
export class SendMessagesComponent implements OnInit {

  public messageForm: FormGroup<{
    content: FormControl<string | null>;
  }>;

  constructor(
    private formBuilder: FormBuilder,
    private chatService: ChatService
  ) {
    this.messageForm = this.formBuilder
      .group({
        content: ['', Validators.required]
      });
  }

  ngOnInit(): void {
  }

  public sendMessage(): void {
    const content = this.messageForm.controls['content'].value;
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
