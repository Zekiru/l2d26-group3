import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm opacity-75">
          &copy; {new Date().getFullYear()} L2D26 Group 3. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;