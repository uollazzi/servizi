import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse } from './models/movies';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private omdbBaseURL = "http://www.omdbapi.com/?apikey=1d73fa03&";

  constructor(private http: HttpClient) { }

  search(query: string): Observable<SearchResponse> {
    // http://www.omdbapi.com/?apikey=1d73fa03&s=batman&type=movie
    return this.http.get<SearchResponse>(this.omdbBaseURL + "type=movie&s=" + query);
  }
}
