import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {AuthService } from '../../services/auth.service';

//import {ClientService } from '../../services/client.service';
//import {Client} from '../../models/client';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor(public as:AuthService,
            public router:Router,
            public fm:FlashMessagesService) {

   }

  ngOnInit() {
  }

  onSubmit(){
    this.as.login(this.email, this.password)
      .then(res => {
        this.fm.show('You are logged in', {cssClass: 'alert-success', timeout: 2000});
        this.router.navigate(['/']);
      })
      .catch(error=> {
        this.fm.show('Error '+error.message, {cssClass: 'alert-danger', timeout: 4000});
        this.router.navigate(['/login']);
      });
  }

}
