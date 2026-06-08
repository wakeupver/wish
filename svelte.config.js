import path from 'path';
import preprocess from 'svelte-preprocess';

const basePath = process.env.BASE_PATH || '';

// Custom inline adapter - compatible dengan kit@1.0.0-next.x
const staticAdapter = {
	name: 'adapter-static-custom',
	async adapt(builder) {
		const outDir = 'build';
		builder.writeClient(outDir);
		if (typeof builder.writePrerendered === 'function') {
			builder.writePrerendered(outDir);
		}
		if (typeof builder.writeStatic === 'function') {
			builder.writeStatic(outDir);
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		appDir: 'internal',
		adapter: staticAdapter,
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
