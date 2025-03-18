import React from 'react';

const Card = ({ title, children }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <div>{children}</div>
        </div>
    );
};

export default Card;
