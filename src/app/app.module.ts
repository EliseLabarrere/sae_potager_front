import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon'; //Material for Icons
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

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
import { SelectGardenComponent } from './logged/select-garden/select-garden.component';
import { GardenStep1Component } from './logged/select-garden/garden-step1/garden-step1.component';
import { GardenStep2Component } from './logged/select-garden/garden-step2/garden-step2.component';
import { AdvicesComponent } from './logged/plant/advices/advices.component';
import { TimetableComponent } from './logged/plant/timetable/timetable.component';
import { PlantThumbnailComponent } from './shared/plant-thumbnail/plant-thumbnail.component';

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
    GardenStep1Component,
    GardenStep2Component,
    SelectGardenComponent,
    AdvicesComponent,
    TimetableComponent,
    PlantThumbnailComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
