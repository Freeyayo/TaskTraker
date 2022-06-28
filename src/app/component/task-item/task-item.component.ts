import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/TASK';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() deleteBtnEvent: EventEmitter<Task> = new EventEmitter();

  deleteButtonTitle: string = 'delete';

  constructor() {}

  ngOnInit(): void {}

  deleteBtnClick() {
    console.log('emit deleteBtnEvent');
    this.deleteBtnEvent.emit();
  }
}
