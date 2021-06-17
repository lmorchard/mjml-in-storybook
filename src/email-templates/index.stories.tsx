import React from "react";
import { Story, Meta } from "@storybook/react";
import RenderedEmail, { RenderedEmailProps } from "../lib/RenderedEmail";

export default {
  title: "Emails",
} as Meta;

const Template: Story<RenderedEmailProps> = (args) => (
  <RenderedEmail {...args} />
);

export const Cancellation = Template.bind({});
Cancellation.args = {
  template: "cancellation",
  variables: {
    userName: "John Doe",
  }
};

export const Welcome = Template.bind({});
Welcome.args = {
  template: "welcome",
  variables: {
    userName: "John Doe",
    productName: "This is a test",
  }
};

export const Invoice = Template.bind({});
Invoice.args = {
  template: "invoice",
  variables: {
    userName: "John Doe",
    paymentAmount: "9.99",
  }
};
