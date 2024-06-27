import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BRCBAgTicketLibComponent } from './brcb-ag-ticket-lib.component';

describe('BRCBAgTicketLibComponent', () => {
  let component: BRCBAgTicketLibComponent;
  let fixture: ComponentFixture<BRCBAgTicketLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BRCBAgTicketLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BRCBAgTicketLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
