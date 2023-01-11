import type { Actions } from './$types';

interface Login {
	username: string;
	password: string;
}

function isLogin(n: unknown): n is Login {
	return (n as Login).username !== undefined && (n as Login).password !== undefined;
}

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData.entries());
		//console.log(data);
		if (isLogin(data)) {
			try {
				await locals.pb?.collection('users').authWithPassword(data.username, data.password);
			} catch (err) {
				let msg = 'uknown error';
				if (err instanceof Error) {
					msg = err.message;
				}
				return {
					isError: true,
					error: msg
				};
			}
		} else {
			return {
				isError: true,
				error: 'invalid data'
			};
		}
	}
};
