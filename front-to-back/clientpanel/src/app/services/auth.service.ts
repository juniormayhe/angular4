import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(public af: AngularFireAuth) { 

  }

  login(email: string, password:string){
    return new Promise((resolve, reject) => {
      this.af.auth.signInWithEmailAndPassword(email, password)
        .then(user=> resolve(user), error=> reject(error));
    });
  }

  logout(){
    this.af.auth.signOut();
    
  }

  register(email: string, password:string){
    return new Promise((resolve, reject) => {
      this.af.auth.createUserWithEmailAndPassword(email, password)
        .then(user=> resolve(user), error=> reject(error));
    });
  }

  getAuth(){
    return this.af.authState.map(auth => auth);
  }

}
