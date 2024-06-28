import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BRCBTicketGridService } from './BRCB-TicketGrid.service';
import { KeyValuePipe } from '@angular/common';
@Component({
  selector: 'BRCB-TicketGrid',
  standalone: true,
  imports: [KeyValuePipe,CommonModule],
  templateUrl: "./BRCB-TicketGrid.component.html",
  styleUrl: "./BRCB-TicketGrid.component.css",
})
export class BRCBTicketGrid {
[x: string]: any;
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


  gridHeaders:any = ["Date Of Birth", "First Name" , "Last Name"]
  


}


