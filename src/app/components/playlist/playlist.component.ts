import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"],
})
export class PlaylistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void { }
  togglePlaylist() {
    alert("Playlist toggled");
    
  }

}
