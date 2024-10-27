import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="loader border-8 border-gray-200 border-t-8 border-t-orange-300 rounded-full w-24 h-24 animate-spin"></div>
        </div>
    );
};

export default Loader;
