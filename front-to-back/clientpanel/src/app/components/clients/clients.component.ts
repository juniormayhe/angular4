import { Component, OnInit } from '@angular/core';
import {ClientService } from '../../services/client.service';
import {Client} from '../../models/client';
//import {Routes, RouterModule, Router} from "@angular/router";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  totalOwed:number;

  constructor(public cs: ClientService) { 
    
  }

  ngOnInit() {
    this.cs.getClients().subscribe(clients=> {
      this.clients = clients;
       this.getTotalOwed();

    });
  }

  getTotalOwed(){
    let _total:number = 0.0;
    for(let i = 0;i < this.clients.length;i++){
      
      _total = _total + this.clients[i].balance;
    }
    this.totalOwed = _total;
    
    
  }


}
