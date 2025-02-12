import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-practical';
  greetings = 'Hello World';
  greetingCounter = 1;
  greet(){
    this.greetingCounter++;
    this.greetings = `Hello World For The ${this.ordinalFormat(this.greetingCounter)} time!`
  }

  
  ordinalFormat(n: number): string {
    if (n <= 0) return `${n}`; // Handle non-positive numbers gracefully
    
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const mod10 = n % 10;
    const mod100 = n % 100;
    
    if (mod10 === 1 && mod100 !== 11) {
        return `${n}${suffixes[1]}`;
    } else if (mod10 === 2 && mod100 !== 12) {
        return `${n}${suffixes[2]}`;
    } else if (mod10 === 3 && mod100 !== 13) {
        return `${n}${suffixes[3]}`;
    } else {
        return `${n}${suffixes[0]}`;
    }
}
}
