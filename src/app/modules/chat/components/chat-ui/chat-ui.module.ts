import {NgModule} from "@angular/core";
import {ChatUiComponent} from "./chat-ui.component";
import {ButtonModule} from "primeng/button";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ReactiveFormsModule} from "@angular/forms";
import {ListboxModule} from "primeng/listbox";

@NgModule({
  declarations: [
    ChatUiComponent
  ],
  imports: [
    ReactiveFormsModule,
    InputTextareaModule,
    ListboxModule,
    ButtonModule
  ],
  exports: [ChatUiComponent]
})
export class ChatUiModule {
}
