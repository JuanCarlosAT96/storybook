import MyInput from "./MyInput.vue";

export default {
  title: "MyInput",
  component: MyInput,
  argTypes: {
    characterCount: {
      control: "number",
    },
  },
};

const Template = (args: any) => ({
  components: { MyInput },
  setup() {
    return { args };
  },
  template: `
        <div>
          <MyInput v-bind="args" />
          <p>Contador de letras: {{ args.characterCount }}</p>
        </div>
      `,
});

export const Default = Template.bind({});
Default.args = {
  value: "",
  placeholder: "Enter text",
  characterCount: 0,
};
