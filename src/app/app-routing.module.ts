import { ComponentFixture } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubCategoriesCollectionsComponent } from './sub-categories-collections/sub-categories-collections.component';
import { ProductPageComponent } from './sub-categories-collections/product-page/product-page.component';


const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "sub-categorie-collections", component: SubCategoriesCollectionsComponent },
  { path: "product-page", component: ProductPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
