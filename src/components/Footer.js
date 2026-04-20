import React from 'react';

const Footer = () => {
  return (
    // bg-[#6D5240] is Coffee Bean
    // text-[#FCF1DE] is Old Lace
    <footer className="bg-[#6D5240] text-[#FCF1DE] py-10 mt-auto font-sans">
      <div className="container mx-auto text-center px-4">
        {/* Title using Ubuntu font style */}
        <h4 className="text-xl font-bold mb-2 tracking-wide">L2D26 Group 3</h4>
        
        <p className="text-sm opacity-90">
          &copy; {new Date().getFullYear()} Restaurant Finder Project. All rights reserved.
        </p>
        
        {/* Links using Apricot Cream for hover effect */}
        <div className="mt-4 space-x-6">
          <a href="#" className="text-sm hover:text-[#FECB78] transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="text-sm hover:text-[#FECB78] transition-colors duration-300">Terms of Service</a>
          <a href="#" className="text-sm hover:text-[#FECB78] transition-colors duration-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;