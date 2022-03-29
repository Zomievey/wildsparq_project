import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"],
})
export class PlaylistComponent implements OnInit {
  playlistId: string | null = "";
  playListItems: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.playlistId = this.route.snapshot.paramMap.get("id");
      
      this.http
        .get(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?playlistId=${this.playlistId}&maxResults=10&key=AIzaSyBvfOzusG95vCd7XWMYLTe4Uxd7T_EdEFM&part=snippet,contentDetails`
        )
        .subscribe((apiPlaylists: any) => {
          console.log(apiPlaylists);
          this.playListItems = apiPlaylists.items;
        });
    });
  }
  openVideo(videoId: string) {
    this.router.navigate(["video", videoId]);
  }

  onClick() {}
}
