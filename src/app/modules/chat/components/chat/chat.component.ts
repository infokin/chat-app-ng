import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { NGXLogger } from "ngx-logger";
import { Observable, Subscription, switchMap } from "rxjs";
import { Message } from "../../models";
import { ChatService } from "../../services";
import { ChatUtils } from "../../utils";

@Component({
  selector: "chat-component",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit, OnDestroy {

  protected message: string = "";
  protected messageHistoryText: string = "";

  private messageHistory: Message[] = [];

  private subscriptions: Subscription = new Subscription();

  constructor(
    private changeDetector: ChangeDetectorRef,
    private logger: NGXLogger,
    private chatService: ChatService
  ) {
  }

  //#region Lifecycle Hooks

  public ngOnInit(): void {
    this.subscribeToMessages();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  //#endregion

  //#region Event Handlers

  protected onSendMessage(): void {
    if (this.message.length > 0) {
      this.sendMessage(this.message);
      this.message = "";
    }
  }

  //#endregion

  //#region Private Methods

  private addMessagesToHistory(messages: Message[]): void {
    this.messageHistory.push(...messages);
    this.messageHistoryText = ChatUtils.convertMessageToText(this.messageHistory);
    this.changeDetector.detectChanges();
  }

  private subscribeToMessages(): void {
    this.logger.trace("Subscribing to messages");
    this.subscriptions.add(
      this.chatService.getMessages()
        .pipe(
          switchMap((messages: Message[]): Observable<Message> => {
            this.addMessagesToHistory(messages);
            return this.chatService.getMessageStream();
          })
        )
        .subscribe({
          next: (message: Message): void => {
            this.addMessagesToHistory([message]);
          },
          error: (error: unknown): void => {
            this.logger.error("Error getting message: ", error);
          }
        })
    );
  }

  private sendMessage(content: string): void {
    this.logger.trace("Sending message: ", content);

    const message: Message = Message.Builder
      .create()
      .setContent(content)
      .build();

    this.subscriptions.add(
      this.chatService.sendMessage(message)
        .subscribe({
          error: (error: unknown): void => {
            this.logger.error("Error sending message: ", error);
          }
        })
    );
  }

  //#endregion

}
