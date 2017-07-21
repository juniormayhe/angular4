import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import {ClientService } from '../../services/client.service';
import {Client} from '../../models/client';
@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id:string;
  client:Client;
  hasBalance:boolean=false;
  showBalanceUpdateInput:boolean=false;
  

  constructor(public cs: ClientService, 
    public fm: FlashMessagesService, 
    public router:Router,
    public route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.cs.getClient(this.id).subscribe(client=> {
      this.hasBalance = client.balance > 0;
      this.client = client;
    });
  }

  updateBalance(id:string){
    console.log(id);
    this.cs.updateClient(this.id, this.client);
    this.fm.show('Balance updated', {cssClass: 'alert-success', timeout: 2000});
    this.router.navigate(['/client/'+this.id]);
  }

  onDelete(){
    if (confirm("Are you sure?")) {
      this.cs.deleteClient(this.id);
      this.fm.show('Client deleted', {cssClass: 'alert-success', timeout: 2000});
      this.router.navigate(['/']);
    }
  }

}
