import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {YoutubeService} from "../../services/youtube.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
    selector: "app-single-view",
    templateUrl: "./singleview.component.html",
    styleUrls: ["./singleview.component.scss"],
})
export class SingleViewComponent implements OnInit {
    @Input() videoId: string = "";
    @Output() nextVideo: EventEmitter<any> = new EventEmitter<any>();
    @Output() previousVideo: EventEmitter<any> = new EventEmitter<any>();
    safeVideoUrl: SafeResourceUrl = "";
    video: any = null;
    showMore: boolean = false;

    constructor(
        private youtubeService: YoutubeService,
        private domSanitizer: DomSanitizer
    ) {
    }

    posts: any[] = [];

    ngOnInit(): void {
        this.youtubeService
            .getVideo(this.videoId)
            .subscribe((video: any) => {
                console.log(video);
                this.video = video.items[0];
                this.safeVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.getVideoUrl());
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

    getVideoUrl(): string {
        return `https://www.youtube.com/embed/${this.video?.id}`;
    }

    toggleDescription() {
        this.showMore = !this.showMore;
        if (this.showMore) {
            this.seeMore();
        } else {
            this.seeLess()
        }
    }
}
