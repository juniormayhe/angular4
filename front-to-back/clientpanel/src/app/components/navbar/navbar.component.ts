import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import {AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean;
  loggedInUser:string;
  showRegister:boolean;

  constructor(public as:AuthService,
            public ss: SettingsService,
            public router:Router,
            public fm:FlashMessagesService) { }

  ngOnInit() {
    this.as.getAuth().subscribe(auth=> { 
      
      this.isLoggedIn = false;
      if (auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }
      
    });
    this.showRegister = this.ss.getSettings().allowRegistration;

  }

  onLogout(){
    this.as.logout();
    this.router.navigate(['/login']);
    this.fm.show('You are logged out', {cssClass: 'alert-success', timeout: 2000});
  }


  

}
