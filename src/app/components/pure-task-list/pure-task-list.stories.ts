import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { TaskComponent } from "../task/task.component";
import { PureTaskListComponent } from "./pure-task-list.component";
import * as TaskStories from '../task/task.stories';

export default {
  component: PureTaskListComponent,
  decorators: [
    moduleMetadata({
      declarations: [PureTaskListComponent, TaskComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'PureTaskList',
} as Meta;

const Template: Story = args => ({
  props: {
    ...args,
    onPinTask: TaskStories.actionsData.onPinTask,
    onArchiveTask: TaskStories.actionsData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6', state: 'TASK_PINNED' },
  ]
}

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
}