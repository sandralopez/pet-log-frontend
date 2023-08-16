import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { loginService, refreshTokenService } from '../Services/auth';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
	const { jwt, setJwt } = useContext(AuthContext);

	const login = (credentials) => {
		loginService(credentials)
			.then(({data}) => {
				window.sessionStorage.setItem('jwt', data.token);
				window.sessionStorage.setItem('username', data.username);
				setJwt(data.token);
			})
			.catch(err => {
				logout();
			});		
	}

	const logout = () => {
		window.sessionStorage.removeItem('jwt');
		window.sessionStorage.removeItem('username');
		setJwt(null);
	}

	const refreshToken = () => {
		return refreshTokenService()
			.then(({token, user}) => {
				window.sessionStorage.setItem('jwt', token);
				setJwt(token);
				return token;
			})
	}

	return ({
		isLogged: Boolean(jwt),
		login,
		logout,
		refreshToken
	})
}

export { useAuth };