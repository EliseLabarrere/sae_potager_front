import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { authGuard } from './shared/guards/auth.guard';
import { LayoutComponent } from './logged/layout/layout.component';
import { MyGardenComponent } from './logged/my-garden/my-garden.component';
import { PlantsComponent } from './logged/plants/plants.component';
import { TipsAdvicesComponent } from './logged/tips-advices/tips-advices.component';
import { AccountComponent } from './logged/account/account.component';
import { LogBookComponent } from './logged/log-book/log-book.component';
import { AddMyPlantComponent } from './logged/add-my-plant/add-my-plant.component';
import { PlantComponent } from './logged/plant/plant.component';
import { SelectGardenComponent } from './logged/select-garden/select-garden.component';
import { GardenStep1Component } from './logged/select-garden/garden-step1/garden-step1.component';
import { GardenStep2Component } from './logged/select-garden/garden-step2/garden-step2.component';
import { AdvicesComponent } from './logged/plant/advices/advices.component';
import { TimetableComponent } from './logged/plant/timetable/timetable.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [authGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [authGuard] },

  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: MyGardenComponent, pathMatch: 'full' },
      { path: 'home', component: MyGardenComponent },
      { path: 'list-plants', component: PlantsComponent},
      { path: 'list-plants/:id',
         component: PlantComponent,
         children: [
          { path: '', pathMatch: 'full', redirectTo: 'timetable' },
          { path: 'timetable', component: TimetableComponent,data: { id: '${id}' }},
          { path: 'advices', component: AdvicesComponent,data: { id: '${id}' }},
        ],
       },
      { path: 'add-my-plant', component: AddMyPlantComponent},
      { path: 'tips-advices', component: TipsAdvicesComponent},
      { path: 'profil', component: AccountComponent},
      { path: 'log-book', component: LogBookComponent},
      { path: 'select-garden', 
        component: SelectGardenComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'step1' },
          { path: 'step1', component: GardenStep1Component},
          { path: 'step2/:slug', component: GardenStep2Component},
        ]},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
