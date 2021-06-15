import { withCssResources } from "@storybook/addon-cssresources";
import paper from "!!raw-loader!papercss";

export const decorators = [withCssResources];

export const parameters = {
  cssresources: [
    {
      id: `paper.css`,
      code: `<style>${paper}</style>`,
      picked: false,
      hideCode: true,
    },
  ],
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
