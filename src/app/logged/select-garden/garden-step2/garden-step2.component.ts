import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-garden-step2',
  templateUrl: './garden-step2.component.html',
  styleUrl: './garden-step2.component.scss'
})
export class GardenStep2Component {

  constructor(
    public route: ActivatedRoute,
    public router : Router,
    public apiService: ApiService,
    private location: Location
  ) {}

  sunlightTypes: {
    name: string;
    slug: string;
  }[] = [
    {
      'name': 'Ensoleillé',
      'slug': 'sun',
    },
    {
      'name': 'Partiellement ombragé',
      'slug': 'semishadow',
    },
    {
      'name': "Ombragé",
      'slug': 'shadow',
    }
  ];

  goBack() {
    this.location.back();
  }

  selectGarden(slug: string) {
    let garden = "";
    this.route.params.subscribe((params) => {
      garden = params['slug'] + "_" + slug;
      console.log(garden);
      if (garden && garden !== "") {
        let req = {
          categ_garden: garden,
        };
        this.apiService.requestApi('/api/auth/updateGarden', 'POST', req)
          .then(() => {
            this.apiService.getUser();
            this.router.navigate(['/home']);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
    });
  }
  
  
}
