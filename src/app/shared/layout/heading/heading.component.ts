import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {
  @Input() title: any;
  @Input() activeBack: boolean = false;
  @Input() displayProfile: boolean = true;

  constructor(private location: Location) {}
  
  goBack() {
    this.location.back();
  }
}
