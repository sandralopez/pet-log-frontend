import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const ColorMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } 
        else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div>
            { isDarkMode ?                 
                <SunIcon
                    onClick= { () => setIsDarkMode(!isDarkMode)}
                    className="h-6 w-6 ml-2 cursor-pointer text-gray-900 dark:text-slate-300"
                />
                        :
                <MoonIcon
                    onClick= { () => setIsDarkMode(!isDarkMode)}
                    className="h-6 w-6 ml-2 cursor-pointer text-gray-900 dark:text-slate-300"
                />      
            }
        </div>
    );
}

export { ColorMode };
