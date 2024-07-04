import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { doc, getDocs, getFirestore, onSnapshot, query , collection, addDoc, updateDoc } from "firebase/firestore";
import { Observable, from, of } from 'rxjs';
import firebase from 'firebase/app';
import { getDatabase } from "firebase/database";
import 'firebase/firestore';
@Injectable({
    providedIn: 'root'
})
export class BRCBTicketGridService {

    constructor() { }
    app: any;
    db: any;
    rdb:any;
    initialize(firebaseConfig: any) {
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app)
        this.rdb = getDatabase(this.app);
    }
    listen(){
        const q = query(collection(this.db, "tickets"));
        return new Observable(observer => {

          let changes:any = [];
            getDocs(collection(this.db, "tickets")).then(query =>{
            query.forEach((doc) => {
              let data = doc.data()
              data["id"] = doc.id;
              changes.push(data);
            });
            console.log(changes)
          });
        })
      
    }
    modify(ticket:any){
      var docRef:any = doc(this.db, "tickets", ticket.id);
      let newData = {...ticket};
      delete newData.id;
      updateDoc(docRef,newData)
    }
    unsubscribe(){
  
    }
   

}

