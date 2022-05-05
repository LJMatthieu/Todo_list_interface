import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TodoItemGlobalService } from '../services/todo-item-global.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  status_name = [];
  enum_status_name: any;
  enum_s: any;


  constructor(private taskService: TodoItemGlobalService, private router : Router) {
    this.status_name = taskService.status_item;
    this.enum_status_name = taskService.status_enum;

    this.enum_s = this.taskService.status_enum;
   }

  ngOnInit(): void {

  }

  OnSubmit(form: NgForm) {
    let prorityValue : boolean = false;

    //If the box never use
    if(!(typeof(form.value['proritaire']) === 'string')) {
      prorityValue = form.value['proritaire'];
    }

    console.log(typeof form.value['date_finish'])
    
    this.taskService.addTask(form.value['name'], this.enum_s[form.value['status']],  form.value['date_finish'], prorityValue);  
    this.router.navigate(['']);
  }

}
