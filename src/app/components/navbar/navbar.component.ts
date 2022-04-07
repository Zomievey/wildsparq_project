import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: "navbar.component.html",
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(
      private http: HttpClient,
      private router: Router,
      private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  onClick(route: string): void {
    switch (route) {
      case "home":
        this.router.navigate(["homepage"]);
        break;
      case "playlists":
        this.router.navigate(["playlists"]);
        break;
      default:
        break;
    }
  }
}
