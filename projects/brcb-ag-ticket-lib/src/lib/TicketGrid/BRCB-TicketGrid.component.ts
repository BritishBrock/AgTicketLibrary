import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BRCBTicketGridService } from './BRCB-TicketGrid.service';
import { KeyValuePipe } from '@angular/common';
import { TicketConf } from '../TicketForm/BRCB-TicketForm.component';
import { FormsModule } from '@angular/forms';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';

@Component({
  selector: 'BRCB-TicketGrid',
  standalone: true,
  imports: [KeyValuePipe,CommonModule,FormsModule],
  templateUrl: "./BRCB-TicketGrid.component.html",
  styleUrl: "./BRCB-TicketGrid.component.css",
})
export class BRCBTicketGrid {
[x: string]: any;
    @Input() firebaseConfig:any;
  constructor(private BRCBTicketGridService:BRCBTicketGridService ){
    
  }
  ticketConf = TicketConf;

  dataSet:any = [];
  opened:number = -1;
  sub:any
  ngOnInit(): void {
     this.BRCBTicketGridService.initialize(this.firebaseConfig);
     let sub =this.BRCBTicketGridService.listen().subscribe((data:any)=>{
      for(let i = 0; i < data.length;i++){
        if(data[i].type == "added")this.dataSet.push(data[i].data);
        else if(data[i].type == "modified"){
            for(let j = 0; j < this.dataSet.length;j++){
              if(this.dataSet[j].id == data[i].data.id ){
                this.dataSet[j] = data[i].data;
                break;
              }
            }
        }
      }
    })
  }


  gridHeaders:any = ["Date Of Birth", "First Name" , "Last Name"]
  
  save(index:number){
    this.BRCBTicketGridService.modify(this.dataSet[index])
  }
  ngOnDestroy(): void {
    this.BRCBTicketGridService.unsubscribe();
    this.sub.unsubscribe();
  }

}


