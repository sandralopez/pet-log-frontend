import axiosPrivate from './AxiosConfig/axiosPrivate';

const baseUrl = '/users/me/pets';

export const getPets = async () => {
    try {
        const { data } = await axiosPrivate.get(baseUrl);
        
        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const getPet = async (petId) => {
    try {
        const { data } = await axiosPrivate.get(`${baseUrl}/${petId}`);

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const addPet = async (newPetData) => {
    try {
        const { data } = await axiosPrivate.post(baseUrl, newPetData);

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const updatePet = async (petId, petData) => {
    try {
        const { data } = await axiosPrivate.patch(`${baseUrl}/${petId}`, petData);
        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const deletePet = async (petId) => {
    try {
        const { data } = await axiosPrivate.delete(`${baseUrl}/${petId}`);
        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}