import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    ButtonModule,
    InputTextareaModule
  ],
  exports: [ChatComponent]
})
export class ChatModule { }
