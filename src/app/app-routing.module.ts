import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { ArticoliListComponent } from './articoli-list/articoli-list.component';
import { ProdottiGalleryComponent } from './prodotti-gallery/prodotti-gallery.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: "movies",
    component: MoviesComponent
  },
  {
    path: "movies/:id",
    component: MovieDetailComponent
  },
  {
    path: "articoli",
    component: ArticoliListComponent
  },
  {
    path: "prodotti",
    component: ProdottiGalleryComponent
  },
  {
    path: "",
    redirectTo: "/movies",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
