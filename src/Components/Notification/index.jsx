import { useState, useEffect } from 'react';
import { BellIcon } from '@heroicons/react/24/solid';
import { getNotifications } from '../../Services/user';

const Notification = () => {
    const [notifications, setNotifications] = useState([]);
    const [isInThreeDays, setIsInThreeDays] = useState(false);
    const [isInOneWeek, setIsInOneWeek] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() =>{
      async function getNotificationsService() {
        try {
          const response = await getNotifications();

          if (response.status === "ok") {
            setNotifications([
                ...response.data.threeDays.map((notification) => ({ ...notification, isInThreeDays: true, isInOneWeek: false })),
                ...response.data.oneWeek.map((notification) => ({ ...notification, isInThreeDays: false, isInOneWeek: true }))
            ]);

            response.data.threeDays.map((notification) => {
                if (!notification.threeDaysNotified) {
                    setIsInThreeDays(true);
                }
            });

            response.data.oneWeek.map((notification) => {
                if (!notification.oneWeekNotified) {
                    setIsInOneWeek(true);
                }
            });
          }
          else {
            throw Error('Ha ocurrido un error al obtener las notificaciones');
          }
        }
        catch(error) {
            throw Error('Ha ocurrido un error al obtener las notificaciones');
        }
      }

      getNotificationsService();
    }, []);

    return (
        <div>
            <BellIcon 
                onClick={() => setShowNotifications(!showNotifications)}
                className={`h-6 w-6 cursor-pointer
                                        ${isInThreeDays 
                                            ? "text-red-500 dark: text-red-300" 
                                            : isInOneWeek 
                                                ? "text-amber-500 dark: text-amber-300" 
                                                : "text-gray-900 dark:text-slate-300"} `} />
            {
                showNotifications && 
                <ul className="absolute w-60 rounded-xl shadow-lg dark:shadow-slate-600 dark:bg-slate-600 p-2 mr-6 mt-8 divide-y dark: divide-slate-400">
                    {
                        notifications?.map((notification) => (
                            <li key={notification._id} className="p-2 flex flex-col text-sm">
                                <div className="flex flex-row items-center">
                                    <div className={`rounded-full h-4 w-4 mr-2
                                                                ${notification.isInOneWeek && !notification.oneWeekNotified
                                                                    ? "bg-amber-500 dark: bg-amber-300"
                                                                    : notification.isInThreeDays && !notification.threeDaysNotified
                                                                            ? "bg-red-500 dark: bg-red-300"
                                                                            : "hidden"} `}>                                            
                                    </div>
                                    <span className="font-bold">Recordatorio</span>
                                </div>
                                <span className="font-medium">Mascota:</span>
                                <span className="font-light">{notification.petName}</span>
                                <span className="font-medium">Asunto:</span>
                                <span className="font-light">{notification.subject}</span>
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    );
}

export { Notification };
