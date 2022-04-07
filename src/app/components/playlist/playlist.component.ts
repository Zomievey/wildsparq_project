import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import { YoutubeService } from "../../services/youtube.service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";



@Component({
    selector: "app-playlist",
    templateUrl: "./playlist.component.html",
    styleUrls: ["./playlist.component.scss"],
})
export class PlaylistComponent implements OnInit {
    playlistId: string | null = "";
    playListItems: any[] = [];
    activeVideoIndex: number | null = null;
    safeVideoUrl: SafeResourceUrl = "";
    video: any = "";
    showMore: boolean = false;


    constructor(
        private youtubeService: YoutubeService, //Inject the youtube service so we can fetch the playlist
        private router: Router, //Inject the router so that we can navigate to a different page
        private route: ActivatedRoute, //Inject the route so that we can get our playlist id query param
        private changeDetectorRef: ChangeDetectorRef,
        private domSanitizer: DomSanitizer
    ) {
    }

    ngOnInit(): void {
        this.route
            .queryParams //from the route's query parameters get our playlist Id
            .subscribe((params) => {
                this.playlistId = this.route.snapshot.paramMap.get("id")!; //Get the playlist Id
                this.youtubeService.getPlaylist(this.playlistId) //Fetch the playlist from youtube
                    .subscribe((apiPlaylist: any) => {
                        this.playListItems = apiPlaylist.items; //Save the playlist to a class variable
                        this.safeVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.getActiveVideoId()); //Get the first video in the playlist
                    });
            });
    }

    openVideo(videoIndex: number) {
        this.activeVideoIndex = videoIndex;
    }

    onClick() {
        return `https://www.youtube.com/embed/${this.video?.id}`;
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
