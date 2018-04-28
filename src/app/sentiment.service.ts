import { Injectable } from '@angular/core';

@Injectable()
export class SentimentService {

  constructor() { }

  doSentimentAnalysis(){
    return {
      firstNumber: 5,
      secondNumber: 3,
      thirdNumber: 3
    };
  }

  convertSentimentAnalysisToKarma(data){
    return data.firstNumber + data.secondNumber + data.thirdNumber;
  }
}
