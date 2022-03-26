import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-single-view",
  templateUrl: "./singleview.component.html",
  styleUrls: ["./singleview.component.scss"],
})
export class SingleViewComponent {
  constructor(private http: HttpClient) {}
  posts: any[] = [];

  loadSingle() {
    const el : any = document.getElementById("show_button");
    el.style.display = "none";

    this.http
      .get(
        "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&maxResults=10&key=AIzaSyBvfOzusG95vCd7XWMYLTe4Uxd7T_EdEFM&id=PLEx5khR4g7PJELLTYwXZHcimWAwTUaWGA,PLEx5khR4g7PJquVHXtkcdo-QzK54bfmY9,PLEx5khR4g7PIEfXSB9bDS4lB-J9stOynD,PLEx5khR4g7PLCoWS5k9u2WQ8RdKqhKEKn,PLEx5khR4g7PLIOpqqfKfd6OAbzXSa_vBZ"
      )
      .subscribe((video: any) => {
        this.posts = video.items;
        console.log(this.posts);
      });
  }
}
