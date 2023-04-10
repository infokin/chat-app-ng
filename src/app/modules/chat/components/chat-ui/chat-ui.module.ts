import {NgModule} from "@angular/core";
import {ChatUiComponent} from "./chat-ui.component";
import {ButtonModule} from "primeng/button";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ReactiveFormsModule} from "@angular/forms";
import {SendMessagesModule} from "./send-messages/send-messages.module";
import {ListboxModule} from "primeng/listbox";

@NgModule({
  declarations: [
    ChatUiComponent,
  ],
  imports: [
    ButtonModule,
    InputTextareaModule,
    ReactiveFormsModule,
    SendMessagesModule,
    ListboxModule
  ],
  exports: [ChatUiComponent]
})
export class ChatUiModule {
}
