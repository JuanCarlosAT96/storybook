import MyButton from "./MyButton.vue";

export default {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    primary: {
      control: "boolean",
    },
  },
};

const Template = (args: any, { argTypes }: any) => ({
  components: { MyButton },
  props: Object.keys(argTypes),
  template: '<MyButton v-bind="$props">Click me</MyButton>',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
};
