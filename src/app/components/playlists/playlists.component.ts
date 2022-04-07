import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {YoutubeService} from "../../services/youtube.service";

@Component({
    selector: "app-playlist",
    templateUrl: "./playlists.component.html",
    styleUrls: ["./playlists.component.scss"],
})
export class PlaylistsComponent {
    constructor(
        private router: Router, //Inject our router so that we can navigate to a different page
        private youtubeService: YoutubeService //inject our youtube service in order to fetch playlists
    ) {
    }

    playlists: any[] = [];

    loadPlaylist() {
        const el: any = document.getElementById("show_button");
        el.style.display = "none";
        this.youtubeService //Fetch our playlists
            .getPlaylists()
            .subscribe((apiPlaylists: any) => {
                this.playlists = apiPlaylists.items; //Save fetched playlists to class variable
            });
    }

    openPlaylist(playlistId: any) {
        this.router.navigate(["playlist", playlistId]);
    }
}
