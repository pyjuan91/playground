import adapterNode from '@sveltejs/adapter-node';
import adapterStatic from '@sveltejs/adapter-static';
import adapterVercel from '@sveltejs/adapter-vercel';
import adapterNetlify from '@sveltejs/adapter-netlify';
import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: getAdapter(),
    csp: { mode: 'auto' },
    alias: {
      $QWER: './QWER',
      $lib: './src/lib',
      $generated: './src/generated',
      $stores: './src/lib/stores',
      $config: './user/config',
      $assets: './user/assets',
      $custom: './user/custom',
      $static: './static',
      $i18n: './src/i18n',
    },
    prerender: {
      entries: ['/en', '/ja', '/zh', '/zh-Hans', '/zh-Hant',
        // '/example',
        // '/hello-QWER',
        // '/quick-start',
        '/cpe-reflection',
        '/vboxmanage',
        '/versions.json',
        '/0x3f_leetcode_dynamic_programming'
      ]
    }
  },
};

function getAdapter() {
  if (Object.keys(process.env).some((key) => key.includes('VERCEL'))) {
    return adapterVercel();
  } else if (Object.keys(process.env).some((key) => key.includes('NETLIFY'))) {
    return adapterNetlify();
  } else if (Object.keys(process.env).some((key) => key.includes('CF_PAGES'))) {
    return adapterCloudflare();
  } else {
    return process.env.ADAPTER === 'node'
      ? adapterNode({ out: 'build' })
      : adapterStatic({
          pages: 'build',
          assets: 'build',
          fallback: undefined,
        });
  }
}

export default config;
