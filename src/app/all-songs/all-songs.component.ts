import { Component } from '@angular/core';

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.scss']
})
export class AllSongsComponent {
back(){
  window.history.back();
}
}
