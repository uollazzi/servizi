import { Component, Input } from '@angular/core';
import { Rating } from '../models/movies';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input()
  rating?: Rating;
}
