import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {DUMMY_TASKS} from "./dummy-tasks";
import {NewTaskComponent} from "./new-task/new-task.component";
import { type NewTaskModel} from "./new-task/new-task.model";
import {TaskService} from "./task/task.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userName!: string;
  @Input() userId!: string;
  isAddingTask = false;
  constructor(private taskService: TaskService) {}

  getTasksByUserId() {
    return this.taskService.getUserTask(this.userId);
  }

  onStartAddingTask() {
    this.isAddingTask = true;
  }

  onStartCancelingTask() {
    this.isAddingTask = false;
  }
}
