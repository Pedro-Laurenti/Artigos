"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className='my-4 mt-40 flex flex-col items-center justify-center text-center'>
            <div className='flex flex-col justify-center'>
                <h2 className='text-2xl'>Ops!</h2>
                <h3>Estamos enfrentando alguns problemas...</h3>

                <button
                    className='mt-2 bg-gradient-to-br from-purple-500 to-red-500 p-2.5 text-white'
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Recarregar
                </button>
            </div>
        </div>
    );
}
