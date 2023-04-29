import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { LoggerModule } from "ngx-logger";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ChatComponent } from "./components";
import { ChatService } from "./services";

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LoggerModule.forChild(),
    InputTextareaModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [
    ChatComponent
  ],
  providers: [
    ChatService
  ]
})
export class ChatModule {
}
