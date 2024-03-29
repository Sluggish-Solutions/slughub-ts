import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { myCustomTheme } from './my-custom-theme';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		screens: {
			sm: '500px',

			md: '650px',

			lg: '1000px'
		},
		extend: {}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [myCustomTheme],
				preset: [
					{
						name: 'skeleton',
						enhancements: true
					}
				]
			}
		})
	]
} satisfies Config;
