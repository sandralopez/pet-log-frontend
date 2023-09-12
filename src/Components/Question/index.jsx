import { useState } from 'react';

function Question({ question, response }) {
    const [ showResponse, setShowResponse ] = useState(false);

    return (
        <>
            <div className="flex flex-col"> 
                <p className="font-medium text-xl cursor-pointer" onClick={ () => setShowResponse(!showResponse) }>{ question }</p>

                { showResponse && 
                    <div className="mt-4 mb-6"> 
                        { response }
                    </div>
                }
            </div>
        </>
    )
};

export { Question };