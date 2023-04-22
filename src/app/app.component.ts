import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subcategories = "none";
  navbarStatus = "grid";

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        if (url === '/sub-categorie-collections') {
          this.subcategories = "block";
          this.navbarStatus = "none";
        } else {
          this.subcategories = "none";
          this.navbarStatus = "grid";
        }
      }
    });
  }

}
