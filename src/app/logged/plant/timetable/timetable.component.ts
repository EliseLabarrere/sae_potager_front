import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { Plant } from '../../../shared/models/plant.model';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.scss'
})
export class TimetableComponent implements OnInit {
  plant: Plant  | undefined;
  months: string[] = [
    'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'
  ];
  growing: string = "";

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
          this.setGrowingTime();
        })
  };

  setGrowingTime() {
    if (this.plant?.growing_time && this.plant?.growing_time >= 30){
      this.growing = Math.floor(this.plant.growing_time / 30) + ' mois';
    }else{
      this.growing = this.plant?.growing_time + ' jours';
    }
  }
}
