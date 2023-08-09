import axiosPrivate from './AxiosConfig/axiosPrivate';

const baseUrl = '/users';

export const getUser = async () => {
    try {
        const { data } = await axiosPrivate.get(`${baseUrl}/me`);
        
        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const addUser = async (newUserData) => {
    try {
        const { data } = await axiosPrivate.post(baseUrl, newUserData);

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const updateUser = async (userData) => {
    try {
        const { data } = await axiosPrivate.patch(`${baseUrl}/me`, userData);

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const deleteUser = async () => {
    try {
        const { data } = await axiosPrivate.delete(`${baseUrl}/me`);
        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}