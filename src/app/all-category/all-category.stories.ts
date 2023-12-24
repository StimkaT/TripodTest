import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {AllCategoryComponent} from './all-category.component';



const meta: Meta<AllCategoryComponent> = {
  title: 'UI Components/AllCategoryComponent',
  component: AllCategoryComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
    componentWrapperDecorator(
      (story) => `<div>${story}</div>`
    ),
  ],
  render: (args: AllCategoryComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<AllCategoryComponent>;

export const Primary: Story = {
  args: {
  },
};