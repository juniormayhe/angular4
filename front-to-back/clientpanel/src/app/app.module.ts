import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

//angularfire
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

//components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//service
import { ClientService } from './services/client.service'
import { AuthService } from './services/auth.service'
import { AuthGuard } from './guards/auth.guard'
import { SettingsService } from './services/settings.service'
import { RegisterGuard } from './guards/register.guard'

//third party
import { FlashMessagesModule } from 'angular2-flash-messages';

const myRoutes : Routes=[
  {path:'', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'register', component: RegisterComponent, canActivate:[RegisterGuard]},
  {path:'login', component: LoginComponent},
  {path:'add-client', component: AddClientComponent, canActivate:[AuthGuard]},
  {path:'client/:id', component:ClientDetailsComponent, canActivate:[AuthGuard]},
  {path:'edit-client/:id', component: EditClientComponent, canActivate:[AuthGuard]},
  {path:'settings', component: SettingsComponent, canActivate:[AuthGuard]},
  {path:'**', component: PageNotFoundComponent}
];

export const firebaseConfig = {
    apiKey: "AIzaSyBefOLwpnS5RAkTrEbhkwnm8VrgI-zKpwc",
    authDomain: "clientpanel-ef8e1.firebaseapp.com",
    databaseURL: "https://clientpanel-ef8e1.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "385243411067"
};


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    RegisterComponent,
    LoginComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule

  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    AuthService,
    AuthGuard,
    SettingsService,
    RegisterGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
