import { TestBed } from "@angular/core/testing";
import { ChatService } from "./chat.service";
import { HttpClientModule } from "@angular/common/http";
import { LoggerTestingModule } from "ngx-logger/testing";

describe("ChatService", () => {
  let service: ChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        LoggerTestingModule
      ]
    });
    service = TestBed.inject(ChatService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
