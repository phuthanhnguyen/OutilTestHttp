import { Component } from '@angular/core';
import {Http, Headers} from "@angular/http";

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test tool for http Methods';
  nameHeader:string=null;
  contentHeader:string=null;
  jsonInput:string=null;
  methods:string[]=["GET","PUT","POST","DELETE"];
  methodM:string=null;
  result:string=null;

  constructor(private http:Http){

  }

  sendRequest = function () {
    var headers:Headers = new Headers();
    headers.append('Content-type','application/json');
    if(this.nameHeader!=null && this.contentHeader!=null){
      headers.append(this.nameHeader,this.contentHeader);
    }

    switch(this.methodM){
      case 'GET':
        console.log('get');
        this.http.get(this.url,{headers:headers})
          .map(res=>res.json())
          .subscribe(
            data=>{
              console.log(data);
              this.result = JSON.stringify(data);
            },
            error=>{console.log(error)}
          );
        break;
      case 'PUT':
        console.log('put');
        console.log('post');
        var json;

        if (this.jsonInput != null){
          json = JSON.parse(this.jsonInput);
          console.log(json);
        }else console.log("need JSON input for PUT request");

        this.http.post(this.url,json,{headers:headers})
          .map(res=>console.log(res.status));
        break;
      case 'POST':
        console.log('post');
        var json;

        if (this.jsonInput != null){
          json = JSON.parse(this.jsonInput);
          console.log(json);
        }else console.log("need JSON input for POST request");

        this.http.post(this.url,json,{headers:headers})
          .map(res=>res.json())
          .subscribe(
            data=>{
              console.log(data);
              var jsonRes = data;
              this.result = JSON.stringify(jsonRes);
            },
            error=>{}
          );
        break;
      case 'DELETE':
        console.log('delete');
        break;
      default:
        console.log('choose a method');
        break;
    }
  }
}
