import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService{

    //data: Observable<Array<number>>;

    constructor(public http:Http){
        //this.
    }

    getUsers(){
        return this.http.get('https://jsonplaceholder.typicode.com/users')
            .map(response=> response.json());
    }

    addUser(user: any){
        return this.http.post('https://jsonplaceholder.typicode.com/users', user)
            .map(response=>response.json());
    }

    updateUser(user: any){
        return this.http.put('https://jsonplaceholder.typicode.com/users/'+ user.id, user)
            .map(response=>response.json());
    }

    deleteUser(id: number){
        return this.http.delete('https://jsonplaceholder.typicode.com/users/'+ id)
            .map(response=>response.json());
    }


/*
    getData(){
        this.data = new Observable(observer => {
            setTimeout(()=> {
                observer.next(1);
            }, 1000);

            setTimeout(()=> {
                observer.next(2);
            }, 2000);

            setTimeout(()=> {
                observer.next(3);
            }, 3000);

            setTimeout(()=> {
                observer.next('Hello');
            }, 4000);

            setTimeout(()=> {
                observer.complete();
            }, 5000);
            
        });
        return this.data;
    }
    */
    /*users: string[];

    constructor(){
        this.users = ['Mark', 'Sharon', 'Beth', 'John'];
    }

    getUsers(){
        return this.users;
    }*/
}