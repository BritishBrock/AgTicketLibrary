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
    this.BRCBTicketFormService.insertTicket();
  }



}


