import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowMessagesModule } from './show-messages/show-messages.module';
import { SendMessagesModule } from './send-messages/send-messages.module';

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    ButtonModule,
    InputTextareaModule,
    ReactiveFormsModule,
    ShowMessagesModule,
    SendMessagesModule,
  ],
  exports: [ChatComponent]
})
export class ChatModule { }
