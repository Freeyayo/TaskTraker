import { Injectable } from '@angular/core';
import { Tasks } from '../mock-task';
import { Task } from '../TASK';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = of(Tasks);
    return tasks;
  }
}
