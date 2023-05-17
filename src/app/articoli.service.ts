import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of, tap } from 'rxjs';
import { Articolo } from './models/articolo';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

  constructor(private http: HttpClient) { }

  getArticoli(): Observable<Articolo[]> {
    const url = "https://jsonplaceholder.typicode.com/posts";

    return this.http.get<Articolo[]>(url) // POST https://jsonplaceholder.typicode.com/posts
    // .pipe(
    //   delay(5000),
    //   tap(articoli => console.log(articoli)),
    //   catchError((err: HttpErrorResponse) => {
    //     console.log(err.status);
    //     return of([]);
    //   })
    // );
  }
}
