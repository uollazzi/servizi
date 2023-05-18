import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '../models/movies';
import { MoviesService } from '../movies.service';
import { NotificheService } from '../notifiche.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  searchResponse?: SearchResponse;

  searchQuery = "";

  constructor(
    private ms: MoviesService,
    private notificheService: NotificheService) {
  }

  ngOnInit(): void {

  }

  cerca() {
    this.notificheService.aggiungi(`Ricerca eseguita con parametro: ${this.searchQuery}`);

    this.ms.search(this.searchQuery).subscribe(sr => {

      this.notificheService
        .aggiungi(`La ricerca eseguita con parametro ${this.searchQuery} ha restituito ${sr.totalResults} risultati.`);

      this.searchResponse = sr;
    });
  }
}
