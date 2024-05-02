import { Component, input } from '@angular/core';
import { Plant } from '../../models/plant.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-plant-thumbnail',
  templateUrl: './plant-thumbnail.component.html',
  styleUrl: './plant-thumbnail.component.scss'
})
export class PlantThumbnailComponent {
  @Input() plant: Plant | undefined;
}
