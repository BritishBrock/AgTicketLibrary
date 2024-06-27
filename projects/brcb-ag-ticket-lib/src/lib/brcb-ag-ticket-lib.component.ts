import { Component, Input, input } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
@Component({
  selector: 'BRCB-TicketForm',
  standalone: true,
  imports: [],
  templateUrl: "./brcb-ag-ticket-lib.component.html",
  styles: ``
})
export class BRCBAgTicketLibComponent {
  @Input() firebaseConfig:any;
  async ngOnInit(): Promise<void> {
    const app = initializeApp(this.firebaseConfig);
    const db = getFirestore(app);

    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}
