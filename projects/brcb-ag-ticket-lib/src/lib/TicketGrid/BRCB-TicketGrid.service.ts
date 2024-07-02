import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { doc, getDocs, getFirestore, onSnapshot, query , collection, addDoc, updateDoc } from "firebase/firestore";
import { Observable, from, of } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/firestore';
@Injectable({
    providedIn: 'root'
})
export class BRCBTicketGridService {

    constructor() { }
    app: any;
    db: any;
    initialize(firebaseConfig: any) {
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app)
    }
    snapshot:any;
    listen(){
        const q = query(collection(this.db, "tickets"));
        return new Observable(observer => {


          
             this.snapshot = onSnapshot(q, snapshot => {
                const changes = snapshot.docChanges().map(change => {
                  var data = change.doc.data(); // Extract document data
                  data["id"] = change.doc.id;
                  switch (change.type) {
                    case 'added':
                      return { type: 'added', data };
                    case 'modified':
                      console.log(data)
                      return { type: 'modified', data };
                    case 'removed':
                      return { type: 'removed', data };
                    default:
                      return undefined; // Handle unexpected change types gracefully
                  }
                });

                observer.next(changes);
              }, error => {
                observer.error(error);
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
      this.snapshot();
    }
   

}

