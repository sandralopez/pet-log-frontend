import axiosPrivate from './AxiosConfig/axiosPrivate';

const baseUrl = `/comments`;

const addComment = async (comment) => {
    try {
        const { data } = await axiosPrivate.post(`${baseUrl}`, comment);

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export { addComment };