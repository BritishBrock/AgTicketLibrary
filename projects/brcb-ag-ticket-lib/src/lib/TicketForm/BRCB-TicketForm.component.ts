import { Component, Input, NgModule, input } from '@angular/core';
import { BRCBTicketFormService } from './BRCB-TicketForm.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'BRCB-TicketForm',
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./BRCB-TicketForm.component.html",
  styles: ``
})
export class BRCBTicketForm {
  @Input() firebaseConfig:any;
  constructor(private BRCBTicketFormService:BRCBTicketFormService ){
    
  }

ticket:any = {

}



  ngOnInit(): void {
    this.BRCBTicketFormService.initialize(this.firebaseConfig);

    

  }
  insertTicket(){
    this.BRCBTicketFormService.insertTicket(this.ticket);
  }



}


export const  TicketConf = {
  status:"string",
  type:"number",
  name:"string",
  email:"string",
  priority:"number",
  issue:"string",
  description:"string",
}
