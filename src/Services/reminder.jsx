import axiosPrivate from './AxiosConfig/axiosPrivate';

const baseUrl = '/users/me';

export const getAllReminders = async () => {
    try {
        const { data } = await axiosPrivate.get(`${baseUrl}/pets/reminders`);
        
        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const getReminder = async (petId, reminderId) => {
    try {
        const { data } = await axiosPrivate.get(`${baseUrl}/pets/${petId}/reminders/${reminderId}`);

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const addReminder = async (newReminderData) => {
    try {
        const { petId } = newReminderData;

        const { data } = await axiosPrivate.post(`${baseUrl}/pets/${petId}/reminders`, newReminderData);

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const updateReminder = async (reminderId, reminderData) => {
    try {
        const { petId } = reminderData;

        const { data } = await axiosPrivate.patch(`${baseUrl}/pets/${petId}/reminders/${reminderId}`, reminderData);

        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}

export const deleteReminder = async (petId, reminderId) => {
    try {
        const { data } = await axiosPrivate.delete(`${baseUrl}/pets/${petId}/reminders/${reminderId}`);
        
        return { status: 'ok', data: data };
    }
    catch(error) {
        return { status: 'error', data: error.response };
    }
}