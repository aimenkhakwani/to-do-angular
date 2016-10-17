import { Component, Output, EventEmitter }  from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template:`
    <div class="new-task">
      <h3 class="center">Add New Task</h3>
      <div>
        <label>Enter Task Description</label>
        <input class="form-control" #newDescription>
      </div>
      <div>
        <label>Enter Task ID</label>
        <input class="form-control" #newId>
        <br>
        <button class="btn btn-danger center-block" (click)="
        addClicked(newDescription.value, newId.value);
        newDescription.value='';
        newId.value='';
        ">Add</button>
      </div>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, id: number) {
    var newTaskToAdd: Task = new Task(description, id);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
