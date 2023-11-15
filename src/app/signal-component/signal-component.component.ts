import { Component, Injector, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-signal-component',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatProgressBarModule],
  templateUrl: './signal-component.component.html',
  styleUrl: './signal-component.component.css'
})
export class SignalComponentComponent {
  count = signal(0);

  isVisible = true;
  switchVar = 'A';
  items = [{ name: 'sunday' }, { name: 'monday' }, { name: 'tuesday' }];
  constructor(private injector: Injector) {


    const dateobj = new Date();

    const date_part = dateobj.getDate();
    const year_part = dateobj.getFullYear();
    const month_part = dateobj.getMonth();
    console.log(date_part, month_part, year_part)
    if (year_part == 2023 && month_part + 1 == 11 && date_part == 13) {
      console.log(' Happy Diwali ');
    }






    this.initializeLogging();
  }
  initializeLogging(): void {
    effect(() => {
      console.log(`The count is: ${this.count()})`);
    }, { injector: this.injector });
  }

  buttonClicked(): void {
    this.isVisible = !this.isVisible;
    this.switchVar = 'c';
    this.count.set(2);
    console.log(' inside clicked ', this.count());
  }
}
