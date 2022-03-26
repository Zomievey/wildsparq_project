import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SingleViewComponent } from './components/singleview/singleview.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: 'playlist', component: PlaylistComponent },
  { path: 'singleview', component: SingleViewComponent },
  { path: 'homepage', component: HomepageComponent },

  { path: '', redirectTo: 'app-root', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
