import { NgModule } from "@angular/core";
import { SendMessagesComponent } from "./components/send-messages/send-messages.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ChatModule } from "../../../chat.module";

@NgModule({
  declarations: [
    SendMessagesComponent
  ],
  imports: [
    ButtonModule,
    ChatModule,
    InputTextareaModule,
    ReactiveFormsModule
  ],
  exports: [ SendMessagesComponent ]
})
export class SendMessagesModule { }
