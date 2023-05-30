import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MyChildComponent } from './my-child/my-child.component';
import { MyParentComponent } from './my-parent/my-parent.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MyChildComponent, MyParentComponent],
  templateUrl: 'main.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
