import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {PlaylistsComponent} from "./components/playlists/playlists.component";
import {SingleViewComponent} from "./components/singleview/singleview.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {PlaylistComponent} from './components/playlist/playlist.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SafePipeModule} from "safe-pipe";


@NgModule({
    declarations: [
        AppComponent,
        PlaylistsComponent,
        SingleViewComponent,
        HomepageComponent,
        PlaylistComponent,
        NavbarComponent,
    ],
    imports: [
        SafePipeModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot([
            {path: "homepage", component: HomepageComponent},
            {path: "playlists", component: PlaylistsComponent},
            {path: "singleview", component: SingleViewComponent},
            {path: "playlist", component: PlaylistComponent}
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
