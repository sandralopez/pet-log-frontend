import { useEffect, useContext, useRef } from 'react';
import { useAuth } from '../../CustomHooks/useAuth';
import { AuthContext } from '../../Context/AuthContext';
import axiosPrivate from '../../Services/AxiosConfig/axiosPrivate';

function AxiosPrivateInterceptor({ children }) {
	const { refreshToken, logout } = useAuth();
	const { jwt } = useContext(AuthContext);
	const jwtRef = useRef(jwt);

	useEffect(() => {
        jwtRef.current = jwt;
    }, [jwt]);

    useEffect(() => {
		const interceptorRequest = axiosPrivate.interceptors.request.use(
		  async (config) => {
		    if (jwtRef.current && !config?.sent) {
		      config.headers = {
		        ...config.headers,
		        authorization: `Bearer ${jwtRef.current}`,
		      };

		      config.withCredentials = true;
		    }

		    return config;
		  },
		  (error) => {
		  	Promise.reject(error)
		  }
		);

		const interceptorResponse = axiosPrivate.interceptors.response.use(
		  (response) => response,
		  async (error) => {
		    const config = error?.config;

		    if (error?.response?.status === 401 && !config?.sent) {
		      	config.sent = true;

		      	try {
			      	const newToken = await refreshToken();

			      	if (newToken) {
				        config.headers = {
				          ...config.headers,
				          authorization: `Bearer ${newToken}`,
				        };

			      		return axiosPrivate(config);
			      	}	
		      	}
		      	catch (error) {
		      		logout();
		      		return Promise.reject(error);
		      	}
		    }
		    
		    return Promise.reject(error);
		  }
		);

		return () =>{
			axiosPrivate.interceptors.response.eject(interceptorRequest);
			axiosPrivate.interceptors.response.eject(interceptorResponse);
		}
    }, []);

    return null;
}

export { AxiosPrivateInterceptor };
