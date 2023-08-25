import axiosPublic from './AxiosConfig/axiosPublic';

const baseUrl = `/comments`;

const addComment = async (comment) => {
  console.log(comment)
    try {
        const { data } = await axiosPublic.post(`${baseUrl}`, comment);

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export { addComment };