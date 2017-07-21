import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string;
  password:string;

  constructor(public as:AuthService,
            public router:Router,
            public fm:FlashMessagesService) {

   }

  ngOnInit() {
  }

onSubmit(){
    this.as.register(this.email, this.password)
      .then(res => {
        this.fm.show('You are registered', {cssClass: 'alert-success', timeout: 2000});
        this.router.navigate(['/']);
      })
      .catch(error=> {
        this.fm.show('Error '+error.message, {cssClass: 'alert-danger', timeout: 4000});
        this.router.navigate(['/register']);
      });
  }
  
}
