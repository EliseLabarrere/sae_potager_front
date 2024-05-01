import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
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
      'name': 'Carnet',
      'link': '/log-book',
      'icon': 'calendar_month',
    },
    {
      'name': 'Astuces',
      'link': '/tips-advices',
      'icon': "list",
    },
    {
      'name': 'Plantes',
      'link': '/list-plants',
      'icon': "grass",
    },
    // {
    //   'name': 'Mon profil',
    //   'link': '/profil',
    //   'icon': "account",
    // }
  ]
}
