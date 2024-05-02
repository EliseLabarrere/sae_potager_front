import { Component } from '@angular/core';
import { Tip } from '../../shared/models/tip.model';
import { ApiService } from '../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrl: './tip.component.scss'
})
export class TipComponent {
  tip?: Tip = undefined;

  watering: string = "";
  compatibility: boolean | undefined;

  constructor(
    public apiService: ApiService,
    public route: ActivatedRoute,
    public router : Router,
    private location: Location,
  ) {
    this.route.params.subscribe((params) => {
      this.apiService.requestApi('/api/tips/' + params['id']).then(
        (data) => {
          this.tip = data;
          console.log(this.tip);
          if (!this.tip) {
            this.router.navigate(['tips-advice']);
          }
        },
        (error) => {
          console.log(error);
          this.router.navigate(['tips-advice']);
        },
      );
    });
  }

  goBack() {
    this.location.back();
  }

}
