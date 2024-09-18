import {DUMMY_TASKS} from "../dummy-tasks";
import {NewTaskModel} from "../new-task/new-task.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class TaskService {
  private tasks = DUMMY_TASKS;
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if(tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

// get all tasks of a user.
  getUserTask(userId: string) {
    return this.tasks.filter((task) => task.userId == userId);
  }

  // remove a task.
  removeUserTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id != taskId);
    this.saveTask();
  }

  // add a task.
  addUserTask(newUserTask: NewTaskModel, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newUserTask.title,
      summary: newUserTask.summary,
      dueDate: newUserTask.date
    });
    this.saveTask();
  }

  private saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
