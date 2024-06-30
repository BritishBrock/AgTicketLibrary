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
 TicketConf = {
    status:"string",
    type:"number",
    name:"string",
    email:"string",
    priority:"number",
    issue:"string",
    description:"string",
  }
  


  ngOnInit(): void {
    this.BRCBTicketFormService.initialize(this.firebaseConfig);

    Object.entries(this.TicketConf).every(([key,value])=>{
      console.log(key,value)
      return true;
    })

  }
  insertTicket(){
    this.BRCBTicketFormService.insertTicket(this.ticket);
  }



}


