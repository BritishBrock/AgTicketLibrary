import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { Observable, from, of } from 'rxjs';
import { getDatabase } from "firebase/database";
@Injectable({
  providedIn: 'root'
})
export class BRCBTicketFormService {

  constructor() { }
  app:any;
  db:any;
  rdb:any;
    initialize(firebaseConfig:any){
      this.app = initializeApp(firebaseConfig);
      this.db = getFirestore(this.app)
      this.rdb = getDatabase(this.app);
    }

   insertTicket(ticket:any){
      addDoc(collection(this.db, "tickets"), ticket)
  }

}
