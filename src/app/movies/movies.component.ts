import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '../models/movies';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  searchResponse?: SearchResponse;

  searchQuery = "";

  constructor(private ms: MoviesService) {

  }

  ngOnInit(): void {

  }

  cerca() {
    this.ms.search(this.searchQuery).subscribe(sr => this.searchResponse = sr);
  }
}
