import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEnvelope, faPhoneAlt, faBell } from '@fortawesome/free-solid-svg-icons'; // Import needed icons

const Navigation = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container-fluid mx-auto flex justify-between items-center py-4" style={{ backgroundColor: '#29A69A', color: 'white' }}>
        {/* Left Section */}
        <div className="flex space-x-3">
          <a href="mailto:support@academianerds.com" className="flex items-center hover:text-yellow-500">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <span>support@academianerds.com</span>
          </a>
          <a href="tel:+17182816807" className="flex items-center hover:text-yellow-500">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
            <span>Call/SMS: +1 (613)801-1112</span>
          </a>
        </div>

        {/* Right Section */}
        <a href="https://academianerds.com/order" className="flex items-center hover:text-yellow-500">
          <FontAwesomeIcon icon={faBell} className="mr-2" />
          <span>Claim Discount</span>
        </a>
      </div>

      
    </header>
  );
};

export default Navigation;
