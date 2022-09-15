import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css']
})
export class InputTaskComponent {

  @Output() public taskAdicionadaEmitter = new EventEmitter();

  public task:string="";

  addTask(){
    this.task = this.task.trim();
    if(this.task.length){
      this.taskAdicionadaEmitter.emit(this.task);
      this.task="";
    }
    
  }
}
