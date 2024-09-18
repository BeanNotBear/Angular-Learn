import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {BrowserModule} from "@angular/platform-browser";
import {UserComponent} from "./user/user.component";
import {FormsModule} from "@angular/forms";
import {CardModule} from "./shared/card.module";
import {TasksModule} from "./tasks/tasks.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, CardModule, TasksModule]
})

export class AppModule {

}
