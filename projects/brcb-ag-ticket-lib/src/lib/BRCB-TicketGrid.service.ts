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
        const unsubscribe = onSnapshot(q, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                console.log("New city: ", change.doc.data());
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
          });
        });
      
    }
   



}

function ref(db: any, arg1: string) {
    throw new Error('Function not implemented.');
}
function onValue(gameRef: void, arg1: (snapshot: any) => void) {
    throw new Error('Function not implemented.');
}

