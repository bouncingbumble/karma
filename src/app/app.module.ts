import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SentimentService } from './sentiment.service';
import { TransactionService } from './transaction.service';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    SentimentAnalysisComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SentimentService, TransactionService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
