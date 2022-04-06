import type { RequestHandler } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';
import dotenv from 'dotenv';

dotenv.config();

const app = process.env.SVELTE_APP_NAME;

/** @type {import('./api/add_contact').RequstHandler} */
export const post: RequestHandler = async ({ request }) => {
	const contact = await request
		.text()
		.then((str) => new URLSearchParams(str))
		.then((urlParams) => urlParams.entries())
		.then((params) => Object.fromEntries(params));

	const result = await supabase.from('Contacts').insert({ app, ...contact });

	console.log(result);

	return {
		status: 303,
		headers: {
			location: request.headers.get('referer')
		}
	};
};
