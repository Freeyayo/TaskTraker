import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/TASK';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output() btnClick: EventEmitter<Task> = new EventEmitter();
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('emit btnClick');
    this.btnClick.emit();
  }
}
