import { NgModule } from "@angular/core";
import { ShowMessagesComponent } from "./components/show-messages/show-messages.component";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ListboxModule } from "primeng/listbox";

@NgModule({
  declarations: [
    ShowMessagesComponent
  ],
  imports: [
    InputTextareaModule,
    ListboxModule
  ],
  exports: [ShowMessagesComponent]
})
export class ShowMessagesModule {
}
