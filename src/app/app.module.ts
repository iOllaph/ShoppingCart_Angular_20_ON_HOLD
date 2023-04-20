import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LatestCollectionComponent } from './home/latest-collection/latest-collection.component';
import { BrandsComponent } from './home/brands/brands.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LatestCollectionComponent,
    BrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
