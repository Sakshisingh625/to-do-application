export class ToDoItem{
    id:number;
    title:string;
    completed:boolean;
    constructor(completed:boolean,id:number,title:string){
        this.completed=completed;
        this.id=id;
        this.title=title;
    }
}