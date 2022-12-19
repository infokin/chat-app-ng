import { NgModule, OnInit } from '@angular/core';
import { SendMessagesComponent } from './send-messages.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    SendMessagesComponent
  ],
  imports: [
    ButtonModule,
    InputTextareaModule,
    ReactiveFormsModule,
  ],
  exports: [ SendMessagesComponent ]
})
export class SendMessagesModule { }
