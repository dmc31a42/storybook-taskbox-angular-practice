import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-pure-task-list',
  templateUrl: './pure-task-list.component.html',
  styleUrls: ['./pure-task-list.component.css']
})
export class PureTaskListComponent {
  tasksInOrder: Task[] = [];
  
  @Input() loading = false;

  @Output()
  onPinTask = new EventEmitter<Event>();

  @Output()
  onArchiveTask = new EventEmitter<Event>();

  @Input() 
  set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ]
  }

  constructor() { }
}
