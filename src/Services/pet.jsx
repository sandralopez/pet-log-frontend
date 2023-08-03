import axiosPrivate from './AxiosConfig/axiosPrivate';

const baseUrl = '/users/me/pets';

export const getPets = async (jwt) => {
    try {
        const { data } = await axiosPrivate.get(baseUrl);
        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const getPet = async (jwt, petId) => {
    try {
        const { data } = await axiosPrivate.get(`${baseUrl}/${petId}`, {
            headers: { Authorization: `Bearer ${jwt}` }
        });

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const addPet = async (jwt, newPetData) => {
    try {
        const { data } = await axiosPrivate.post(baseUrl, newPetData, {
            headers: { Authorization: `Bearer ${jwt}` }
        });

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}
