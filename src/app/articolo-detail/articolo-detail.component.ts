import { Component, Input } from '@angular/core';
import { Articolo } from '../models/articolo';

@Component({
  selector: 'app-articolo-detail',
  templateUrl: './articolo-detail.component.html',
  styleUrls: ['./articolo-detail.component.css']
})
export class ArticoloDetailComponent {

  @Input()
  articolo?: Articolo;

}
