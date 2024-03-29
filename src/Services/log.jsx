import axiosPrivate from './AxiosConfig/axiosPrivate';

const baseUrl = '/users/me/pets';

export const getLogs = async (petId, filters = null, pagination = null) => {
    try {
        const params = {};

        if (pagination) {
            params.page = pagination.currentPage,
            params.size = pagination.size
        }

        if (filters) {
            params.tag = filters.tag,
            params.minDate = filters.minDate,
            params.maxDate = filters.maxDate
        }

        const { data } = await axiosPrivate.get(`${baseUrl}/${petId}/logs`, { params });
        
        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const getLogsByTag = async (petId, tagId, pagination = null) => {
    try {
        const params = {
            tag: tagId
        };

        if (pagination) {
            params.page = pagination.currentPage,
            params.size = pagination.size
        }

        const { data } = await axiosPrivate.get(`${baseUrl}/${petId}/logs`, { params });
  
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