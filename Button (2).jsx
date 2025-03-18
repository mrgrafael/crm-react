import React from 'react';

const Button = ({ children, onClick, variant = 'primary' }) => {
    return (
        <button 
            className={`px-4 py-2 rounded ${variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
