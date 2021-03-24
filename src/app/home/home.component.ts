import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import * as crypto from 'crypto-js';
// const crypto:any = require('crypto');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private d: Document, private r: Router, private fb: FormBuilder ) { }

  ngOnInit() { }
  jof: File;
  selectedFiles: FileList;
  selectedFile: FileList;
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  selectFiles(event) {
    this.selectedFile = event.target.files;
    console.info(this.selectedFile)
    console.info(event.target.files)

  }
  fr = new FileReader()
  fer = new FileReader()

  koo(r) {
    // let blob = new Blob([r], { type: 'application/octet-stream,' });
    // console.info(blob)
    // let url = window.URL.createObjectURL(blob);
    var a = this.d.getElementById('lo')
    a.setAttribute('href', 'data:application/octet-stream,' + r)
    a.setAttribute('download', 'encrypted');
    a.click();
  }
  async dkoo(r) {
    var h = r.toString();
    const sd = atob(r.slice(r.search(',') + 1))
    const byteNumbers = new Array(sd.length);
    for (let i = 0; i < sd.length; i++) {
      byteNumbers[i] = sd.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    let blob = new Blob([byteArray])
   
    let f = new File([blob], "momo",
      { type: h.slice(5, h.search(';')) })
    console.info(blob);
    var a = this.d.getElementById('low')

    // a.setAttribute('href',  'data:'+h.slice(5,h.search(';'))+','+ r); 
    // a.setAttribute('download', 'encrypted');
    // a.click();
    let url = window.URL.createObjectURL(f);
    var a = this.d.getElementById('low')
    a.setAttribute('href', url)
    a.setAttribute('download', "decrypted");
    a.click()
  }
  // dkoo(r){
  //   var a = this.d.getElementById('low')
  //   a.setAttribute('href','data:application/octet-stream,' + r) 
  //   a.setAttribute('download', 'decrypted');
  // }
  km;
  poop;
  ko() {
    var f = this.selectedFiles
    // console.info(f.item(0))

    this.fr.onloadend = (e) => {
      let password = 'disPasswordIsSoSec§ur#!';
      const key = crypto.enc.Base64.parse('lol');
      const iv = crypto.enc.Base64.parse("#base64IV#");
    
      // let encrypted = crypto.AES.encrypt(e.target.result, 
      //   this.keye.get('key').value.trim())
      this.poop = crypto.AES.encrypt(this.fr.result, this.keye.get('key').value.trim()).toString();
      // console.info(e.target.result.slice(0, 30) + "  before encryption ")
      // console.info(this.poop  + "  after encryption ")
      var r = this.poop
      this.koo(this.poop)
    }
    this.fr.readAsDataURL(f.item(0))

    //  console.info(f.item(0).name.slice(0,(f.item(0).name.length - 4)))
  }
a:Boolean = false;
  dko() {
    var f = this.selectedFile

    const key = crypto.enc.Base64.parse('lol');
    const iv = crypto.enc.Base64.parse("#base64IV#");
    this.fer.onloadend = (e) => {
      // console.info(e.target.result + "before decrypt")
      //  var decrypted = crypto.AES.decrypt(this.fer.result, 'kol').toString(crypto.enc.Utf8);
     try{ 
       var decrypted = crypto.AES.decrypt(this.fer.result, this.key.get('key').value.trim()).toString(crypto.enc.Utf8);
      this.dkoo(decrypted)

    }catch(e){
      this.a = true
    }

      // console.info(decrypted)
      // this.dkoo(decrypted)
    }
    this.fer.readAsText(f.item(0))

  }
  keye = this.fb.group({key: [null, Validators.required]}) 
  key = this.fb.group(  {key: [null, Validators.required]}) 
  show: Boolean = false
  gotoDec() {
    this.show = true
    this.d.getElementById('pk').classList.add('active')
    this.d.getElementById('mk').classList.remove('active')
    this.d.getElementById('decrypt').style.display = 'block'
    this.d.getElementById('encrypt').style.display = 'none'
  }
  gotoEnc() {
    this.show = true

    this.d.getElementById('mk').classList.add('active')
    this.d.getElementById('pk').classList.remove('active')
    this.d.getElementById('encrypt').style.display = 'block'
    this.d.getElementById('decrypt').style.display = 'none'
  }
  // $(function()

  //   var body = $('body'),
  //       stage = $('#stage'),
  //       back = $('a.back');

  //   /* Step 1 */

  //   $('#step1 .encrypt').click(function(){
  //       body.attr('class', 'encrypt');

  //       // Go to step 2
  //       step(2);
  //   });

  //   $('#step1 .decrypt').click(function(){
  //       body.attr('class', 'decrypt');
  //       step(2);
  //   });

  //   /* Step 2 */

  //   $('#step2 .button').click(function(){
  //       // Trigger the file browser dialog
  //       $(this).parent().find('input').click();
  //   });

  //   // Set up events for the file inputs

  //   var file = null;

  //   $('#step2').on('change', '#encrypt-input', function(e){

  //       // Has a file been selected?

  //       if(e.target.files.length!=1){
  //           alert('Please select a file to encrypt!');
  //           return false;
  //       }

  //       file = e.target.files[0];

  //       if(file.size > 1024*1024){
  //           alert('Please choose files smaller than 1mb, otherwise you may crash your browser. \nThis is a known issue. See the tutorial.');
  //           return;
  //       }

  //       step(3);
  //   });

  //   $('#step2').on('change', '#decrypt-input', function(e){

  //       if(e.target.files.length!=1){
  //           alert('Please select a file to decrypt!');
  //           return false;
  //       }

  //       file = e.target.files[0];
  //       step(3);
  //   });

  //   /* Step 3 */

  //   $('a.button.process').click(function(){

  //       var input = $(this).parent().find('input[type=password]'),
  //           a = $('#step4 a.download'),
  //           password = input.val();

  //       input.val('');

  //       if(password.length<5){
  //           alert('Please choose a longer password!');
  //           return;
  //       }

  //       // The HTML5 FileReader object will allow us to read the 
  //       // contents of the  selected file.

  //       var reader = new FileReader();

  //       if(body.hasClass('encrypt')){

  //           // Encrypt the file!

  //           reader.onload = function(e){

  //               // Use the CryptoJS library and the AES cypher to encrypt the 
  //               // contents of the file, held in e.target.result, with the password

  //               var encrypted = crypto.AES.encrypt(e.target.result, 'lol');

  //               // The download attribute will cause the contents of the href
  //               // attribute to be downloaded when clicked. The download attribute
  //               // also holds the name of the file that is offered for download.

  //               a.attr('href', 'data:application/octet-stream,' + encrypted);
  //               a.attr('download', file.name + '.encrypted');

  //               step(4);
  //           };

  //           // This will encode the contents of the file into a data-uri.
  //           // It will trigger the onload handler above, with the result

  //           reader.readAsDataURL(file);
  //       }
  //       else {

  //           // Decrypt it!

  //           reader.onload = function(e){

  //               var decrypted = CryptoJS.AES.decrypt(e.target.result, password)
  //                                       .toString(CryptoJS.enc.Latin1);

  //               if(!/^data:/.test(decrypted)){
  //                   alert("Invalid pass phrase or file! Please try again.");
  //                   return false;
  //               }

  //               a.attr('href', decrypted);
  //               a.attr('download', file.name.replace('.encrypted',''));

  //               step(4);
  //           };

  //           reader.readAsText(file);
  //       }
  //   });

  //   /* The back button */

  //   back.click(function(){

  //       // Reinitialize the hidden file inputs,
  //       // so that they don't hold the selection 
  //       // from last time

  //       $('#step2 input[type=file]').replaceWith(function(){
  //           return $(this).clone();
  //       });

  //       step(1);
  //   });

  //   // Helper function that moves the viewport to the correct step div

  //   function step(i){

  //       if(i == 1){
  //           back.fadeOut();
  //       }
  //       else{
  //           back.fadeIn();
  //       }

  //       // Move the #stage div. Changing the top property will trigger
  //       // a css transition on the element. i-1 because we want the
  //       // steps to start from 1:

  //       stage.css('top',(-(i-1)*100)+'%');
  //   }

  // });
}
