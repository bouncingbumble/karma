import { Injectable } from '@angular/core';
import { User } from './user/user.model';
import { Wallet } from './wallet/wallet.model';

@Injectable()
export class UserService {
  private users: User[] = [
    new User(
      'Juadan',
      new Wallet(0)
    )
  ];
  constructor() { }

  getUsers(){
    return this.users.slice();
  }

  addKarma(user: User, amount: number){
    this.users.forEach(function(userInArray){
      if(user.name === userInArray.name){
        userInArray.wallet.karma += amount;
      }
    })
  }
}
