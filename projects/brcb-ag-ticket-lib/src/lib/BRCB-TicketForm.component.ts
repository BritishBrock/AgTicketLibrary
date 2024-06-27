import { Component, Input, input } from '@angular/core';
import { BRCBAgTicketLibService } from './BRCB-TicketForm.service';

@Component({
  selector: 'BRCB-TicketForm',
  standalone: true,
  imports: [],
  templateUrl: "./BRCB-TicketForm.component.html",
  styles: ``
})
export class BRCBAgTicketLibComponent {
  @Input() firebaseConfig:any;
  constructor(private BRCBTicketFormService:BRCBAgTicketLibService ){
    
  }
  ngOnInit(): void {
    this.BRCBTicketFormService.initialize(this.firebaseConfig);
  }
  insertTicket(){
    this.BRCBTicketFormService.insertTicket().subscribe(data=>{
      console.log(data);
    })
  }
}
