import { Component,OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { RegLogService } from "./reg-log.service";
import { DOCUMENT } from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'insureBata';
  constructor(@Inject(DOCUMENT) private document: Document, private r:Router, private s:RegLogService){}
 
  gotoreg(){
    this.r.navigateByUrl('/login')
  }
  ngOnInit(){
    this.chk()
  }
  chk(){
    if(this.s.u.fullName != null){
      this.document.getElementById('v').innerHTML = 'Full name: ' + this.s.u.fullName;
      this.document.getElementById('b').style.display = 'none';
      this.document.getElementById('r').style.display = 'block';
      this.document.getElementById('u').innerHTML = 'Your ID: ' + this.s.u.id;
    }
  }
}
