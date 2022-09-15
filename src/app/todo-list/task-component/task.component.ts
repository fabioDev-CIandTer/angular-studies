import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() public taskItem:{name:string, index:number} = {name:'', index:0};
  @Output() public deleteTaskEmitter = new EventEmitter();
  @Output() public taskDoneEmitter = new EventEmitter();

  deleteTask(index:number){
    this.deleteTaskEmitter.emit(index)
  }

  taskDone(event:MouseEvent){
    console.log(event)
    this.taskDoneEmitter.emit(event.target)
  }

}
