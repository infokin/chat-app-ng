import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatUiModule } from './components/chat/chat-ui.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ChatUiModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
