import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-item';
import { ToDoService } from '../to-do.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnInit {
  toDoItems:ToDoItem[]=[];
  constructor(private http:HttpClient,private router:Router,private toDoService:ToDoService,private snackBar: MatSnackBar){}
  ngOnInit(){
    this.loadToDoItems();
  }
  loadToDoItems():void{
    this.toDoService.getAllToDoItems().subscribe(
      (respose)=>{
        this.toDoItems=respose;
        console.log(this.toDoItems);
        
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  delete(id:number):void{
    this.toDoService.deleteToDoItem(id).subscribe(
      (response)=>{
        this.toDoItems=this.toDoItems.filter(todo=>todo.id!==id);
      },
      (error)=>{
        console.log(error);
        
      }
    );
    this.openSnackBar("Success! to do item deleted successfully.")
  }
  openSnackBar(message:string):void{
    this.snackBar.open(message,'close',{duration:3000,});
  }
  onClose():void{
    this.isEditing=false;
  }
  isEditing=false;
  updateItem: ToDoItem= new ToDoItem(false,0,'');
  updateToDo(x:number):void{
    this.findById(x);
    this.isEditing=true;
  }
  findById(x:number){
    for(const obj of this.toDoItems){
      if(obj.id===x){
        this.updateItem=obj;
        break;
      }
    }
  }
  title:string=this.updateItem.title;
  completed:boolean=false;
  id:number=this.updateItem.id;
  formData:ToDoItem= new ToDoItem(this.completed,this.id,this.title);
  onUpdate():void{
    if(this.formData.title===''){
      this.formData.title=this.updateItem.title;
    }
    this.toDoService.updateToDoItem(this.updateItem.id,this.formData).subscribe(
      (response)=>{
        console.log("Form Submitted Successfully.");
        this.loadToDoItems();
      },
      (error)=>{
        console.log(error);
        
      }
    );
    this.isEditing=false;
  }
}
