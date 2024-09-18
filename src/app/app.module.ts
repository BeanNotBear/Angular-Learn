import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {TasksComponent} from "./tasks/tasks.component";
import {TaskComponent} from "./tasks/task/task.component";
import {BrowserModule} from "@angular/platform-browser";
import {UserComponent} from "./user/user.component";
import {NewTaskComponent} from "./tasks/new-task/new-task.component";
import {FormsModule} from "@angular/forms";
import {CardModule} from "./shared/card.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, TasksComponent, UserComponent, TaskComponent, NewTaskComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, CardModule]
})

export class AppModule {

}
