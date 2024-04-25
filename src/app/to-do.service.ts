import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItem } from './to-do-item';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private baseUrl='http://localhost:8080/api/todos';

  constructor(private http:HttpClient) { }
  getAllToDoItems():Observable<(ToDoItem[])>{
    return this.http.get<ToDoItem[]>(this.baseUrl);
  }

  createToDoItem(toDoItem:ToDoItem):Observable<(ToDoItem)>{
    return this.http.post<ToDoItem>(this.baseUrl,toDoItem);
  }
  updateToDoItem(id:number,updateToDoItem:ToDoItem):Observable<(ToDoItem)>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.put<ToDoItem>(url,updateToDoItem);
  }
  deleteToDoItem(id:number):Observable<void>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
