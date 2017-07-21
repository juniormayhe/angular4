import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {SettingsService} from '../services/settings.service';

@Injectable()
export class RegisterGuard {

  constructor(public ss:SettingsService, public router:Router) { 

  }

  canActivate():boolean{
    if (this.ss.getSettings().allowRegistration){
      return true;
    }
    else
    {
      this.router.navigate(['/login']);
      return false;
    }
      
  }

}
