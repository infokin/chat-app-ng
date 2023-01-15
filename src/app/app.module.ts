import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatUiModule } from './components/chat/chat-ui.module';
import { ChatModule } from './modules/chat/chat.module';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ChatUiModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
