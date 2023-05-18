import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottiGalleryComponent } from './prodotti-gallery/prodotti-gallery.component';
import { ArticoliListComponent } from './articoli-list/articoli-list.component';
import { ArticoloDetailComponent } from './articolo-detail/articolo-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { NotificheComponent } from './notifiche/notifiche.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdottiGalleryComponent,
    ArticoliListComponent,
    ArticoloDetailComponent,
    MoviesComponent,
    NotificheComponent,
    NavbarComponent,
    MovieDetailComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
