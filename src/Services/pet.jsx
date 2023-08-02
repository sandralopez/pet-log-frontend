import axios from 'axios';
import { BASE_URL } from './config';

const baseUrl = `${BASE_URL}/users/me/pets`;

export const getPets = async (jwt) => {
    try {
        const { data } = await axios.get(baseUrl, {
            headers: { Authorization: `Bearer ${jwt}` }
        });

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const getPet = async (jwt, petId) => {
    try {
        const { data } = await axios.get(`${baseUrl}/${petId}`, {
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
        const { data } = await axios.post(baseUrl, newPetData, {
            headers: { Authorization: `Bearer ${jwt}` }
        });

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}
