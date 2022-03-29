import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-view",
  templateUrl: "./singleview.component.html",
  styleUrls: ["./singleview.component.scss"],
})
export class SingleViewComponent implements OnInit {
  videoId: string | null = "";
  video: any = null;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  posts: any[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.videoId = this.route.snapshot.paramMap.get("id");

      this.http
        .get(
          `https://youtube.googleapis.com/youtube/v3/videos?id=${this.videoId}&key=AIzaSyBvfOzusG95vCd7XWMYLTe4Uxd7T_EdEFM&part=snippet,contentDetails`
        )
        .subscribe((video: any) => {
          console.log(video);
          this.video = video.items[0];
        });
    });
  }
  seeMore() {
    const el: any = document.getElementById("description");
    el.style.height = "275px";
  }
  seeLess() {
    const el: any = document.getElementById("description");
    el.style.height = "75px";
    el;
  }
}
