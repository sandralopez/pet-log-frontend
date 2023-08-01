import { useCallback, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { loginService } from '../Services/auth';

const useAuth = () => {
	const { jwt, setJwt } = useContext(AuthContext);

	const login = useCallback((credentials) => {
		loginService(credentials)
			.then(({token, user}) => {
				window.sessionStorage.setItem('jwt', token);

				setJwt(token)
			})
			.catch(err => {
				window.sessionStorage.removeItem('jwt');
			});
	}, [setJwt]);

	const logout = useCallback(() => {
		window.sessionStorage.removeItem('jwt');
		setJwt(null);
	}, [setJwt]);

	return ({
		isLogged: Boolean(jwt),
		login,
		logout
	})


}

export { useAuth };