import { TestBed } from '@angular/core/testing';

import { BRCBAgTicketLibService } from './brcb-ag-ticket-lib.service';

describe('BRCBAgTicketLibService', () => {
  let service: BRCBAgTicketLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BRCBAgTicketLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
