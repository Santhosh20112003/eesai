import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  public _songs = [
    {  
      id:1,
      name: "Chila Chila",
      artist: "Vaisagh",
      img: "/assets/img/chilachila.jpg",
      audio: "/assets/img/songs/chilachila.mp3",
      link:"/song/0"
    },
    { 
      id:2,
      name: "Thee Thalapathy",
      artist: "Silambarasan T R",
      img: "/assets/img/theethalapathy.jpg",
      audio: "/assets/img/songs/Thee Thalapathy.mp3",
      link:"/song/1"
    },
    { 
      id:3,
      name: "Vaa Vaathi",
      artist: "G V Prakash",
      img: "/assets/img/vaavathi.jpg",
      audio: "/assets/img/songs/Vaa Vaathi.mp3",
      link:"/song/2"
    },
    { 
      id:4,
      name: "Porkanda Singam",
      artist: "Anirudh Ravichander",
      img: "/assets/img/porkondasingam.jpg",
      audio: "/assets/img/songs/Porkanda Singam.mp3",
      link:"/song/3"
    },
    { 
      id:5,
      name: "DaDa",
      artist: "Jen Martin",
      img: "/assets/img/dada.jpg",
      audio: "/assets/img/songs/DADA Song.mp3",
      link:"/song/4"
    },
    { 
      id:6,
      name: "Ennai Vittu",
      artist: "Yuvan Shanker Raja",
      img: "/assets/img/ennaivitu.jpg",
      audio: "/assets/img/songs/Ennai Vittu.mp3",
      link:"/song/5"
    },
    { 
      id:7,
      name: "Vaathi Coming",
      artist: "Anirudh Ravichander",
      img: "/assets/img/vaathicoming.jpg",
      audio: "/assets/img/songs/Vaathi Coming.mp3",
      link:"/song/6"
    },
    { 
      id:8,
      name: "Ranjithame",
      artist: "M.M.Manasi",
      img: "/assets/img/ranjithame.jpg",
      audio: "/assets/img/songs/Ranjithame.mp3",
      link:"/song/7"
    },
    { 
      id:9,
      name: "Baby",
      artist: "Justin Bieber",
      img: "/assets/img/baby.jpg",
      audio: "/assets/img/songs/baby.mp3",
      link:"/song/8"
    },
    { 
      id:10,
      name: "Darshana",
      artist: "Hasem Abdul Waheb",
      img: "/assets/img/darshana.jpg",
      audio: "/assets/img/songs/darshana.mp3",
      link:"/song/9"
    },
    { 
      id:11,
      name: "Mehabooba",
      artist: "Ananya Bhat",
      img: "/assets/img/mehabooba.jpg",
      audio: "/assets/img/songs/Mehabooba.mp3",
      link:"/song/10"
    },
    { 
      id:12,
      name: "Malare",
      artist: "Vijay Yesudas",
      img: "/assets/img/malare.jpg",
      audio: "/assets/img/songs/malare.mp3",
      link:"/song/11"
    },
    { 
      id:13,
      name: "Kudukku",
      artist: "Shaan Rahman",
      img: "/assets/img/kudukku.jpg",
      audio: "/assets/img/songs/kudukku.mp3",
      link:"/song/12"
    },
    { 
      id:14,
      name: "Vaathil Melle",
      artist: "Rajesh Murugesan",
      img: "/assets/img/vaathilmelle.jpg",
      audio: "/assets/img/songs/vaathilmelle.mp3",
      link:"/song/13"
    },
    { 
      id:15,
      name: "Dooreyo",
      artist: "Vishak Nair",
      img: "/assets/img/dooreyo.jpg",
      audio: "/assets/img/songs/Dooreyo.mp3",
      link:"/song/14"
    },
    { 
      id:16,
      name: "Marakavillaye",
      artist: "Darshan Raval",
      img: "/assets/img/needapadadhani.jpg",
      audio: "/assets/img/songs/marakavillaye.mp3",
      link:"/song/15"
    },
    { 
      id:17,
      name: "Samajavaragamana",
      artist: "Sid Sriram",
      img: "/assets/img/samajavaragamana.jpg",
      audio: "/assets/img/songs/Samajavaragamana.mp3",
      link:"/song/16"
    },
    { 
      id:18,
      name: "Oo Antava Oo Oo Antava",
      artist: "Indravathi Cauhan",
      img: "/assets/img/ooantavaooooantava.jpg",
      audio: "/assets/img/songs/Oo Antava Oo Oo Antava.mp3",
      link:"/song/17"
    },
    { 
      id:19,
      name: "Pila Padesaave",
      artist: "Yuvan Shankar Raja",
      img: "/assets/img/pilapadesaave.jpg",
      audio: "/assets/img/songs/Pila Padesaave.mp3",
      link:"/song/18"
    },
    { 
      id:20,
      name: "Oh Sita Hey Rama",
      artist: "Vishal Chandrashekhar",
      img: "/assets/img/ohsitaheyrama.jpg",
      audio: "/assets/img/songs/Oh Sita Hey Rama.mp3",
      link:"/song/19"
    },
    { 
      id:21,
      name: "On My Way",
      artist: "Alan Walker",
      img: "/assets/img/onmyway.jpg",
      audio: "/assets/img/songs/On My Way.mp3",
      link:"/song/20"
    },
    { 
      id:22,
      name: "Thunder",
      artist: "Imagine Dragons",
      img: "/assets/img/thunder.jpg",
      audio: "/assets/img/songs/Thunder.mp3",
      link:"/song/21"
    },
    { 
      id:23,
      name: "Shape Of You",
      artist: "Ed Sheeran",
      img: "/assets/img/shapeofyou.jpg",
      audio: "/assets/img/songs/Shape Of You.mp3",
      link:"/song/22"
    },
    { 
      id:24,
      name: "Heat Waves",
      artist: "Glass Animals",
      img: "/assets/img/heatwaves.jpg",
      audio: "/assets/img/songs/Heat Waves.mp3",
      link:"/song/23"
    },
    { 
      id:25,
      name: "Friends",
      artist: "Anne Marie",
      img: "/assets/img/friends.jpg",
      audio: "/assets/img/songs/Friends.mp3",
      link:"/song/24"
    }
  ];

  

  constructor( private _httpclient:HttpClient) { }
  public gettracks(){
    return this._songs
  }
  public getnames(){
    return this._songs.map(item => item["name"]); 
  }
  public getid(){
    return this._songs.map(item => item["id"]); 
  }
  
}
