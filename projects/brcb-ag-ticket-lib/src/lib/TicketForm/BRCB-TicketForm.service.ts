import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { Observable, from, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BRCBTicketFormService {

  constructor() { }
  app:any;
  db:any;
    initialize(firebaseConfig:any){
      this.app = initializeApp(firebaseConfig);
      this.db = getFirestore(this.app)
    }

   insertTicket(ticket:any){
      addDoc(collection(this.db, "tickets"), ticket)
  }

}
