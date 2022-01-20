import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { ArchiveTask, PinTask, TasksState } from 'src/app/state/task.state';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Select(TasksState.getAllTasks) tasks$: Observable<Task[]>;

  constructor(private store: Store) { }

  archiveTask(id: string) {
    this.store.dispatch(new ArchiveTask(id));
  }

  pinTask(id: string) {
    this.store.dispatch(new PinTask(id));
  }
}
