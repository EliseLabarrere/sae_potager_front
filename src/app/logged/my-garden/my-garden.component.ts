import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-garden',
  templateUrl: './my-garden.component.html',
  styleUrl: './my-garden.component.scss',
})
export class MyGardenComponent {
  @ViewChild('dialogRemoveFromGarden') dialogRemoveFromGarden: any;
  wateringPlants: any;
  haveToWatering: boolean = true;
  plantsThisMonth: any;
  plantsNextMonths: any;
  allMyPlants: any;
  harvestedPlant: any = null;

  constructor(public apiService: ApiService) {
    this.apiService.requestApi('/api/task/checkDailyTask').then(
      (data) => {
        this.haveToWatering = !data.status;
      },
      (error) => {
        console.log(error);
      }
    );

    let today = new Date();
    this.apiService.requestApi('/api/task/one', 'POST', { day: today }).then(
      (data) => {
        this.wateringPlants = data.wateringPlants;
      },
      (error) => {
        console.log(error);
      }
    );

    this.apiService.requestApi('/api/user/nextHarvests/').then(
      (data) => {
        this.plantsThisMonth = data.plantsThisMonth;
        this.plantsNextMonths = data.plantsNextMonths;
      },
      (error) => {
        console.log(error);
      }
    );

    this.apiService.requestApi('/api/user/plantInGarden/').then(
      (data) => {
        this.allMyPlants = data.plantsInGarden;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  doDailyTasks() {
    this.apiService.requestApi('/api/task/valid').then(
      (data) => {
        this.haveToWatering = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  harvestModel(plant: any) {
    this.harvestedPlant = plant;
    this.dialogRemoveFromGarden.nativeElement.showModal();
  }

  harvestSave(id: any, remove: boolean) {
    this.apiService
      .requestApi('/api/task/harvest', 'POST', {
        idPlant: id,
        removeFromGarden: remove,
      })
      .then(
        (data) => {
          console.log(data)
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
