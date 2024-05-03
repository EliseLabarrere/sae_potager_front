import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tip } from '../../shared/models/tip.model';


@Component({
  selector: 'app-tips-advices',
  templateUrl: './tips-advices.component.html',
  styleUrl: './tips-advices.component.scss'
})
export class TipsAdvicesComponent {
  tips: Tip[] = [];

  constructor(
    public apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.apiService.requestApi('/api/tips/').then(
      (data) => {
        this.tips = data;
      },
      (error) => {
        console.log(error);
      },
    );
   }
}
