import SelectComponent from "./SelectComponent";

export default {
  title: "Views/PageMaterialUi/Select",
  component: SelectComponent,
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = (args) => <SelectComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  error: "",
  variant: ""
};
Default.argTypes = {
  variant: {
    options: ["outlined", "filled"],
    control: { type: "radio" },
  },
};

Default.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  error: "Required!",
};

export const Variant = Template.bind({});
Variant.argTypes = {
  variant: {
    options: ["outlined", "filled"],
    control: { type: "radio" },
  },
};
