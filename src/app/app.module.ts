import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LatestCollectionComponent } from './home/latest-collection/latest-collection.component';
import { BrandsComponent } from './home/brands/brands.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubCategoriesComponent } from './categories/sub-categories/sub-categories.component';
import { FooterComponent } from './footer/footer.component';
import { SubCategoriesCollectionsComponent } from './sub-categories-collections/sub-categories-collections.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from './sub-categories-collections/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LatestCollectionComponent,
    BrandsComponent,
    AboutUsComponent,
    CategoriesComponent,
    SubCategoriesComponent,
    FooterComponent,
    SubCategoriesCollectionsComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
