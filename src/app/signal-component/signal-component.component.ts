import { Component,Injector, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-component.component.html',
  styleUrl: './signal-component.component.css'
})
export class SignalComponentComponent {
  count = signal(0);
  constructor(private injector: Injector) {
    this.initializeLogging();
  }
  initializeLogging(): void {
    effect(() => {
      console.log(`The count is: ${this.count()})`);
    }, {injector: this.injector});
  }

  buttonClicked():void{
    this.count.set(2);
console.log(' inside clicked ',this.count());
  }
}
