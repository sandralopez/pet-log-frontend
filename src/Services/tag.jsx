import axiosPrivate from './AxiosConfig/axiosPrivate';

const baseUrl = '/users/me/tags';

export const getTags = async () => {
    try {
        const { data } = await axiosPrivate.get(baseUrl);

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const getTag = async (tagId) => {
    try {
        const { data } = await axiosPrivate.get(`${baseUrl}/${tagId}`);

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const addTag = async (newTagData) => {
    try {
        const { data } = await axiosPrivate.post(baseUrl, newTagData);

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const deleteTag = async (tagId) => {
    try {
        const { data } = await axiosPrivate.delete(`${baseUrl}/${tagId}`);
        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}