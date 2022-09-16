import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task-component/task.component';
import { InputTaskComponent } from './input-add-task/input-task.component';
import { TodoListComponent } from './todo-list.component';
import { FormsModule } from '@angular/forms';
import { DeleteAllComponent } from './delete-all/delete-all.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    TaskListComponent,
    TaskComponent,
    InputTaskComponent,
    TodoListComponent,
    DeleteAllComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ],
  exports: [
    TodoListComponent,
    HeaderComponent,
    TaskListComponent,
    TaskComponent,
    InputTaskComponent,
  ]
})
export class TodoListModule { }
