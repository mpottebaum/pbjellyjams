import path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
	entry: './assets/term-hanks/index.js',
	output: {
		path: path.resolve(__dirname, 'assets', 'term-hanks'),
		filename: 'bundle.js',
	}
}

