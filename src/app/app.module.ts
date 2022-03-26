import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlaylistComponent } from "./components/playlist/playlist.component";
import { SingleViewComponent } from "./components/singleview/singleview.component";
import { HomepageComponent } from "./components/homepage/homepage.component";

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    SingleViewComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "homepage", component: HomepageComponent },
      { path: "playlist", component: PlaylistComponent },
      { path: "singleview", component: SingleViewComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
