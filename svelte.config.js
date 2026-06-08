import path from 'path';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// BASE_PATH diisi otomatis oleh GitHub Actions saat build
// Contoh: '/repo-name' untuk project page, '' untuk user page (username.github.io)
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
		alias: {
			$post: path.resolve('./src/post')
		}
	},
	preprocess: preprocess({ postcss: true })
};

export default config;
