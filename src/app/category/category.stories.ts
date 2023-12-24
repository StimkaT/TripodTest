import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CategoryComponent} from './category.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const meta: Meta<CategoryComponent> = {
  title: 'UI Components/CategoryComponent',
  component: CategoryComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, BrowserAnimationsModule],
    }),
    componentWrapperDecorator(
      (story) => `<div>${story}</div>`
    ),
  ],
  render: (args: CategoryComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<CategoryComponent>;

export const Primary: Story = {
  args: {
  },
};
