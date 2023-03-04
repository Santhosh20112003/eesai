import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AllSongsComponent } from './all-songs/all-songs.component';
import { AboutComponent } from './about/about.component';
import { SongComponent } from './song/song.component';
import { SpotifyService } from './spotify.service';
import {HttpClientModule} from '@angular/common/http';



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
    HttpClientModule

  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
