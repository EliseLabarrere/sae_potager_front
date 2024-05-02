import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-my-garden',
  templateUrl: './my-garden.component.html',
  styleUrl: './my-garden.component.scss',
})
export class MyGardenComponent {
  allMyPlants: any;
  wateringPlants: any;
  haveToWatering: boolean = true;

  constructor(
    public apiService: ApiService,
  ) {
    this.apiService.requestApi('/api/user/plantInGarden/').then(
      (data) => {
        this.allMyPlants = data.plantsInGarden
      },
      (error) => {
        console.log(error);
      }
    );

    this.apiService.requestApi('/api/task/checkDailyTask/').then(
      (data) => {
        console.log('daily tasks', data.status)
      },
      (error) => {
        console.log(error);
      }
    );

    let today = new Date();
    this.apiService.requestApi('/api/task/one', 'POST', { day: today}).then(
      (data) => {
        this.wateringPlants = data.wateringPlants;
        this.wateringPlants.length > 0 ? this.haveToWatering = true : false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
