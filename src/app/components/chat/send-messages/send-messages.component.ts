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

  public messageForm: FormGroup = this.formBuilder
    .group({
      content: ['', Validators.required]
    });

  constructor(
    private formBuilder: FormBuilder,
    private chatService: ChatService
  ) {
  }

  ngOnInit(): void {
  }

  public sendMessage(): void {
    // TODO [CHAT-18]: Use message service
    console.log(this.messageForm.value);
    this.messageForm.reset();
  }
}
