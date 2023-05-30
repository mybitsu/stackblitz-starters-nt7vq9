import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

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

  @Output()
  messageEvent = new EventEmitter<string>();

  what_i_have_to_say: string = 'HiFromChild';

  sendMessage() {
    this.messageEvent.emit(this.what_i_have_to_say + Math.random());
  }
  ngOnInit() {}
}
