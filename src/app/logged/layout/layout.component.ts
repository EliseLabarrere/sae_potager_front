import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  constructor(
  ){}

  navItems: {
    name: string;
    link: string;
    icon: string;
  }[] = [
    {
      'name': 'Potager',
      'link': '/home',
      'icon': "home",
    },
    {
      'name': 'Calendrier',
      'link': '/lists',
      'icon': 'calendar_month',
    },
    {
      'name': 'Astuces',
      'link': '/friends',
      'icon': "list",
    },
    {
      'name': 'Plantes',
      'link': '/profil',
      'icon': "grass",
    }
  ]
}
