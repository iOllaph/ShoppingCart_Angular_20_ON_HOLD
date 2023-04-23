import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sub-categories-collections',
  templateUrl: './sub-categories-collections.component.html',
  styleUrls: ['./sub-categories-collections.component.scss']
})
export class SubCategoriesCollectionsComponent implements OnInit {

  selectedValue = '1';

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goToProductPage(): void {
    this.router.navigate(["../product-page"]);
  }



}
