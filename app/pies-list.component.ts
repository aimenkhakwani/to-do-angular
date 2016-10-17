import { Component } from '@angular/core';

@Component({
  selector: 'pies',
  template: `
  <h3>Here are our fave pies!</h3>
  <div *ngFor="let currentPie of favoritePies">
    <p>{{ currentPie }}</p>
  </div>
  `
})

export class PiesListComponent {
  favoritePies: string[] = ["Apple", "Banana Cream", "Pumpkin"];
}
