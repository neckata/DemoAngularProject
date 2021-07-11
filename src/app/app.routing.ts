import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { PageComponent } from './components/page/page.component';
import { EmailComponent } from './components/email/email.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MapsComponent } from './components/maps/maps.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  { path: 'index', component: ComponentsComponent },
  { path: 'email', component: EmailComponent },
  { path: 'secondPage', component: PageComponent },
  { path: 'map', component: MapsComponent },
  { path: 'calendar', component: CalendarComponent }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
