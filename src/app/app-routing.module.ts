import { ComponentFixture } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubCategoriesCollectionsComponent } from './sub-categories-collections/sub-categories-collections.component';


const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "sub-categorie-collections", component: SubCategoriesCollectionsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
