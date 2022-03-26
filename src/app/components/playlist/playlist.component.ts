import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"],
})
export class PlaylistComponent {
  constructor(private http: HttpClient) {}
  posts: any[] = [];

  loadPlaylist() {
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

// ngOnInit(): void {}
// togglePlaylist() {
//   alert("Playlist toggled");
// }
