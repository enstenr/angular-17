import { Component, Injector, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
