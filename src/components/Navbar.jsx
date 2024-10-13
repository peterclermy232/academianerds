import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEnvelope, faPhoneAlt, faBell } from '@fortawesome/free-solid-svg-icons'; 

const Navbar = () => {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);
  const [isGuaranteeOpen, setIsGuaranteeOpen] = useState(false);

  // Handle closing submenu with delay to avoid quick disappearance
  const handleClose = (setStateFn) => {
    setTimeout(() => {
      setStateFn(false);
    }, 1000); // Set delay to allow for smoother mouse movements
  };

  return (
    <section className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-fluid mx-auto flex justify-between items-center" style={{ marginLeft: '170px', fontSize: '15px' }}>
        {/* Logo */}
        <div>
          <a href="" style={{ marginRight: '170px', fontSize: '10px' }}>
            <img
              src="https://academianerds.com/wp-content/uploads/2020/10/logo.png"
              alt="Academia Nerds"
              width="275"
              height="66"
            />
          </a>
        </div>

        {/* Menu */}
        <nav className="flex space-x-4">
          <a href="" className="hover:text-blue-600 mr-9">
            Home
          </a>

          {/* About Us Dropdown */}
          <div
            onMouseEnter={() => setIsAboutUsOpen(true)}
            onMouseLeave={() => handleClose(setIsAboutUsOpen)}
            className="relative"
          >
            <button className="hover:text-blue-600 mr-9"><a href="/about"> About Us</a> <FontAwesomeIcon icon={faChevronDown} className="ml-1" /></button>
            {isAboutUsOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md" onMouseEnter={() => setIsAboutUsOpen(true)} onMouseLeave={() => handleClose(setIsAboutUsOpen)}>
                <li>
                  <a
                    href="/why-us"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Why Us
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our Company
                  </a>
                </li>
                <li>
                  <a
                    href="/faqs"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Blogs Dropdown */}
          <div
            onMouseEnter={() => setIsBlogsOpen(true)}
            onMouseLeave={() => handleClose(setIsBlogsOpen)}
            className="relative"
          >
            <button className="hover:text-blue-600 mr-9">Blogs  <FontAwesomeIcon icon={faChevronDown} className="ml-1" /></button>
            {isBlogsOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md" onMouseEnter={() => setIsBlogsOpen(true)} onMouseLeave={() => handleClose(setIsBlogsOpen)}>
                <li>
                  <a
                    href="/image"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Academic Tips
                  </a>
                  <ul>
                  <li>
                  <a
                    href="/gallery"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    How To Order
                  </a>
                </li>
                  </ul>
                </li>
                
              </ul>
            )}
          </div>

          {/* Guarantee Dropdown */}
          <div
            onMouseEnter={() => setIsGuaranteeOpen(true)}
            onMouseLeave={() => handleClose(setIsGuaranteeOpen)}
            className="relative"
          >
            <button className="hover:text-blue-600 mr-9">Guarantee  <FontAwesomeIcon icon={faChevronDown} className="ml-1" /></button>
            {isGuaranteeOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md" onMouseEnter={() => setIsGuaranteeOpen(true)} onMouseLeave={() => handleClose(setIsGuaranteeOpen)}>
                <li>
                  <a
                    href="/services"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/handleprice"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            )}
          </div>

          <a href="/testimonials" className="hover:text-blue-600 mr-9">
            Reviews
          </a>
          <a href="/login" className="hover:text-blue-600 mr-9">
            LOGIN
          </a>
          <div className="elementor-widget-container ml-3">
      <div className="elementor-button-wrapper ml-9">
        <a
          className="bg-blue-600 text-white py-1 px-2 rounded-lg hover:bg-blue-700 transition duration-300"
          href="/orderform"
        >
          <span className="elementor-button-content-wrapper">
            <span className="elementor-button-text">PLACE ORDER</span>
          </span>
        </a>
      </div>
    </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
