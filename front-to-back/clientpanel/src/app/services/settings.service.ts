import { Injectable } from '@angular/core';
import {Settings } from '../models/settings';

@Injectable()
export class SettingsService {
  settings: Settings ={
    allowRegistration: true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: true
  };

  constructor() { 
    if (localStorage.getItem('SETTINGS') != null){
      this.settings = JSON.parse(localStorage.getItem('SETTINGS'));
    }
  }

  getSettings(){
    return this.settings;
  }

  changeSettings(settings:Settings){
    localStorage.setItem('SETTINGS', JSON.stringify(this.settings));
  }
}
