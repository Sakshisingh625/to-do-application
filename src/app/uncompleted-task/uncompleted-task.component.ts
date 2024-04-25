import { Component } from '@angular/core';
import { ToDoItem } from '../to-do-item';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-uncompleted-task',
  templateUrl: './uncompleted-task.component.html',
  styleUrl: './uncompleted-task.component.css'
})
export class UncompletedTaskComponent {
  toDoItems:ToDoItem[]=[];
  constructor(private http:HttpClient,private router:Router,private toDoService:ToDoService){}
  ngOnInit(){
    this.toDoService.getAllToDoItems().subscribe(
      (respose)=>{
        this.toDoItems=respose;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  onBack():void{
    this.router.navigate(['']);
  }
}
