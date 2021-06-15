module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
      },
    },
    "@storybook/addon-cssresources",
    "@storybook/preset-create-react-app",
    "storybook-addon-playroom",
    "@whitespace/storybook-addon-html",
  ],
};
