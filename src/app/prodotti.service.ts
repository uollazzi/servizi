import { Injectable } from '@angular/core';
import { Prodotto } from './models/prodotto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  private prodotti: Prodotto[] = [
    {
      id: 1,
      nome: "Bicicletta",
      descrizione: "Cambio Shimano 18 velocità",
      prezzo: 200,
      inStock: true
    },
    {
      id: 2,
      nome: "Lavastoviglie",
      descrizione: "Silenziosissima",
      prezzo: 400,
      inStock: true
    },
    {
      id: 3,
      nome: "LEGO La Morte Nera",
      descrizione: "8000 pezzi piccoli",
      prezzo: 300,
      inStock: false
    }
  ]

  constructor() {

  }

  getProdotti(): Observable<Prodotto[]> {
    const prodotti = of(this.prodotti);
    return prodotti;
  }
}
