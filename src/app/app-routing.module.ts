import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { SingleViewComponent } from './components/singleview/singleview.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PlaylistComponent } from './components/playlist/playlist.component';

const routes: Routes = [
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'playlist/:id', component: PlaylistComponent },
  { path: 'singleview', component: SingleViewComponent },
  { path: 'homepage', component: HomepageComponent },
 

  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
