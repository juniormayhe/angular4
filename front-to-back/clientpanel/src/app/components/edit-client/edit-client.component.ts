import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SettingsService } from '../../services/settings.service';
import {ClientService } from '../../services/client.service';
import {Client} from '../../models/client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id:string;
  client:Client;

  disableBalanceOnEdit:boolean=true;

  constructor(public cs: ClientService, 
    public ss: SettingsService,
    public fm: FlashMessagesService, 
    public router:Router,
    public route:ActivatedRoute) { }

  ngOnInit() {
    
    this.client = {
      firstName: '',
      lastName:'',
      email:'',
      phone:'',
      balance:0
    }

    this.id = this.route.snapshot.params['id'];
    
    this.cs.getClient(this.id).subscribe(client=> {
      this.client = client;
    });

    this.disableBalanceOnEdit= this.ss.getSettings().disableBalanceOnEdit;

  }

  onSubmit({value, valid}: {value:Client, valid:boolean}){
    

    if (!valid){
      this.fm.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 2000 });
      this.router.navigate(['edit-client/' +this.id]);
    }
    else {
      

      this.cs.updateClient(this.id, value);
      this.fm.show('Client updated', { cssClass: 'alert-success', timeout: 2000 });
      this.router.navigate(['/client/'+this.id]);
    }
      
  }

}
