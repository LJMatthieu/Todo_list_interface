import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';
import { TodoItemGlobalService } from '../services/todo-item-global.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {  

  @Input() todo_item;
  @Input() id_task:number;

  public unique_key: number;
  public parentRef: AppComponent;

  remove_components = false;

  constructor(private taskservice : TodoItemGlobalService) { 
  }

  ngOnInit(): void {
    
  }

  onClickUpdateStatus(status: string) {
    this.taskservice.ChangeStatusOfTask(this.id_task, status)
  }

  deleteTaskUnitaire() {
    this.taskservice.DeleteTask(this.id_task);
    this.remove_components = true;
  }

  clearItem() {
    if(this.remove_components === true) {
      return "{'display':'none'}";
    }
   
  }
 
  getBooleanStar() {
    if(this.todo_item['priority'] === true) {
      return "star";
    } else {
      return "none"
    }
  }

  OnSubmit(form: NgForm) {
    console.log(form.value)
  }
}
