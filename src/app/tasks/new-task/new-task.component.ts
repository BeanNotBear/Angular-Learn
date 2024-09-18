import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../task/task.model";
import {FormsModule} from "@angular/forms";
import {NewTaskModel} from "./new-task.model";
import {TaskService} from "../task/task.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() cancel = new EventEmitter();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';

  constructor(private taskService: TaskService) {
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.taskService.addUserTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    }, this.userId);
    this.cancel.emit();
  }
}
