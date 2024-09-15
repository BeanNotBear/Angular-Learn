import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from "../task/task.model";
import {FormsModule} from "@angular/forms";

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

  title: string = '';

  onCancel() {
    this.cancel.emit();
  }
}
