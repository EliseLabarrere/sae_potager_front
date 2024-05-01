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
      { path: 'list-plants/:id', component: PlantComponent },
      { path: 'add-my-plant', component: AddMyPlantComponent},
      { path: 'tips-advices', component: TipsAdvicesComponent},
      { path: 'profil', component: AccountComponent},
      { path: 'log-book', component: LogBookComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
