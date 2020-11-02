import { Component } from '@angular/core';
import { Model,TodoItem } from './model';

@Component({
  selector: 'app-desktop',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 model=new Model();
 IsDisplay=false;
 GetName(){
   return this.model.user;
 }
 GetItem(){
   if(this.IsDisplay){
     return this.model.items;
   }
   return this.model.items.filter(item=>!item.action);
 }
 Add(value){
    if(value!=""){
        this.model.items.push(new TodoItem(value,false));
    }
 }
}
