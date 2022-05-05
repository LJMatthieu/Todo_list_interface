import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoItemGlobalService } from '../services/todo-item-global.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  todo_task = [];
  taskSubscription: Subscription;

  constructor(private taskservice : TodoItemGlobalService) {

  }

  ngOnInit(): void {
    this.taskSubscription = this.taskservice.taskSubject.subscribe(
      (tasks: any[]) => {
        this.todo_task = tasks;
      }
    );
    this.taskservice.emmitTaskSubject();
  }

  sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  }

  getListFilter() {
    let todo_filtered = [];
    for(let val of this.todo_task) {

      if(this.taskservice.filter == -1) {
        if(val.priority == true) {
          todo_filtered.push(val);
        }
      }

      else if(this.taskservice.filter == -2) {
        let dateString = val['date']; 
        let datesave = new Date(dateString);
        let currentDate = new Date();

        if(this.sameDay(datesave, currentDate) == true) {
          todo_filtered.push(val);
        }

      }

      else if(this.taskservice.filter == null) {
          todo_filtered.push(val);
      } else {
        let currentFilter = this.taskservice.filter;
        if(val.status == currentFilter) {
          todo_filtered.push(val);
          
        }
      }
    }
    console.log(todo_filtered)
    return todo_filtered;
  }
}
