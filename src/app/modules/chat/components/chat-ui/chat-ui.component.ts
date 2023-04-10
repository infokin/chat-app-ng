import {Component, OnDestroy, OnInit} from "@angular/core";
import {ChatService} from "../../services/chat/chat.service";
import {Message} from "../../models";
import {Subscription} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "chat-app-ui",
  templateUrl: "./chat-ui.component.html",
  styleUrls: ["./chat-ui.component.scss"]
})
export class ChatUiComponent implements OnInit, OnDestroy {

  public messages: Message[] = [];

  public messageForm: FormGroup<{
    content: FormControl<string | null>;
  }>;

  private subscription: Subscription = new Subscription();

  constructor(
    private messageService: ChatService,
    private formBuilder: FormBuilder,
    private chatService: ChatService
  ) {
    this.messageForm = this.formBuilder
      .group({
        content: ["", Validators.required]
      });
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

  public sendMessage(): void {
    const content: string | null = this.messageForm.controls["content"].value;
    if (content === null) {
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
