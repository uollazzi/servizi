import { Injectable } from '@angular/core';
import { Prodotto } from './models/prodotto';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {
  private apiBaseURL = "http://localhost:3000/prodotti/";

  constructor(private http: HttpClient) {

  }

  getProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(this.apiBaseURL);
  }

  // CRUD (create, update, read, delete)
  create(prodotto: Prodotto) {
    return this.http.post(this.apiBaseURL, prodotto);
  }

  delete(id: number) {
    return this.http.delete(this.apiBaseURL + id);
  }
}
