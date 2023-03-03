import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllSongsComponent } from './all-songs/all-songs.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [
  {path:'home',component:MainComponent },
  {path:'allsongs',component:AllSongsComponent},
  {path:'about',component:AboutComponent},
  {path:'song/:id',component:SongComponent},

  {path: '', redirectTo:'/home', pathMatch: 'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
