import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <div class=" col-md-6 task-list">
    <h2>All Tasks</h2>
      <div *ngFor="let currentTask of childTaskList">
        <h3>{{ currentTask.description }}</h3>
        <button class="btn btn-default pull-right" (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
      </div>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
