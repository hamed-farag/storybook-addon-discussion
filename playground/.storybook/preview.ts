/// <reference types="vite/client" />

import type { Preview } from "@storybook/react";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    discussion: {
      supabase: {
        url: import.meta.env.VITE_SUPABASE_PROJECT_URL,
        secret: import.meta.env.VITE_SUPABASE_PUBLIC_KEY,
      },
    },
  },
};

export default preview;
