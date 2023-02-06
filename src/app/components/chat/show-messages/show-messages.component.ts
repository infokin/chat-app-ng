import { Component, OnInit } from '@angular/core';
import { delay, from, Observable, of, Subscription } from 'rxjs';
import { ChatService } from '../../../modules/chat/services/chat/chat.service';
import { Message } from '../../../modules/chat/models';
@Component({
  selector: 'app-chat-show-messages',
  templateUrl: './show-messages.component.html',
  styleUrls: ['./show-messages.component.scss']
})
export class ShowMessagesComponent implements OnInit {

  public messages: Message[] = [];

  private subscription: Subscription = new Subscription();

  constructor(
    private messageService: ChatService
  ) {
  }

  public ngOnInit(): void {

    this.subscription
      .add(
        this.messageService
          .getMessageStream()
          .subscribe({
            next: (msg: Message) => this.messages.push(msg),
          })
      );
  }
}
