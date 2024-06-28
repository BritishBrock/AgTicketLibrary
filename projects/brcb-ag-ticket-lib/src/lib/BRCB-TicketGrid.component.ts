import { Component, Input, input } from '@angular/core';
import { BRCBTicketGridService } from './BRCB-TicketGrid.service';

@Component({
  selector: 'BRCB-TicketGrid',
  standalone: true,
  imports: [],
  templateUrl: "./BRCB-TicketGrid.component.html",
  styles: ``
})
export class BRCBTicketGrid {
    @Input() firebaseConfig:any;
  constructor(private BRCBTicketGridService:BRCBTicketGridService ){
    
  }
  ngOnInit(): void {
    this.BRCBTicketGridService.initialize(this.firebaseConfig);
     this.BRCBTicketGridService.listen().subscribe(data=>{console.log(data)})

}

}
