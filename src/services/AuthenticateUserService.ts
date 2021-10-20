import axios from 'axios';
/**
 * Objetivo: receber codigo para autenticar usuário e registrar no banco de dados
 *
 * Entrada:
 * Codigo(string)
 *
 * verificar se o usuário existe no banco de dados
 * ------sim = gera token
 * ------não = cria no DB, gera um token
 *
 * retornar o token com as infos do usuário
 */

class AuthenticateUserService {
	async execute(code: string) {
		const url = 'https://github.com/login/oauth/acess_token';

		const response = await axios.post(url, null, {
			params: {
				client_id: process.env.GITHUB_CLIENT_ID,
				client_secret: process.env.GITHUB_CLIENT_SECRET,
				code,
			},
			headers: {
				Accept: 'application/json',
			},
		});

		return response.data;
	}
}

export { AuthenticateUserService };
