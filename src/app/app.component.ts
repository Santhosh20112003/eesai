import { Component,OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'musicplayer-application';

  ngOnInit(){
    window.onbeforeunload;
    $( function() {
      var availableTags = [
        
           "Chila Chila",
         
           "Thee Thalapathy",
     
           "Vaa Vaathi",
        
           "Porkanda Singam",
        
           "DaDa",
     
           "Ennai Vittu",
       
           "Vaathi Coming",
    
           "Ranjithame",
      
           "Baby",
       
           "Darshana",
      
           "Mehabooba",
      
           "Malare",
     
           "Kudukku",
      
           "Vaathil Melle",
       
           "Dooreyo",
        
        
           "Marakavillaye",
     
           "Samajavaragamana",
       "Oo Antava Oo Oo Antava",
  "Pila Padesaave",
      "Oh Sita Hey Rama",
       "On My Way",
       "Thunder",
    "Shape Of You",
      "Heat Waves",
       "Friends"
        
      ];
   
      $( "#tags" ).autocomplete({
        source: function(request:any, response:any) {
          var results = $.ui.autocomplete.filter(availableTags, request.term);
          response(results.slice(0, 3));
      },
        select:function(request:any,response:any){
          window.onbeforeunload;
          window.location.href =`/song/${availableTags.indexOf(response.item.label)}`;
        }
     
      });
    } );
  }
  
}
