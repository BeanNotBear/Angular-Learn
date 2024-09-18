import { NgModule } from '@angular/core';
import {TasksComponent} from "./tasks.component";
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {FormsModule} from "@angular/forms";
import {CommonModule, DatePipe} from "@angular/common";
import {CardModule} from "../shared/card.module";

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  imports: [CommonModule, FormsModule, DatePipe, CardModule],
  exports: [TasksComponent]
})
export class TasksModule { }
