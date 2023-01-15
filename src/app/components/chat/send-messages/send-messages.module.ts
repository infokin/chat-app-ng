import { NgModule } from '@angular/core';
import { SendMessagesComponent } from './send-messages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChatModule } from '../../../modules/chat/chat.module';

@NgModule({
  declarations: [
    SendMessagesComponent
  ],
  imports: [
    ButtonModule,
    ChatModule,
    InputTextareaModule,
    ReactiveFormsModule,
  ],
  exports: [ SendMessagesComponent ]
})
export class SendMessagesModule { }
