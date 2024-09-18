import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "./task.model";
import {TaskService} from "./task.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;

  constructor(private taskService: TaskService) {
  }

  onCompleteTask() {
    this.taskService.removeUserTask(this.task.id);
  }
}
