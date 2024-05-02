import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { Plant } from '../../../shared/models/plant.model';

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrl: './advices.component.scss'
})
export class AdvicesComponent implements OnInit {
  plant: Plant | undefined;
  compatible: Plant[] = [];
  noCompatible: Plant[] = [];

  constructor(
    private route: ActivatedRoute,
    public apiService: ApiService
  ) {
    this.route.parent?.params.subscribe((params) => {
      if (params['id']) {
        this.initComponent(params['id']);
      }
    });
  }

  ngOnInit(): void {};

  initComponent(id: number) {
      this.apiService.requestApi('/api/plant/' + id).then(
        (data) => {
          this.plant = data;
          this.setCompatibility();
        })
  };

  setCompatibility() {
    if (this.plant) {
      for (let element of this.plant.compatibilities) {
        if (element.compatible === 1) {
          this.compatible.push(element.other_plant);
        } else {
          this.noCompatible.push(element.other_plant);
        }
      }
      console.log(this.compatible);
      console.log(this.noCompatible);
    }
  }
}
