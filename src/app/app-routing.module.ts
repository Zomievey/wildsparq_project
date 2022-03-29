import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { SingleViewComponent } from './components/singleview/singleview.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SafePipeModule } from 'safe-pipe';

const routes: Routes = [
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'playlist/:id', component: PlaylistComponent },
  { path: 'video/:id', component: SingleViewComponent },
  { path: 'homepage', component: HomepageComponent },


 

  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [SafePipeModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
