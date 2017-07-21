import { Injectable } from '@angular/core';
import { AngularFireDatabase, 
  FirebaseListObservable, 
  FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs' ;
import {Client } from '../models/client';

//from 'angularfire2/auth';

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<Client>;

  constructor(public af: AngularFireDatabase ) { 
    this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;

  }

  deleteClient(id:string){
    return this.clients.remove(id);
  }
  updateClient(id:string, client:Client){
    return this.clients.update(id, client);
  }

  getClient(id:string){
    this.client = this.af.object('/clients/'+id) as FirebaseObjectObservable<Client>;
    return this.client;
  }

  getClients(){
    return this.clients;
  }

  addNewClient(client:Client)
  {
    this.clients.push(client);
  }

}
