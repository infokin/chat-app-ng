import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { LoggerModule } from "ngx-logger";

@NgModule({
  imports: [
    HttpClientModule,
    LoggerModule.forChild()
  ]
})
export class ChatModule {
}
