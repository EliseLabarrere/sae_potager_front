import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-garden-step1',
  templateUrl: './garden-step1.component.html',
  styleUrl: './garden-step1.component.scss'
})
export class GardenStep1Component {

  constructor(private router: Router) { }

  gardenTypes: {
    name: string;
    slug: string;
  }[] = [
    {
      'name': 'En intérieur',
      'slug': 'interior',
    },
    {
      'name': 'Rebord de fenêtre',
      'slug': 'window',
    },
    {
      'name': 'Balcon',
      'slug': 'balcony',
    },
    {
      'name': 'Jardin',
      'slug': 'jardin',
    },
    {
      'name': 'Sous serre',
      'slug': 'greenhouse',
    },
  ];

}
