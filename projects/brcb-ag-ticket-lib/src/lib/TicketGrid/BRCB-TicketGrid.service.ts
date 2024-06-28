import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, onSnapshot, query } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
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
    listen(){
        const q = query(collection(this.db, "users"));
        return new Observable(observer => {
             onSnapshot(q, snapshot => {
                const changes = snapshot.docChanges().map(change => {
                  const data = change.doc.data(); // Extract document data
                  switch (change.type) {
                    case 'added':
                      return { type: 'added', data };
                    case 'modified':
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
   

}

