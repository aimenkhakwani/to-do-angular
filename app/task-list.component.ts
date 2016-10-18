import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <div class="task-list">
    <h2>All Tasks</h2>
    <select (change)="onChange($event.target.value)" class="form-control filter">
      <option value="all">Show All</option>
      <option value="isDone">Show Done</option>
      <option value="notDone" selected="selected">Show Not Done</option>
    </select>
      <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness">
        <task-display class="option" [task]="currentTask"></task-display>
        <button class="btn btn-default" (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
      </div>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
