import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {YoutubeService} from "../../services/youtube.service";

@Component({
    selector: "app-playlist",
    templateUrl: "./playlist.component.html",
    styleUrls: ["./playlist.component.scss"],
})
export class PlaylistComponent implements OnInit {
    playlistId: string | null = "";
    playListItems: any[] = [];
    activeVideoIndex: number | null = null;

    constructor(
        private youtubeService: YoutubeService, //Inject our youtube service so we can fetch the playlist
        private router: Router, //Inject our router so that we can navigate to a different page
        private route: ActivatedRoute, //Inject our route so that we can get our playlist id query param
        private changeDetectorRef: ChangeDetectorRef
    ) {
    }

    ngOnInit(): void {
        this.route
            .queryParams //from our route's query parameters get our playlist Id
            .subscribe((params) => {
                this.playlistId = this.route.snapshot.paramMap.get("id")!; //Get the playlist Id
                this.youtubeService.getPlaylist(this.playlistId) //Fetch our playlist from youtube
                    .subscribe((apiPlaylist: any) => {
                        this.playListItems = apiPlaylist.items; //Save our playlist to a class variable
                    });
            });
    }

    openVideo(videoIndex: number) {
        this.activeVideoIndex = videoIndex;
    }

    onClick() {
    }

    nextVideo() {
        this.activeVideoIndex = Math.min(this.activeVideoIndex! + 1, this.playListItems.length - 1)
        this.changeDetectorRef.detectChanges()
    }

    previousVideo() {
        this.activeVideoIndex = Math.max(this.activeVideoIndex! - 1, 0)
    }

    getActiveVideoId() {
        return this.playListItems[this.activeVideoIndex!]?.contentDetails.videoId;
    }
}
