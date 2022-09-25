import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    ButtonModule,
    InputTextareaModule,
    ReactiveFormsModule
  ],
  exports: [ChatComponent]
})
export class ChatModule { }
