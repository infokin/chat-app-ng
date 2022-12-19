import { NgModule } from '@angular/core';
import { ShowMessagesComponent } from './show-messages.component';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    ShowMessagesComponent
  ],
  imports: [
    InputTextareaModule
  ],
  exports: [ShowMessagesComponent],
})
export class ShowMessagesModule {
}
