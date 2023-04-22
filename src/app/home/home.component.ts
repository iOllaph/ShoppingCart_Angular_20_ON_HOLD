import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  subcategories = "none";

  lightingExpanded = false;
  lightingNormal = true;
  navLighting = "east"

  diningSetsExpanded = false;
  diningSetsNormal = true;
  navDiningSets = "east"

  chairsExpanded = false;
  chairsNormal = true;
  navChairs = "east"


  storageExpanded = false;
  storageNormal = true;
  navStorage = "east"

  wallArtsExpanded = false;
  wallArtsNormal = true;
  navWallArts = "east"


  constructor() { };

  ngOnInit(): void { };


  toggleCategoriesRow(index: number) {

    if (index == 0) {

      this.lightingExpanded = !this.lightingExpanded;
      this.lightingNormal = !this.lightingNormal;

      if (this.lightingExpanded == true) {

        return this.navLighting = "south"

      } else {

        return this.navLighting = "east"

      }


    } else if (index == 1) {

      this.diningSetsExpanded = !this.diningSetsExpanded;
      this.diningSetsNormal = !this.diningSetsNormal;

      if (this.diningSetsExpanded == true) {

        return this.navDiningSets = "south"

      } else {

        return this.navDiningSets = "east"

      }



    } else if (index == 2) {

      this.chairsExpanded = !this.chairsExpanded;
      this.chairsNormal = !this.chairsNormal;


      if (this.chairsExpanded == true) {

        return this.navChairs = "south"

      } else {

        return this.navChairs = "east"

      }



    } else if (index == 3) {

      this.storageExpanded = !this.storageExpanded;
      this.storageNormal = !this.storageNormal;


      if (this.storageExpanded == true) {

        return this.navStorage = "south"

      } else {

        return this.navStorage = "east"

      }

    } else if (index == 4) {

      this.wallArtsExpanded = !this.wallArtsExpanded;
      this.wallArtsNormal = !this.wallArtsNormal;


      if (this.storageExpanded == true) {

        return this.navWallArts = "south"

      } else {

        return this.navWallArts = "east"

      }

    }
  }

  checkRowStatus(index: number) {








  }


}
