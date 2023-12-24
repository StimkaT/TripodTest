import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {FooterComponent} from './footer.component';



const meta: Meta<FooterComponent> = {
  title: 'UI Components/FooterComponent',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
    componentWrapperDecorator(
      (story) => `<div>${story}</div>`
    ),
  ],
  render: (args: FooterComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<FooterComponent>;

export const Primary: Story = {
  args: {
  },
};
