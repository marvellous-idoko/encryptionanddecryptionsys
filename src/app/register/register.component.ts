import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegLogService } from "../reg-log.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required],
    address: [null, Validators.required],
    contact: [null, Validators.required],
    pwd:  [null, Validators.required, Validators.minLength(5), Validators.maxLength(15)],
    conpwd:  [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    typ: [null, Validators.required],
    DOB: [null, Validators.required],
    postalCode: [null, Validators.required, Validators.minLength(5), Validators.maxLength(5)],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name:'Alabama', abbreviation:'AL'},
    {name:'Alaska', abbreviation:'AK'},
    {name:'American Samoa', abbreviation:'AS'},
    {name:'Arizona', abbreviation:'AZ'},
    {name:'Arkansas', abbreviation:'AR'},
    {name:'California', abbreviation:'CA'},
    {name:'Colorado', abbreviation:'CO'},
    {name:'Connecticut', abbreviation:'CT'},
    {name:'Delaware', abbreviation:'DE'},
    {name:'District Of Columbia', abbreviation:'DC'},
    {name:'Federated States Of Micronesia', abbreviation:'FM'},
    {name:'Florida', abbreviation:'FL'},
    {name:'Georgia', abbreviation:'GA'},
    {name:'Guam', abbreviation:'GU'},
    {name:'Hawaii', abbreviation:'HI'},
    {name:'Idaho', abbreviation:'ID'},
    {name:'Illinois', abbreviation:'IL'},
    {name:'Indiana', abbreviation:'IN'},
    {name:'Iowa', abbreviation:'IA'},
    {name:'Kansas', abbreviation:'KS'},
    {name:'Kentucky', abbreviation:'KY'},
    {name:'Louisiana', abbreviation:'LA'},
    {name:'Maine', abbreviation:'ME'},
    {name:'Marshall Islands', abbreviation:'MH'},
    {name:'Maryland', abbreviation:'MD'},
    {name:'Massachusetts', abbreviation:'MA'},
    {name:'Michigan', abbreviation:'MI'},
    {name:'Minnesota', abbreviation:'MN'},
    {name:'Mississippi', abbreviation:'MS'},
    {name:'Missouri', abbreviation:'MO'},
    {name:'Montana', abbreviation:'MT'},
    {name:'Nebraska', abbreviation:'NE'},
    {name:'Nevada', abbreviation:'NV'},
    {name:'New Hampshire', abbreviation:'NH'},
    {name:'New Jersey', abbreviation:'NJ'},
    {name:'New Mexico', abbreviation:'NM'},
    {name:'New York', abbreviation:'NY'},
    {name:'North Carolina', abbreviation:'NC'},
    {name:'North Dakota', abbreviation:'ND'},
    {name:'Northern Mariana Islands', abbreviation:'MP'},
    {name:'Ohio', abbreviation:'OH'},
    {name:'Oklahoma', abbreviation:'OK'},
    {name:'Oregon', abbreviation:'OR'},
    {name:'Palau', abbreviation:'PW'},
    {name:'Pennsylvania', abbreviation:'PA'},
    {name:'Puerto Rico', abbreviation:'PR'},
    {name:'Rhode Island', abbreviation:'RI'},
    {name:'South Carolina', abbreviation:'SC'},
    {name:'South Dakota', abbreviation:'SD'},
    {name:'Tennessee', abbreviation:'TN'},
    {name:'Texas', abbreviation:'TX'},
    {name:'Utah', abbreviation:'UT'},
    {name:'Vermont', abbreviation:'VT'},
    {name:'Virgin Islands', abbreviation:'VI'},
    {name:'Virginia', abbreviation:'VA'},
    {name:'Washington', abbreviation:'WA'},
    {name:'West Virginia', abbreviation:'WV'},
    {name:'Wisconsin', abbreviation:'WI'},
    {name:'Wyoming', abbreviation:'WY'}
  ];

  constructor(private fb: FormBuilder, private s : RegLogService, private r:Router) {}

  onSubmit() {
    var e = this.addressForm.get('pwd').value;
    var y = this.addressForm.get('conpwd').value;
    var form={
    fullname : this.addressForm.get('firstName').value + " "+ this.addressForm.get('lastName').value,
    address: this.addressForm.get('address').value,
    contact: this.addressForm.get('contact').value,
    email: this.addressForm.get('email').value,
    company: this.addressForm.get('company').value,
    pwd:this.addressForm.get('pwd').value,
    DOB: this.addressForm.get('DOB').value
    }
    // console.log(this.addressForm.value)
    if(this.addressForm.get('typ').value == 'agent'){
      this.s.createAgent(form).subscribe(de=>{
        alert(de+'\n Keep It Safe')
        this.r.navigateByUrl('login')
      }, error=>{
        console.error(error);
        alert(error);
      }) 
    }
    else if(this.addressForm.get('typ').value == 'healthPraticioner'){
      this.s.createHP(form).subscribe(de=>{
        alert(de+ '\n Keep It Safe')
        this.r.navigateByUrl('login')
      }, error=>{
        console.error(error);
        alert(error);
      })     
    }
    else if (this.addressForm.get('typ').value == 'client'){
      this.s.createClient(form).subscribe(de=>{
          alert(de+'\n Keep It Safe')
          this.r.navigateByUrl('login')
      }, error=>{
        console.error(error);
        alert(error);
      })
    }
    else{
      alert('complete the form')
    }
    // alert('Thanks!');
  }
}
