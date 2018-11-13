import { Component, OnInit, ElementRef } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { SharingDataService } from "src/app/services/sharing-data.service";

@Component({
  selector: "app-list-of-categories",
  templateUrl: "./list-of-categories.component.html",
  styleUrls: ["./list-of-categories.component.css"]
})
export class ListOfCategoriesComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sharingDataService: SharingDataService
  ) {}

  changingQueryParams(name) {
    const queryParams: Params = Object.assign(
      {},
      this.activatedRoute.snapshot.queryParams
    );
    // Do something with the params
    queryParams["filter"] = name;
    this.router.navigate(["."], { queryParams: queryParams });
  }

  listOfCategories = [
    {
      img_url: "assets/svg/categories/select-all.svg",
      name: "all",
      active: false
    },
    {
      img_url: "assets/svg/categories/shoes.svg",
      name: "shoes",
      active: false
    },
    {
      img_url: "assets/svg/categories/pants.svg",
      name: "pants",
      active: false
    },
    {
      img_url: "assets/svg/categories/t-shirt.svg",
      name: "t-shirt",
      active: false
    },
    {
      img_url: "assets/svg/categories/shirt.svg",
      name: "shirt",
      active: false
    },
    {
      img_url: "assets/svg/categories/jacket.svg",
      name: "jacket",
      active: false
    },
    {
      img_url: "assets/svg/categories/blazer.svg",
      name: "blazer",
      active: false
    },
    {
      img_url: "assets/svg/categories/coat.svg",
      name: "coat",
      active: false
    },
    {
      img_url: "assets/svg/categories/suit.svg",
      name: "suit",
      active: false
    }
  ];
  ngOnInit() {
    this.observeFilterQueryFunction();
  }

  // Observe the filter param word to set class active this category
  observeFilterQueryFunction() {
    this.sharingDataService.reInitProuctsFilter_asObs.subscribe(queryParam => {
      this.listOfCategories.map(obj => {
        obj.active = false;
        if (obj.name === queryParam) {
          obj.active = true;
        }

        return obj;
      });
    });
  }
}
