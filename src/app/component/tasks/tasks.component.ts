import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
// import { Tasks } from 'src/app/mock-task';
import { Task } from 'src/app/TASK';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  // tasks: Task[] = Tasks;
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe((tasks) => {
      return (this.tasks = tasks);
    });
  }

  ngOnInit(): void {}

  handleDelete() {
    console.log('got it');
  }
}
