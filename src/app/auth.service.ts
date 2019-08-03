import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface User {
  uid:string;
  email:string;
  displayName:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user: Observable<User>;
displayName:string;



  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user = afAuth.authState.pipe(
      switchMap(user=>{
        if(user)
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        else
          return of(null);
      })
    );
   }

  async SignInUpWithGoogle(){
        const credential =  await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
        return this.UpdateUserInfo(credential);
  }

   async SignUpWithEmailAndPassword(email, password, firstName){
      this.displayName = firstName;
       const credential =  await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
       this.UpdateUserInfo(credential);
   }

   SignInWithEmailAndPassword(email, password){
     return this.afAuth.auth.signInWithEmailAndPassword(email, password);
   }

   UpdateUserInfo(credential){
   const userRef:AngularFirestoreDocument<User> = this.afs.doc(`users/${credential.user.uid}`);

    if(credential.additionalUserInfo.providerId == 'google.com'){
      this.displayName = credential.user.displayName;
     }
     const userData:User = {
      uid: credential.user.uid,
      email: credential.user.email,
      displayName: this.displayName
     }
     userRef.set(userData, {merge:true});
   }



signOut(){
  this.afAuth.auth.signOut();
}


}
