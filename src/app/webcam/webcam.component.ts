import { Component, OnInit } from '@angular/core';
import { WebCamComponent } from 'ack-angular-webcam';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const template = `
<ack-webcam
  [(ref)]   = "webcam"
  [options] = "options"
  (success) = "onCamSuccess($event)"
  (catch)   = "onCamError($event)"
></ack-webcam>
<br>
<button class="btn btn-lg btn-primary" (click)="genPostData()"> generate post data </button>
`
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Component({
  selector:'app-webcam',
  template:template
}) export class WebcamComponent{
  webcam:WebCamComponent//will be populated by <ack-webcam [(ref)]="webcam">
  base64

  intervalVar;

  constructor(private http: HttpClient){}
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

  //get HTML5 FormData object and pretend to post to server
  genPostData(){
    var base64 = this.webcam.getBase64()
    .then( base=>this.base64=base)
    .catch( e=>console.error(e) )
    .then( base64=>this.postFormData(base64) )
    .catch( e=>console.error(e) )
    console.log(base64);
  }

  postFormData(base64){
    const config = {
      method:"post",
      url:"http://www.aviorsciences.com/",
      body: base64
    }

    console.log(config);

    return this.http.post<Object>(config.url, config.body, httpOptions);
  }

  onCamError(err){}

  onCamSuccess(){}
}
