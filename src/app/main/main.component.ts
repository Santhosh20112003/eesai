import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
 wish:string="";

 ngOnInit(){
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
