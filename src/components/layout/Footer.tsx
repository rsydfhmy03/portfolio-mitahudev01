import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-500 border-t border-gray-800">
      <div className="container px-4 mx-auto">
        <p>&copy; {new Date().getFullYear()} Fahmy Rosyadi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;