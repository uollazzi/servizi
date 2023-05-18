import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Movie, SearchResponse } from './models/movies';
import { HttpClient } from '@angular/common/http';
import { NotificheService } from './notifiche.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private omdbBaseURL = "http://www.omdbapi.com/?apikey=1d73fa03&";
  // private omdbBaseURL = "http://www.omdbapi.com/?apikey=1d&";

  constructor(private http: HttpClient, private notificheService: NotificheService) { }

  search(query: string, tipologia: string = "movie"): Observable<SearchResponse> {
    // http://www.omdbapi.com/?apikey=1d73fa03&type=movie&s=batman

    this.notificheService.aggiungi(`Inviata la richiesta di ricerca al server con parametro ${query}`);

    let url = `${this.omdbBaseURL}type=${tipologia}&s=${query}`;
    // this.notificheService.aggiungi(url);
    // console.log(url);

    return this.http.get<SearchResponse>(url);
  }

  getMovieById(id: string) {
    // http://www.omdbapi.com/?apikey=1d73fa03&i=tt0372784
    let url = `${this.omdbBaseURL}i=${id}`;

    this.notificheService.aggiungi(`Inviata la richiesta di recupero film singolo con parametro ${id}`);

    return this.http.get<Movie>(url);
  }
}
