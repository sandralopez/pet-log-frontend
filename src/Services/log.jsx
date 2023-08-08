import axiosPrivate from './AxiosConfig/axiosPrivate';

const baseUrl = '/users/me/pets';

export const getLogs = async (petId) => {
    try {
        const { data } = await axiosPrivate.get(`${baseUrl}/${petId}/logs`);
        
        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const getLog = async (petId, logId) => {
    try {
        const { data } = await axiosPrivate.get(`${baseUrl}/${petId}/logs/${logId}`);

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const addLog = async (newLogData) => {
    try {
        const { petId } = newLogData;

        const { data } = await axiosPrivate.post(`${baseUrl}/${petId}/logs`, newLogData);

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const updateLog = async (logId, logData) => {
    try {
        const { petId } = logData;
        const { data } = await axiosPrivate.patch(`${baseUrl}/${petId}/logs/${logId}`, logData);
        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const deleteLog = async (logId) => {
    try {
        const { petId } = logData;
        const { data } = await axiosPrivate.delete(`${baseUrl}/${petId}/logs/${logId}`);
        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}