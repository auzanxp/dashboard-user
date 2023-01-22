import React from 'react';

function Alert({ type, message, handleClick }) {
    const clasName = [];
    let status;

    if (type === 'success') {
        status = 'Berhasil';
        clasName.push('bg-green-500/80 border-l-green-800');
    }
    if (type === 'danger') {
        status = 'Gagal';
        clasName.push('bg-red-500/80 border-l-red-800');
    }

    return (
        <div
            className={`${clasName.join(
                '',
            )} fixed bottom-8 left-0 text-white font-light border-l-8 w-fit h-20 px-4 py-4 transition duration-300 animate-pulse`}
        >
            <div className="font-medium capitalize text-md">{status}</div>
            <span className="text-xs font-light capitalize">{message}</span>

            <div
                onClick={handleClick}
                className="absolute top-0 flex items-center justify-center w-5 h-5 font-semibold transition duration-200 rounded-full cursor-pointer right-1 hover:bg-black/10"
            >
                x
            </div>
        </div>
    );
}

export default Alert;
