import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';
import { DesktopNavComponent } from './components/desktop-nav/desktop-nav.component';
import { AboutComponent } from './components/about/about.component';
import { InfoComponent } from './components/info/info.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
<<<<<<< HEAD
  { path: 'about', component: AboutComponent },
  { path: 'info', component: InfoComponent },
  { path: 'proyect', component: ProyectComponent },
=======
  { path: 'users', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'proyect', component: ProyectComponent },
  { path: 'info', component: InfoComponent },
>>>>>>> 6417ac3364a17d323abcdd5535751f5677894d89
  { path: 'account', component: AccountComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    MobileNavComponent,
    DesktopNavComponent,
    AboutComponent,
    InfoComponent,
    ProyectComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
