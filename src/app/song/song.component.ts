import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkWithHref } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
 
  
  private _songs = [
    {
      "name": "Chila Chila",
      "artist": "Vaisagh",
      "img": "/assets/img/chilachila.jpg",
      "audio": "/assets/img/songs/chilachila.mp3"
    },
    {
      "name": "Thee Thalapathy",
      "artist": "Silambarasan T R",
      "img": "/assets/img/theethalapathy.jpg",
      "audio": "/assets/img/songs/Thee Thalapathy.mp3"
    },
    {
      "name": "Vaa Vaathi",
      "artist": "G V Prakash",
      "img": "/assets/img/vaavathi.jpg",
      "audio": "/assets/img/songs/Vaa Vaathi.mp3"
    },
    {
      "name": "Porkanda Singam",
      "artist": "Anirudh Ravichander",
      "img": "/assets/img/porkondasingam.jpg",
      "audio": "/assets/img/songs/Porkanda Singam.mp3"
    },
    {
      "name": "DaDa",
      "artist": "Jen Martin",
      "img": "/assets/img/dada.jpg",
      "audio": "/assets/img/songs/DADA Song.mp3"
    },
    {
      "name": "Ennai Vittu",
      "artist": "Yuvan Shanker Raja",
      "img": "/assets/img/ennaivitu.jpg",
      "audio": "/assets/img/songs/Ennai Vittu.mp3"
    },
    {
      "name": "Vaathi Coming",
      "artist": "Anirudh Ravichander",
      "img": "/assets/img/vaathicoming.jpg",
      "audio": "/assets/img/songs/Vaathi Coming.mp3"
    },
    {
      "name": "Ranjithame",
      "artist": "M.M.Manasi",
      "img": "/assets/img/ranjithame.jpg",
      "audio": "/assets/img/songs/Ranjithame.mp3"
    },
    {
      "name": "Baby",
      "artist": "Justin Bieber",
      "img": "/assets/img/baby.jpg",
      "audio": "/assets/img/songs/baby.mp3"
    },
    {
      "name": "Darshana",
      "artist": "Hasem Abdul Waheb",
      "img": "/assets/img/darshana.jpg",
      "audio": "/assets/img/songs/darshana.mp3"
    },
    {
      "name": "Mehabooba",
      "artist": "Ananya Bhat",
      "img": "/assets/img/mehabooba.jpg",
      "audio": "/assets/img/songs/Mehabooba.mp3"
    },
    {
      "name": "Malare",
      "artist": "Vijay Yesudas",
      "img": "/assets/img/malare.jpg",
      "audio": "/assets/img/songs/malare.mp3"
    },
    {
      "name": "Kudukku",
      "artist": "Shaan Rahman",
      "img": "/assets/img/kudukku.jpg",
      "audio": "/assets/img/songs/kudukku.mp3"
    },
    {
      "name": "Vaathil Melle",
      "artist": "Rajesh Murugesan",
      "img": "/assets/img/vaathilmelle.jpg",
      "audio": "/assets/img/songs/vaathilmelle.mp3"
    },
    {
      "name": "Dooreyo",
      "artist": "Vishak Nair",
      "img": "/assets/img/dooreyo.jpg",
      "audio": "/assets/img/songs/Dooreyo.mp3"
    },
    {
      "name": "Marakavillaye",
      "artist": "Darshan Raval",
      "img": "/assets/img/needapadadhani.jpg",
      "audio": "/assets/img/songs/marakavillaye.mp3"
    },
    {
      "name": "Samajavaragamana",
      "artist": "Sid Sriram",
      "img": "/assets/img/samajavaragamana.jpg",
      "audio": "/assets/img/songs/Samajavaragamana.mp3"
    },
    {
      "name": "Oo Antava Oo Oo Antava",
      "artist": "Indravathi Cauhan",
      "img": "/assets/img/ooantavaooooantava.jpg",
      "audio": "/assets/img/songs/Oo Antava Oo Oo Antava.mp3"
    },
    {
      "name": "Pila Padesaave",
      "artist": "Yuvan Shankar Raja",
      "img": "/assets/img/pilapadesaave.jpg",
      "audio": "/assets/img/songs/Pila Padesaave.mp3"
    },
    {
      "name": "Oh Sita Hey Rama",
      "artist": "Vishal Chandrashekhar",
      "img": "/assets/img/ohsitaheyrama.jpg",
      "audio": "/assets/img/songs/Oh Sita Hey Rama.mp3"
    },
    {
      "name": "On My Way",
      "artist": "Alan Walker",
      "img": "/assets/img/onmyway.jpg",
      "audio": "/assets/img/songs/On My Way.mp3"
    },
    {
      "name": "Thunder",
      "artist": "Imagine Dragons",
      "img": "/assets/img/thunder.jpg",
      "audio": "/assets/img/songs/Thunder.mp3"
    },
    {
      "name": "Shape Of You",
      "artist": "Ed Sheeran",
      "img": "/assets/img/shapeofyou.jpg",
      "audio": "/assets/img/songs/Shape Of You.mp3"
    },
    {
      "name": "Heat Waves",
      "artist": "Glass Animals",
      "img": "/assets/img/heatwaves.jpg",
      "audio": "/assets/img/songs/Heat Waves.mp3"
    },
    {
      "name": "Friends",
      "artist": "Anne Marie",
      "img": "/assets/img/friends.jpg",
      "audio": "/assets/img/songs/Friends.mp3"
    }
  ];
  public get songs() {
    return this._songs;
  }
  public set songs(value) {
    this._songs = value;
  }
current:any;
value:any;
constructor(private  router: Router,private route:ActivatedRoute){
  window.addEventListener('keypress',()=>{
    this.play.nativeElement.pause();
  })
}
y: number = 0;
j:number = 0;
ngOnInit(): void {
  this.value = this.route.snapshot.paramMap.get('id');
  this.y= +this.value;
  this.current = this.songs[ this.value];
  this.j = this.y+1;
}

back(){
  window.history.back();
}


start() {
  window.onbeforeunload;
 if(this.y == 0){
  location.href='/song/24';
 }
 else{
  location.href = `/song/${this.y-1}`;
 }
}
@ViewChild('audio') play: any;

sap(){
  
}


end() {
  window.onbeforeunload;
if(this.y == 24){
  location.href = `/song/0`;
}
else{
  location.href = `/song/${this.j}`;
}
}



}
