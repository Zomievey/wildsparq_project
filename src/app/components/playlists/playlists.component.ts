import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlists.component.html",
  styleUrls: ["./playlists.component.scss"],
})
export class PlaylistsComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private http: HttpClient
  ) {}
  playlists: any[] = [];

  loadPlaylist() {
    const el: any = document.getElementById("show_button");
    el.style.display = "none";
    this.http
      .get(
        "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&maxResults=10&key=AIzaSyBvfOzusG95vCd7XWMYLTe4Uxd7T_EdEFM&id=PLEx5khR4g7PJELLTYwXZHcimWAwTUaWGA,PLEx5khR4g7PJquVHXtkcdo-QzK54bfmY9,PLEx5khR4g7PIEfXSB9bDS4lB-J9stOynD,PLEx5khR4g7PLCoWS5k9u2WQ8RdKqhKEKn,PLEx5khR4g7PLIOpqqfKfd6OAbzXSa_vBZ"
      )
      .subscribe((apiPlaylists: any) => {
        this.playlists = apiPlaylists.items;
        console.log(this.playlists);
      });
  }

  openPlaylist(playlistId: any) {
    this.router.navigate(["playlist", playlistId]);
  }
}

// ngOnInit(): void {}
// togglePlaylist() {
//   alert("Playlist toggled");
// }
