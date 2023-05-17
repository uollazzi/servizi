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

  constructor(private ms: MoviesService) {

  }

  ngOnInit(): void {
    this.ms.search("batman").subscribe(sr => this.searchResponse = sr);
  }
}
