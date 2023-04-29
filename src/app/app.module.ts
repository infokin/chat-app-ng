import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { ChatModule } from "./modules";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    LoggerModule.forRoot({
      level: environment.production
        ? NgxLoggerLevel.ERROR
        : NgxLoggerLevel.DEBUG
    })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
