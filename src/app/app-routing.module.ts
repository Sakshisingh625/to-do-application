import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';
import { UncompletedTaskComponent } from './uncompleted-task/uncompleted-task.component';

const routes: Routes = [
  { path: '',component:ToDoListComponent},
  {path:'createToDo',component:CreateToDoComponent},
  {path:'completedTask',component:CompletedTaskComponent},
  {path:'nonCompletedTask',component:UncompletedTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
