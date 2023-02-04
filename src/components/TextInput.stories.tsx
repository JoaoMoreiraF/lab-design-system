import { Meta, StoryObj } from "@storybook/react";
import {
  TextInput,
  TextInputInputProps,
  TextInputRootProps,
} from "./TextInput";
import { Envelope } from "phosphor-react";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputInputProps>;

export const Default: StoryObj<TextInputInputProps> = {};

export const WithoutIcon: StoryObj<TextInputInputProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail address" />,
  },
};
