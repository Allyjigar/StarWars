
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';



@Injectable({
  providedIn: 'root'
})

export class UserService {

  public registeredUsers: User[] = [];
  public loginUser: boolean = false;

  constructor() {

    if (window.localStorage.getItem('users')) {
      const users = JSON.parse(window.localStorage.getItem('users')?? '[]');
      this.registeredUsers = users;
    }

    if (window.localStorage.getItem('loginUser')) {
      this.loginUser = JSON.parse(window.localStorage.getItem('loginUser')?? 'false');
    }
  }


  setStorage(user: User): void {
    if (!this.registedUser(user.email)) {
      this.registeredUsers.push(user);
      window.localStorage.setItem('users', JSON.stringify(this.registeredUsers));
    }
  }

  registedUser(email: string): boolean{
    if (this.registeredUsers.find(user => user.email === email)) {
      return true;
    }

    return false;
  }

  valida(user: User): boolean{
    if(!this.registedUser(user.email)) {
      return false;
    }
    if(this.registeredUsers.find(user=>user.email === user.email)?.password !== user.password){
      return false;
    }
    this.loged();
    return true;
  }

  loged(){
    this.loginUser = true;
    window.localStorage.setItem('loginUser', JSON.stringify(this.loginUser));
  }

}
