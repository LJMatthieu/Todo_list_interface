import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { TodoItemGlobalService } from './services/todo-item-global.service';
import { CreateTaskComponent } from './create-task/create-task.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewTaskComponent } from './view-task/view-task.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const appRoutes : Routes = [
  {path: '', component: ViewTaskComponent},
  {path: 'add', component: CreateTaskComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    CreateTaskComponent,
    ViewTaskComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoItemGlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
