import { NgModule } from "@angular/core";
import { ChatUiComponent } from "./chat-ui.component";
import { ButtonModule } from "primeng/button";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ReactiveFormsModule } from "@angular/forms";
import { ShowMessagesModule } from "./show-messages/show-messages.module";
import { SendMessagesModule } from "./send-messages/send-messages.module";

@NgModule({
  declarations: [
    ChatUiComponent
  ],
  imports: [
    ButtonModule,
    InputTextareaModule,
    ReactiveFormsModule,
    ShowMessagesModule,
    SendMessagesModule
  ],
  exports: [ChatUiComponent]
})
export class ChatUiModule { }
