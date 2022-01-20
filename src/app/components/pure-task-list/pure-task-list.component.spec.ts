import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render } from '@testing-library/angular';
import { TaskComponent } from '../task/task.component';

import { PureTaskListComponent } from './pure-task-list.component';
import { WithPinnedTasks } from './pure-task-list.stories';

describe('TaskListComponent', () => {
  let component: PureTaskListComponent;
  let fixture: ComponentFixture<PureTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureTaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PureTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders pinned tasks at the start of the list', async () => {
    const mockedActions = jest.fn();
    const tree = await render(PureTaskListComponent, {
      declarations: [TaskComponent],
      componentProperties: {
        ...WithPinnedTasks.args,
        onPinTask: {
          emit: mockedActions,
        } as any,
        onArchiveTask: {
          emit: mockedActions,
        } as any,
      },
    });
    const component = tree.fixture.componentInstance;
    expect(component.tasksInOrder[0].id).toBe('6');
  });
});
