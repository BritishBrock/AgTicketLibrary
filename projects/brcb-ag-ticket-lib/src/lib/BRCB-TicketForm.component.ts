import { Component, Input, input } from '@angular/core';
import { BRCBTicketFormService } from './BRCB-TicketForm.service';

@Component({
  selector: 'BRCB-TicketForm',
  standalone: true,
  imports: [],
  templateUrl: "./BRCB-TicketForm.component.html",
  styles: ``
})
export class BRCBTicketForm {
  @Input() firebaseConfig:any;
  constructor(private BRCBTicketFormService:BRCBTicketFormService ){
    
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
