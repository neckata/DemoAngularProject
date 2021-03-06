import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { ComponentsComponent } from './components.component';
import { SharedModule } from '../shared.module';
import { UtilsModule } from '../utils/utils.module';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { SafePipe } from '../utils/safe.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardComponent } from './card/card.component';
import { PageComponent } from './page/page.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MapsComponent } from './maps/maps.component';
import { EmailComponent } from './email/email.component';

@NgModule({
    imports: [
        CommonModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        SharedModule,
        UtilsModule,
        MatDialogModule,
        MatTabsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        BrowserModule
    ],
    declarations: [
      ComponentsComponent,
      CardComponent,
        SafePipe,
        PageComponent,
        CalendarComponent,
        MapsComponent,
        EmailComponent
    ],
    exports: [ComponentsComponent],
    providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
})
export class ComponentsModule { }
