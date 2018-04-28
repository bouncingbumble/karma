import { Component, OnInit, Input } from '@angular/core';
import { SentimentService } from '../sentiment.service';
import { TransactionService } from '../transaction.service';
import { User } from '../user/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input() users: User[];
  constructor(private sentimentService: SentimentService, private transactionService: TransactionService, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  onSentimentClick(user: User){
    var data = this.sentimentService.doSentimentAnalysis();
    console.log(data);
    var karma: number = this.sentimentService.convertSentimentAnalysisToKarma(data);
    console.log(karma);
    this.transactionService.sendKarma(user, karma);
  }

}
