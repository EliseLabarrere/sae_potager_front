import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { ViewChild } from '@angular/core';
import { Plant } from '../../shared/models/plant.model';
import { PlantUser } from '../../shared/models/plant_user.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-my-garden',
  templateUrl: './my-garden.component.html',
  styleUrl: './my-garden.component.scss',
})
export class MyGardenComponent {
  @ViewChild('dialogRemoveFromGarden') dialogRemoveFromGarden: any;
  wateringPlants: Plant[] = [];
  haveToWatering: boolean = true;
  plantsThisMonth: Plant[] = [];
  plantsNextMonths: Plant[] = [];
  thereIsPlantsThisMonth: boolean = false;
  thereIsPlantsNextMonths: boolean = false;
  allMyPlants: PlantUser[] = [];
  harvestedPlant: any = null;

  showAllPlantsHarvest: boolean = false;
  showAllPlants: boolean = false;



  constructor(
    public apiService: ApiService,
  ) {
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
        this.plantsThisMonth.length > 0 ? this.thereIsPlantsThisMonth = true : this.thereIsPlantsThisMonth = false;
        this.plantsNextMonths.length > 0 ? this.thereIsPlantsNextMonths = true : this.thereIsPlantsThisMonth = false;
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
    setTimeout(() => {
        this.dialogRemoveFromGarden.nativeElement.showModal();
    });
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
          this.dialogRemoveFromGarden.nativeElement.close();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  // Load More plants Harvest
  loadMorePlantsHarvest() {
    this.showAllPlantsHarvest = true;
  }
  showLessPlantsHarvest() {
    this.showAllPlantsHarvest = false;
  }

    // Load More plants
    loadMorePlants() {
      this.showAllPlants = true;
    }
    showLessPlants() {
      this.showAllPlants = false;
    }

}
