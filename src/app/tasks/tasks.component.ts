import {Component, Input} from '@angular/core';
import {TaskService} from "./task/task.service";

@Component({
  selector: 'app-tasks',
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
