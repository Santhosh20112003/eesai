import { Component,OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'musicplayer-application';

  ngOnInit(){
    const data = this.songsindesktop.getnames();
    $( "#tags" ).autocomplete({
      source: (request:any, response:any) => {
       
        const maxResults = 3; 
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
    }

    constructor(private songsindesktop:SpotifyService){

    }
  
}
