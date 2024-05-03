import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { Plant } from '../../shared/models/plant.model';
import { User } from '../../shared/models/user.model';
import { error } from 'console';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.scss'
})
export class PlantComponent implements OnInit{
  @ViewChild('dialogAddPlant') dialogAddPlant: any;
  user: User|undefined;
  plant?: Plant = undefined;
  numberOfPlant: number = 0;

  watering: string = "";
  compatibility: boolean | undefined;

  quantity: number = 1;

  constructor(
    public apiService: ApiService,
    public route: ActivatedRoute,
    public router : Router,
    private location: Location,
  ) {
    this.user = this.apiService.user;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.apiService.requestApi('/api/plant/' + params['id']).then(
        (data) => {
          this.plant = data;
          console.log(data);
          if (!this.plant) {
            this.router.navigate(['list-plants']);
          }else{
            this.compatibility = this.isCompatible();
            this.setWateringTime();
          }
          this.setNumberOfPlant(data.id)
        },
        (error) => {
          console.log(error);
          this.router.navigate(['list-plants']);
        },
      );
    });
  }

  isCompatible(): boolean | undefined {

    if (this.user && this.plant) {
        for (const element of this.plant.categ_garden) {
            if (element.id === this.user.categ_garden.id) {
                return true;
            }
        }
        return false;
    }
    return undefined;
  }

  setWateringTime() {
    if (this.plant && this.plant.watering_rythm) {
      const wateringMap: { [key: number]: string } = {
        1: "1 fois par jour",
        2: "1 fois tous les deux jours",
        3: "1 fois tous les trois jours",
        4: "1 fois tous les quatre jours",
        5: "1 fois tous les cinq jours",
        6: "1 fois tous les six jours",
        7: "1 fois par semaine",
        14: "1 fois toutes les deux semaines",
        21: "1 fois tous les trois semaines",
        30: "1 fois par mois",
    };

    this.watering = wateringMap[this.plant.watering_rythm] || "";
    }

}

setNumberOfPlant(id:number){
  console.log('id de la plant', id)
  this.apiService.requestApi('/api/user/numberPlants/' + this.plant?.id).then(
    (data) => {
      this.numberOfPlant = data.number_of_plants;
      console.log(data)
    },
    (error) => {
      console.log(error);
      this.router.navigate(['list-plants']);
    },
  );
}


  goBack() {
    this.location.back();
  }

  openModalAddPlant() {
    this.dialogAddPlant.nativeElement.showModal();
  }

  validAddPlant(){
    let req={
      plant_id: this.plant?.id,
      number_to_add: this.quantity,
    }
    this.apiService.requestApi('/api/user/addInGarden/', 'POST', req).then(
      (data) => {
        console.log('success plant added', data);
        this.numberOfPlant += req.number_to_add;
      },
      (error) => {
        console.log(error);
      },
    );
    console.log('plant added');
    this.dialogAddPlant.nativeElement.close();
  }

}
