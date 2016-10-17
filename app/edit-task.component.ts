import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div class="edit-task">
      <div *ngIf="childSelectedTask">
        <h1>Edit Task</h1>
        <div>
          <label>Enter Task Description:</label>
          <input class="form-control" [(ngModel)]="childSelectedTask.description">
        </div>
        <br>
        <div>
          <label>Enter Task ID:</label>
          <input class="form-control" [(ngModel)]="childSelectedTask.id">
          <br>
          <button class="btn btn-warning center-block" (click)="doneClicked()">Done</button>
        </div>
      </div>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
