import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	onwarn: (warning, handler) => {
        // Ignora advertencias de accesibilidad (a11y)
        if (warning.code.includes('a11y')) return;
        handler(warning);
    },

	kit: {
		adapter: adapter({
            pages: 'build', // Nombre de la carpeta de salida
            assets: 'build',
            fallback: '404.html', // Necesario para rutas SPA
            precompress: false,
            strict: true
        }),
		paths: {
			base: process.argv.includes('dev') ? '' : '/pacas-kit',
			relative: true,
		},
		prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                // Ignora el error si es la raíz o si es un problema de base path
                if (path === '/' || path === '/pacas-kit/') {
                    return;
                }
                throw new Error(message);
            }
        }
	}
};

export default config;
