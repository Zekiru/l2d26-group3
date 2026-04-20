import React from 'react';

const TeamCard = ({ name, role, image }) => {
  return (
    // 'max-w-sm' sets the width, 'rounded-xl' is the border radius
    // 'shadow-lg' adds the card depth, 'p-6' is padding
    <div className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden p-6 m-4 text-center border border-gray-200">
      <img 
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500" 
        src={image} 
        alt={name} 
      />
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-blue-600 font-medium">{role}</p>
    </div>
  );
};

export default TeamCard;