import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <h3 (click)="doStuff(currentTask)" *ngFor="let currentTask of tasks">{{ currentTask.description }}</h3>
  </div>
  `
})

export class AppComponent {
  public tasks: Task [] = [
    new Task("Create To-Do List app", 0),
    new Task("Learn Kung Fu", 1),
    new Task("Rewatch LotR", 2),
    new Task("Do laundry", 3)
  ];
  doStuff(clickedTask: Task) {
    if(clickedTask.done === true) {
      alert("This task is complete");
    } else {
      alert("This task in NOT complete");
    }
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {}
}
