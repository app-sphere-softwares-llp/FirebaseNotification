import { TestBed } from '@angular/core/testing';

import { PushnotificationserviceService } from './pushnotificationservice.service';

describe('PushnotificationserviceService', () => {
  let service: PushnotificationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PushnotificationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
