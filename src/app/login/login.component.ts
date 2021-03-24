import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DOCUMENT } from "@angular/common";

import { RegLogService } from "../reg-log.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private fb: FormBuilder, private s: RegLogService, private r: Router) { }

  addressForm = this.fb.group({
    id: [null, Validators.required],
    pwd: [null, Validators.required]
  });


  goto() {
    this.r.navigateByUrl('/register')
  }
  async onSubmit() {

    this.document.getElementById('bk').innerHTML = "Please Wait . . .";
    (this.document.getElementById('bk')as HTMLInputElement).disabled =  true;
    (this.document.getElementById('ppp') as HTMLInputElement).disabled=true;
    const cred = {
      id: this.addressForm.get('id').value,
      pwd: this.addressForm.get('pwd').value
    };
    (await this.s.login(cred)).subscribe(c => {
      console.info(c)
      // alert(c.toString().slice(0,15));
      if (c.toString().slice(0,15) == 'Unable to Login') {
        alert(c)
        this.document.getElementById('bk').innerHTML = "login"
        this.document.getElementById('bk').removeAttribute('disabled');
        this.document.getElementById('ppp').removeAttribute('disabled');
      } else {
        var d = Object.values(c).pop()
        this.s.maker(d);
        if (d.fullName.length > 0) {
          this.r.navigateByUrl('/home')
        }
      }
    })
  }
  ngOnInit() { }

}
