import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Umit';
  Merhaba="Hello ";
  items=[
    {Id:1,Desc:"Kahvaltı",Action:"No"},
    {Id:3,Desc:"Sinema",Action:"Yes"},
    {Id:6,Desc:"Spor",Action:"No"},
    {Id:2,Desc:"Kitap",Action:"Yes"},
    {Id:5,Desc:"Kahvaltı",Action:"No"}
  ];
}
