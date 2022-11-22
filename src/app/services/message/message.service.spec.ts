import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        LoggerTestingModule,
      ]
    });
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
