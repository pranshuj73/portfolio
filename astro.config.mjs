import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    mdx()
  ],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [[rehypePrettyCode, {}]],
    // shikiConfig: {
    //   theme: 'vesper',
    // },
  },
  output: "server",
  adapter: vercel()
});