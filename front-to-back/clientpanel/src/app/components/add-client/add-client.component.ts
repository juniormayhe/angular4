import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../models/client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { SettingsService } from '../../services/settings.service';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client:Client = {
    firstName: '',
    lastName:'',
    email:'',
    phone:'',
    balance:0
  }

  disabledBalanceOnAdd:boolean = true;

  constructor(public fm: FlashMessagesService, 
    public cs: ClientService,
    public ss: SettingsService,
    public router:Router) { 
    
  }

  ngOnInit() {
    this.disabledBalanceOnAdd = this.ss.getSettings().disableBalanceOnAdd;
  }

  onSubmit({value, valid}: {value:Client, valid:boolean}){
    

    if (!valid){
      this.fm.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 2000 });
      this.router.navigate(['add-client']);
    }
    else {
      if (this.disabledBalanceOnAdd)
        value.balance=0;

      this.cs.addNewClient(value);
      this.fm.show('New client added', { cssClass: 'alert-success', timeout: 2000 });
      this.router.navigate(['/']);
    }
      
  }

}
