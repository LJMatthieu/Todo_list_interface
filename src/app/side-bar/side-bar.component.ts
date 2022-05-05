import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoItemGlobalService } from '../services/todo-item-global.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  context_class : any;

  constructor(private taskService: TodoItemGlobalService, private router : Router ) { 
    this.context_class = this; 
  }

  ngOnInit(): void {}

  changeFilter(value) {
    this.taskService.changeFilterRule(value);
      this.router.navigate(['']);
  }
}