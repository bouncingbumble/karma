import { Injectable } from '@angular/core';
import { User } from './user/user.model';
import { UserService } from './user.service';

@Injectable()
export class TransactionService {

  constructor(private userService: UserService) { }

  sendKarma(user: User, amount: number){
    this.userService.addKarma(user, amount);
  }
}
