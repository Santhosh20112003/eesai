import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkWithHref } from '@angular/router';
import { Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
 
  
  private _songs:any;
  public get songs() {
    return this._songs;
  }
  public set songs(value) {
    this._songs = value;
  }
current:any;
value:any;
constructor(private  router: Router,private route:ActivatedRoute,private songslist :SpotifyService){
  window.addEventListener('keypress',()=>{
    this.play.nativeElement.pause();
  })
}
y: number = 0;
j:number = 0;
ngOnInit(): void {
  
  this._songs=this.songslist.gettracks();
  this.value = this.route.snapshot.paramMap.get('id');
  this.y= +this.value;
  this.current = this.songs[ this.value];
  this.j = this._songs.length - 1;
 

}

back(){
  window.history.back();
}


start() {
  window.onbeforeunload;
 if(this.y == 0){
  location.href=`/song/${this.j}`;
 }
 else{
  location.href = `/song/${this.y-1}`;
 }
}
@ViewChild('audio') play: any;



end() {
  window.onbeforeunload;
if(this.y == this.j){
  location.href = `/song/0`;
}
else{
  location.href = `/song/${this.y+1}`;
}
}



}
