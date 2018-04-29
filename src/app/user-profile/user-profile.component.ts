import { Component, OnInit, Input, ViewChild, ElementRef, Output } from '@angular/core';
import { SentimentService } from '../sentiment.service';
import { TransactionService } from '../transaction.service';
import { User } from '../user/user.model';
import { UserService } from '../user.service';
import { WebcamComponent } from '../webcam/webcam.component';
import { WebCamComponent } from 'ack-angular-webcam';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @ViewChild(WebcamComponent) webcam: WebcamComponent;
  @Input() users: User[];
  img64: Promise<string>;
  constructor(private sentimentService: SentimentService, private transactionService: TransactionService, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  grabImg64(user){
    console.log('user is: ');
    console.log(user);
    this.img64 = this.webcam.genPostData();
    var response = this.sentimentService.doSentimentAnalysis(this.img64, user);
    var karma = this.sentimentService.convertSentimentAnalysisToKarma(response);
    this.transactionService.sendKarma(user, karma);
  }

}
