import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
<<<<<<< Updated upstream

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
=======
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon'; //Material for Icons
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { LayoutComponent } from './logged/layout/layout.component';
import { HeadingComponent } from './shared/layout/heading/heading.component';
import { AccountComponent } from './logged/account/account.component';
import { MyGardenComponent } from './logged/my-garden/my-garden.component';
import { TipsAdvicesComponent } from './logged/tips-advices/tips-advices.component';
import { LogBookComponent } from './logged/log-book/log-book.component';
import { PlantsComponent } from './logged/plants/plants.component';
import { AddMyPlantComponent } from './logged/add-my-plant/add-my-plant.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { PlantComponent } from './logged/plant/plant.component';
import { EventDetailsModalComponent } from './logged/event-details-modal/event-details-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    HeadingComponent,
    AccountComponent,
    MyGardenComponent,
    TipsAdvicesComponent,
    LogBookComponent,
    PlantsComponent,
    AddMyPlantComponent,
    NavBarComponent,
    PlantComponent,
    EventDetailsModalComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
<<<<<<< Updated upstream
    AppRoutingModule
=======
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatDialogModule
>>>>>>> Stashed changes
  ],
  providers: [
    provideClientHydration(),
    // MatDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
