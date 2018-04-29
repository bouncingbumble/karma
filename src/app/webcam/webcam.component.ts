import { Component, OnInit, Output } from '@angular/core';
import { WebCamComponent } from 'ack-angular-webcam';
import { SentimentService } from '../sentiment.service';

const template = `
<ack-webcam
  [(ref)]   = "webcam"
  [options] = "options"
  (success) = "onCamSuccess($event)"
  (catch)   = "onCamError($event)"
></ack-webcam>
<br>
`

@Component({
  selector:'app-webcam',
  template:template
}) export class WebcamComponent{
  webcam:WebCamComponent//will be populated by <ack-webcam [(ref)]="webcam">
  base64

  intervalVar;

  constructor(private sentimentService: SentimentService){}
  ngOnInit() {
    // this.intervalVar = setInterval(() => {
    //   this.genPostData();
    // }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalVar) {
      clearInterval(this.intervalVar);
    }
  }

  genPostData(){
    var base64img = this.webcam.getBase64();
    console.log('64 generated from webcam pic:')
    console.log(base64img);
    return base64img;
  }

  onCamError(err){}

  onCamSuccess(){}
}
