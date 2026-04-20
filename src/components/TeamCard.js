import React from 'react';

const TeamCard = ({ name, role, image, bio }) => {
  return (
    // bg-[#FCF1DE] is "Old Lace"
    // border-[#FECB78] is "Apricot Cream"
    <div className="bg-[#FCF1DE] rounded-2xl shadow-md p-6 flex flex-col items-center border border-[#FECB78] w-64">
      
      {/* Profile Image with Ocean Twilight border */}
      <div className="w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-[#2E41AF]"> 
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      
      {/* Title in Ubuntu (we will add font in next step) */}
      <h3 className="text-2xl font-bold text-[#2E41AF]">{name}</h3>
      
      {/* Role in Coral Glow */}
      <p className="text-[#F68660] font-semibold mb-3">{role}</p>
      
      {/* Bio in Coffee Bean */}
      <p className="text-[#6D5240] text-sm italic text-center">"{bio}"</p>
    </div>
  );
};

export default TeamCard;