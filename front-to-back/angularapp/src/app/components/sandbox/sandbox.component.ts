import { Component } from '@angular/core'
import { DataService } from '../../services/data.service'

@Component({
    selector: 'sandbox',
    templateUrl:  `./sandbox.component.html`,
    styleUrls: ['./sandbox.component.css']
    
    
    
})

export class SandboxComponent{

    //users:string[];
    //data: any[]=['Johanna', 'Julia'];
    users:any[];
    user = {
        name:'',
        email:'',
        phone:''
    }
    isEdit: boolean = false;

    constructor(public dataService: DataService){
        //this.users = this.dataService.getUsers();
        //console.log(this.users);
        this.dataService.getUsers().subscribe(users =>{
            //console.log(users);
            this.users = users;
        })

    }

    onSubmit(isEditing: boolean){
        if (isEditing)
            this.dataService.updateUser(this.user).subscribe(user => {
                for (let i=0;i < this.users.length;i++){
                    if (this.users[i].id == user.id){
                        this.users.splice(i, 1);
                        break;
                    }
                }//for
                this.users.unshift(user);
            })
        else    
            this.dataService.addUser(this.user).subscribe(user => {
                console.log(user);
                this.users.unshift(user);
            })
    }

    onEdit(user){
        this.isEdit = true;
        this.user = user;
    }

    onDelete(id){
        this.dataService.deleteUser(id).subscribe(user => {
            for (let i=0;i < this.users.length;i++){
                if (this.users[i].id == id){
                    this.users.splice(i, 1);
                    break;
                }
            }
        });
    }
}
