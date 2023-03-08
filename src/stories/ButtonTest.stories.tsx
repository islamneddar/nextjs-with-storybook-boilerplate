import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonTest } from "./ButtonTest";

export default {
	title: "Example/ButtonTest",
	component: ButtonTest,
	argTypes: {
		content: { control: "boolean" }, // add the control to the list 
	},
} as ComponentMeta<typeof ButtonTest>;

const Template: ComponentStory<typeof ButtonTest> = (args) => (
	<ButtonTest {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	content: "content primary",
};
