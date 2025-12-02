import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected count = 0;

  handleCounter(val: string) {
    if (val === 'increment') {
      this.count++;
    } else if (val === 'decrement' && this.count > 0) {
      this.count--;
    } else {
      this.count = 0;
    }
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

}
