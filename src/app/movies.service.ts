import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse } from './models/movies';
import { HttpClient } from '@angular/common/http';
import { NotificheService } from './notifiche.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private omdbBaseURL = "http://www.omdbapi.com/?apikey=1d73fa03&";

  constructor(private http: HttpClient, private notificheService: NotificheService) { }

  search(query: string, type: string = "movie"): Observable<SearchResponse> {
    // http://www.omdbapi.com/?apikey=1d73fa03&type=movie&s=batman

    this.notificheService.aggiungi(`Inviata la richiesta di ricerca al server con parametro ${query}`);

    let url = `${this.omdbBaseURL}type=${type}&s=${query}`;
    // this.notificheService.aggiungi(url);

    return this.http.get<SearchResponse>(url);
  }
}
