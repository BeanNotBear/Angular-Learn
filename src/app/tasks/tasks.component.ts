import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {DUMMY_TASKS} from "./dummy-tasks";
import {NewTaskComponent} from "./new-task/new-task.component";
import { type NewTaskModel} from "./new-task/new-task.model";

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

  tasks = DUMMY_TASKS;

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getTasksByUserId() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onStartAddingTask() {
    this.isAddingTask = true;
  }

  onStartCancelingTask() {
    this.isAddingTask = false;
  }

  onAddingTask(taskData: NewTaskModel) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      dueDate: taskData.date,
      summary: taskData.summary
    })
    this.isAddingTask = false;
  }
}
