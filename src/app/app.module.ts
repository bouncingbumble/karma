import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SentimentService } from './sentiment.service';
import { TransactionService } from './transaction.service';
import { UserService } from './user.service';
import { WebCamModule } from 'ack-angular-webcam';
import { WebcamComponent } from './webcam/webcam.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SentimentAnalysisComponent,
    UserProfileComponent,
    WebcamComponent
  ],
  imports: [
    BrowserModule,
    WebCamModule,
    HttpClientModule
  ],
  providers: [SentimentService, TransactionService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
