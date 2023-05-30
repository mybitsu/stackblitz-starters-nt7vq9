import { Component, OnInit } from '@angular/core';
import { MyChildComponent } from '../my-child/my-child.component';

@Component({
  standalone: true,
  selector: 'app-my-parent',
  templateUrl: './my-parent.component.html',
  styleUrls: ['./my-parent.component.css'],
  imports: [MyChildComponent],
})
export class MyParentComponent implements OnInit {
  acceptedMessage: string = '';
  constructor() {}

  ngOnInit() {}

  receiveMessage($event: string) {
    this.acceptedMessage = $event;
  }
}
