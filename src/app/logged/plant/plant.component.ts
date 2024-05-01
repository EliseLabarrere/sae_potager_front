import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { Plant } from '../../shared/models/plant.model';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.scss'
})
export class PlantComponent {

  plant?: Plant = undefined;

  constructor(
    public apiService: ApiService,
    public route: ActivatedRoute,
    public router : Router,
    private location: Location,
  ) {
    this.route.params.subscribe((params) => {
      this.apiService.requestApi('/api/plant/' + params['id']).then(
        (data) => {
          this.plant = data;
          console.log(this.plant);
          if (!this.plant) {
            this.router.navigate(['list-plants']);
          }
        },
        (error) => {
          console.log(error);
          this.router.navigate(['list-plants']);
        },
      );
    });
  }

  goBack() {
    this.location.back();
  }
}
