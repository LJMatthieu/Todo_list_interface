import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoItemGlobalService{

  status_item: any;
  private items: any;
  status_enum = status;

  last_id_save = 0;

  /**
   * Filter help 
   * 
   * -1 => Filtre les tâches importante
   * -2 => filter today task
   * null => Aucun filtre
   * filtre sur les taches enum "status"
   */
  
   filter = null;

  //Observable
  taskSubject = new Subject<any[]>();

  constructor() { 
    this.status_item=Object.keys(status);
    this.items = this.laodTasks();   
    
  }

  emmitTaskSubject() {
    this.taskSubject.next(this.items.slice());
  }

  ChangeStatusOfTask(id: number, newStatus: string) {
    this.items[id]['status'] = newStatus;
  }

  DeleteTask(id: number) {
    this.items.splice(id, 1);
    this.emmitTaskSubject();
    console.log(this.items)
  }

  addTask(name: string, status:string, date:string, priority:boolean) {
    this.items.push({name, status, priority, date})
    this.emmitTaskSubject();

    // Store in local task to do
    this.last_id_save = this.last_id_save + 1;
    localStorage.setItem('' + this.last_id_save, JSON.stringify({name, status, priority, date}));
  }

  laodTasks() {
    let tempo_list = [];
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var current_obj = JSON.parse(localStorage.getItem(key));
      
      this.last_id_save = this.last_id_save + 1;

      tempo_list.push(current_obj); 
    }

    return tempo_list;
  }

  changeFilterRule(filterEnum: any) {
    this.filter = filterEnum;
  }
}

export enum status {
  NotStart = "pas enore débuter",
  WorkInProgress = "travail en cours",
  test = "phase de test",
  waitValidation = "en attente d'approbation", 
  Over = "terminé"
}