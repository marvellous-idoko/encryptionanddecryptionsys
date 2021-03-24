import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegLogService {
  public u;
  // public uq;
  server = 'https://insurebeta.herokuapp.com/';
  // server = 'http://localhost:3000/';

  constructor(private Http: HttpClient, private r: Router) { }

  createHP(userr: {}) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.post(this.server + 'registerHP', userr, { headers: headers })
  }
  createClient(userr: {}) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.post(this.server + 'registerClient', userr, { headers: headers })
  }
  createAgent(userr: {}) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.post(this.server + 'registerAgent', userr, { headers: headers })
  }
  async login(cred: {}) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'applicatiion/json');
    return this.Http.post(this.server + 'reg', cred, { headers: headers })
  }
  maker(s:any){
    this.u = s; 
    console.log(this.u)
    console.log(s)
  }
}
