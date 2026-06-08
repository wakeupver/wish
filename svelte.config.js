import path from 'path';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const basePath = process.env.BASE_PATH || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		appDir: 'internal',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: false
		}),
		paths: {
			base: basePath
		},
		prerender: {
			handleHttpError: 'warn'
		},
		alias: {
			$post: path.resolve('./src/post')
		}
	},
	preprocess: preprocess({ postcss: true })
};

export default config;