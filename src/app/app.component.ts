import {Component} from '@angular/core';
import {MessageService} from './services/message/message.service';
import {Message} from './models';

@Component({
  selector: "chat-app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = 'chat-app-ng';

  constructor(
    private messageService: MessageService
  ) {

    // TODO: Testing
    const message: Message = new Message();
    message.setContent('Test message..');
    this.messageService.sendMessage(message)
      .subscribe((message: Message) => {
        console.log('No idea what that is: ', message)
      })

  }
}
