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
     this.BRCBTicketGridService.listen()
    //.subscribe((snapshot:any) => {
    //     snapshot.docChanges().forEach((change:any) => {
    //         if (change.type === "added") {
    //             console.log("New city: ", change.doc.data());
    //         }
    //         if (change.type === "modified") {
    //             console.log("Modified city: ", change.doc.data());
    //         }
    //         if (change.type === "removed") {
    //             console.log("Removed city: ", change.doc.data());
    //         }
    //     });
    // })
}

}
