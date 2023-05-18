import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movies';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie?: Movie;
  error: any;

  constructor(
    private ms: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");

    if (id != null) {
      this.ms.getMovieById(id)
        .pipe(
          catchError(err => {
            this.error = err;
            return of(undefined);
          })
        )
        .subscribe(movie => {
          this.movie = movie;
        });
    }

  }
}
