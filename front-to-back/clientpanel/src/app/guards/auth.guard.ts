import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(public router:Router, 
    public af:AngularFireAuth){


    }

    canActivate(): Observable<boolean>{
        return this.af.authState.map(auth=>{
            if (auth){
                
                return true;
            }
            else{
                this.router.navigate(['/login']);
                return false;
            }
                
        });
    }
    

}