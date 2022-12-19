import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat-send-messages',
  templateUrl: './send-messages.component.html',
  styleUrls: ['./send-messages.component.scss'],
})
export class SendMessagesComponent implements OnInit {


  public messageForm = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
  }

  public sendMessage(): void {
    // TODO [CHAT-18]: Use message service
    console.log(this.messageForm.value);
  }
}
