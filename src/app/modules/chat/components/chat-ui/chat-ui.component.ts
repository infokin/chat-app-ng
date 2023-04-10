import {Component, OnDestroy, OnInit} from "@angular/core";
import {ChatService} from "../../services/chat/chat.service";
import {Message} from "../../models";
import {Subscription} from "rxjs";

@Component({
  selector: "chat-app-ui",
  templateUrl: "./chat-ui.component.html",
  styleUrls: ["./chat-ui.component.scss"]
})
export class ChatUiComponent implements OnInit, OnDestroy {

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
            next: (msg: Message) => this.messages.push(msg)
          })
      );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
