import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {SearchComponent} from './search.component';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';


const meta: Meta<SearchComponent> = {
  title: 'UI Components/SearchComponent',
  component: SearchComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatFormFieldModule, MatIconModule],
    }),
    componentWrapperDecorator(
      (story) => `<div>${story}</div>`
    ),
  ],
  render: (args: SearchComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<SearchComponent>;

export const Primary: Story = {
  args: {
  },
};
