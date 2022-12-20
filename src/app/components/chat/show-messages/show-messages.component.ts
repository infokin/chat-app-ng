import { Component, OnInit } from '@angular/core';
import { delay, from, Observable, of } from 'rxjs';

export interface Message {
  content: string;
}
@Component({
  selector: 'app-chat-show-messages',
  templateUrl: './show-messages.component.html',
  styleUrls: ['./show-messages.component.scss']
})
export class ShowMessagesComponent implements OnInit {

  public messages: Message[] = [];

  public ngOnInit(): void {
    of(
      {content: 'Hi'},
      {content: 'Hello'},
      {content: 'Bye!'},
      )
      .subscribe({
        next: (msg: Message) => this.messages.push(msg),
        error: (err: unknown) => console.log(err),
      });
  }
}
