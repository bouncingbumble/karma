import { Injectable } from '@angular/core';

@Injectable()
export class SentimentService {

  constructor() { }

  doSentimentAnalysis(imgUrl: string){
    console.log(imgUrl);
    //this is where all the sentiment analysis logic can go
    //i'm assuming it will return a data object lolz
    return {
      firstNumber: 5,
      secondNumber: 3,
      thirdNumber: 3
    };
  }

  convertSentimentAnalysisToKarma(data){
    //this is where the algorithim to convert the sentiment data to karma will go
    return data.firstNumber + data.secondNumber + data.thirdNumber;
  }
}
