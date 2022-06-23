import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Counter } from "./Counter";

export default {
  title: "Example/Counter",
  component: Counter,
  argTypes: {
    label: {},
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Counter",
};
