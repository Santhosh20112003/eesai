import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AllSongsComponent } from './all-songs/all-songs.component';
import { AboutComponent } from './about/about.component';
import { SongComponent } from './song/song.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AllSongsComponent,
    AboutComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
