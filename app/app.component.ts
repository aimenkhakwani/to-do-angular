import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <pies></pies>
    <task-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
     ></task-list>
     <edit-task
       [childSelectedTask]="selectedTask"
       (doneClickedSender)="finishedEditing()"
     ></edit-task>
    <new-task
      (newTaskSender)="addTask($event)"
    ></new-task>
  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
      new Task("Study Angular", "high", 0),
      new Task("Walk the cat", "medium", 1),
      new Task("Rewatch all the Lord of the Rings movies", "high", 2),
      new Task("Do the laundry", "low", 3),
      new Task("Grab a latte", "medium", 3),
      new Task("Read Harry Potter", "high", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }
}
