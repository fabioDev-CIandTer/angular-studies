import { Component } from '@angular/core';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  public todos:string[]=[];

  addTaskToList(task:string){
    if(task!== ""){
      this.todos.push(task);
    }
  }

  deleteAll(confirm:boolean){
    if(confirm){
      this.todos = [];
    }
  }

  removeTaskFromList(taskIndex:number){
    this.todos=this.todos.filter((val,index)=>index!==taskIndex);
  }

  replaceTaskPosition(eventTarget:HTMLInputElement){ 
    let index = Number.parseInt(eventTarget.id);
    let checkedItem = this.todos[index];

    this.removeTaskFromList(index);
    
    if(eventTarget.checked){
      this.addTaskToList(checkedItem || "");
    }else{
      this.todos.unshift(checkedItem);
    }
    
  }
}
