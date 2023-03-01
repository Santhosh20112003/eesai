import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
 wish:string="";

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
 
    $( "#tag" ).autocomplete({
      
      source: function(request:any, response:any) {
        var results = $.ui.autocomplete.filter(availableTags, request.term);
        response(results.slice(0, 2));
    },
      select:function(request:any,response:any){
        window.onbeforeunload;
        window.location.href =`/song/${availableTags.indexOf(response.item.label)}`;
      }
   
    });
  } );

  if(new Date().getHours()>4 && new Date().getHours() <= 11)
{
	this.wish= "Good Morning";
}
else if(new Date().getHours() > 11 && new Date().getHours() <= 17)
{
  this.wish= "Good Afternoon";
}
else if(new Date().getHours() > 17 && new Date().getHours() <= 19)
{
  this.wish= "Good Evening";
}
else if(new Date().getHours() > 19 &&  new Date().getHours() <= 24)
{
  this.wish= "Good Night";
}
else if(new Date().getHours() > 1 && new Date().getHours() <= 4)
{
  this.wish= "Mid Night";
}
else 
{
	this.wish= "Good Evening";
}

 }
  
}
