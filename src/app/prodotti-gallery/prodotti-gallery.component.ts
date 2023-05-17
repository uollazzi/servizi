import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../prodotti.service';
import { Prodotto } from '../models/prodotto';

@Component({
  selector: 'app-prodotti-gallery',
  templateUrl: './prodotti-gallery.component.html',
  styleUrls: ['./prodotti-gallery.component.css']
})
export class ProdottiGalleryComponent implements OnInit {

  prodotti: Prodotto[] = [];

  constructor(private prodottiService: ProdottiService) {

  }

  ngOnInit(): void {
    this.prodottiService.getProdotti().subscribe((pArray) => {
      this.prodotti = pArray;
    });
  }
}
