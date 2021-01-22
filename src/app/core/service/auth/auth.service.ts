import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  createUser(email: string, password: string) {
    return  this.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email:string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.auth.signOut();
  }

  stateUser() {
    return this.auth.authState;
  }
}
