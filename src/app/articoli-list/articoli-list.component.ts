import { Component, OnInit } from '@angular/core';
import { ArticoliService } from '../articoli.service';
import { Articolo } from '../models/articolo';

@Component({
  selector: 'app-articoli-list',
  templateUrl: './articoli-list.component.html',
  styleUrls: ['./articoli-list.component.css']
})
export class ArticoliListComponent implements OnInit {
  articoli: Articolo[] = [];

  constructor(private as: ArticoliService) {

  }

  ngOnInit(): void {
    this.as.getArticoli().subscribe(articoliArray => this.articoli = articoliArray);
  }
}
