import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import {Settings} from '../../models/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings:Settings;

  constructor(public ss:SettingsService, 
    public router:Router,
    public fm: FlashMessagesService) { }

  ngOnInit() {
    this.settings = this.ss.getSettings();
  }

  onSubmit(){
    this.ss.changeSettings(this.settings);
    this.fm.show('Settings saved',{cssClass: 'alert-success', timeout:4000});;
    this.router.navigate(['/settings']);
  }

}
