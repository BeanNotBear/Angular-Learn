import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from "../task/task.model";
import {FormsModule} from "@angular/forms";
import {NewTaskModel} from "./new-task.model";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter();
  @Output() add = new EventEmitter<NewTaskModel>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    });

  }
}
