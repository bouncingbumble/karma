import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransactionService } from './transaction.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable()
export class SentimentService {

  constructor(private http: HttpClient, private transactionService: TransactionService) { }

  doSentimentAnalysis(base64img: Promise<string>, user){
    console.log('Sentiment anaylsis starting with: ')
    console.log(base64img);
    const config = {
      method:"post",
      url:"http://www.aviorsciences.com/",
      body: {
        user: user,
        img: base64img
      }
    }

    return this.http.post<Object>(config.url, config.body, httpOptions);
  }

  convertSentimentAnalysisToKarma(data){
    //this is where the algorithim to convert the sentiment data to karma will go
    return 5;
  }
}
