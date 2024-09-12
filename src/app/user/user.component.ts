import {Component, computed, EventEmitter, Input, Output} from '@angular/core';
import { DUMMY_USERS } from "./dummy-users";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  @Output() select = new EventEmitter<string>();

  get avatarPath() {
    return "assets/users/" + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  };
}
