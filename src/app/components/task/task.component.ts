import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task;

  @Output()
  onPinTask = new EventEmitter<Event>();

  @Output()
  onArchiveTask = new EventEmitter<Event>();

  constructor() { }

  onPin(id: string) {
    this.onPinTask.emit(id as any);
  }

  onArchive(id: string) {
    this.onArchiveTask.emit(id as any);
  }
}
