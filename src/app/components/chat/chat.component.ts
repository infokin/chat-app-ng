import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public messageForm = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  public sendMessage(): void {
    // TODO [CHAT-18]: Use message service
    console.log(this.messageForm.value);
  }
}
