import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MyParentComponent } from './my-parent/my-parent.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MyParentComponent],
  templateUrl: 'main.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
