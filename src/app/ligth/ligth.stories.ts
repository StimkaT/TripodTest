import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {LigthComponent} from './ligth.component';
import { MatGridListModule } from '@angular/material/grid-list';


const meta: Meta<LigthComponent> = {
  title: 'UI Components/LigthComponent',
  component: LigthComponent,
  decorators: [
    moduleMetadata({
      imports: [MatGridListModule],
    }),
    componentWrapperDecorator(
      (story) => `<div>${story}</div>`
    ),
  ],
  render: (args: LigthComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<LigthComponent>;

export const Primary: Story = {
  args: {
    },
};
