import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
 wish:string="";


constructor(private songs:SpotifyService){

}

 ngOnInit(){  
  const data = this.songs.getnames();
    $( "#tag" ).autocomplete({
      source: (request:any, response:any) => {
       
        const maxResults = 2  ; 
        const filteredData = data.filter((item) => item.toLowerCase().includes(request.term.toLowerCase()));
        response(filteredData.slice(0, maxResults));
      },
      select: function(event:any, ui:any) {
        console.log(ui.item.link)
        window.location.href = `/song/${data.indexOf(ui.item.label)}`; 
      },
    minLength: 0,
    autoFocus: true
    });

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
