import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css'],
})
export class MyChildComponent implements OnInit {
  constructor() {
    this.message = '';
  }

  // If we would remove the @Input() decorate, we would get an error message, because "message" property is used in the parent's HTML:
  @Input()
  message: string;

  ngOnInit() {}
}
