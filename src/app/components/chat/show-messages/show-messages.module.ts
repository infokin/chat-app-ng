import { NgModule } from '@angular/core';
import { ShowMessagesComponent } from './show-messages.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [
    ShowMessagesComponent
  ],
  imports: [
    InputTextareaModule,
    ListboxModule,
    AsyncPipe
  ],
  exports: [ShowMessagesComponent],
})
export class ShowMessagesModule {
}
