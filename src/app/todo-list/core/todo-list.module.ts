import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "src/app/angular-material/angular-material.module";

import { DeleteAllComponent } from "../delete-all/delete-all.component";
import { HeaderComponent } from "../header/header.component";
import { InputTaskComponent } from "../input-add-task/input-task.component";
import { TaskComponent } from "../task-component/task.component";
import { TaskListComponent } from "../task-list/task-list.component";
import { TodoListComponent } from "../todo-list.component";
import { TodoRoutingModule } from "./todo-routing.module";




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
    AngularMaterialModule,
    TodoRoutingModule
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
