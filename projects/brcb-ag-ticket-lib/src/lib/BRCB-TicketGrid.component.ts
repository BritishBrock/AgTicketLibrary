import { Component, Input, input } from '@angular/core';
import { BRCBTicketGridService } from './BRCB-TicketGrid.service';
import { KeyValuePipe } from '@angular/common';
@Component({
  selector: 'BRCB-TicketGrid',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: "./BRCB-TicketGrid.component.html",
  styles: ``
})
export class BRCBTicketGrid {
    @Input() firebaseConfig:any;
  constructor(private BRCBTicketGridService:BRCBTicketGridService ){
    
  }


  dataSet:any = [];

  ngOnInit(): void {
    this.BRCBTicketGridService.initialize(this.firebaseConfig);
     this.BRCBTicketGridService.listen().subscribe((data:any)=>{
      for(let i = 0; i < data.length;i++){
        if(data[i].type == "added")this.dataSet.push(data[i].data);
      }
    })
  }


  gridTemplate:any = {
    test:"f",
  }
  


}


