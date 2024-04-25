import { Component } from '@angular/core';
import { ToDoItem } from '../to-do-item';
import { ToDoService } from '../to-do.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrl: './create-to-do.component.css'
})
export class CreateToDoComponent {
  title:string='';
  completed:boolean=false;
  id:number=0;
  formData:ToDoItem=new ToDoItem(this.completed,this.id,this.title);
  constructor(private toDoService:ToDoService,private http:HttpClient,private router:Router){}
  onSubmit():void{
    this.toDoService.createToDoItem(this.formData).subscribe(
      (response)=>{
        console.log('Form Submitted');
      },
      (error)=>{
        console.log(error);
      }
    );
    this.router.navigate(['']);
  }
  onClose():void{
    this.router.navigate(['']);
  }
}
