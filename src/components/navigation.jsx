import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; // Import Bootstrap components
import "./Navigation.css"
export const Navigation = (props) => {
  // Example of dynamic navigation links (can be passed via props)
  const navLinks = [
    { href: "", label: "Home" },
    {
      href: "/about",
      label: "About Us",
      submenu: [
        { href: "why-us/", label: "Why Us" },
        { href: "/team", label: "Our Company" },
        { href: "faqs/", label: "FAQs" },
      ],
    },
    {
      href: "/blogs1/",
      label: "Blogs",
      submenu: [
        { href: "/academictips/", label: "Academic Tips" },
      ],
    },
    {
      href: "/our-guarantee/",
      label: "Guarantee",
      submenu: [
        { href: "/services", label: "Services" },
        { href: "/pricing", label: "Pricing" },
        { href: "/image", label: "Privacy Policy" },
        { href: "/image", label: "Money Back Guarantee" },
        { href: "/image", label: "Terms and Conditions" },
        { href: "/contact", label: "Plagiarism Policy" },
      ],
    },
    { href: "/testimonials", label: "Reviews" },
    { href: "/login", label: "LOGIN" },
  ];

  return (
    <>
    <section className=" py-4 footer">
    <div className="container">
        <div className="row">
           
            <div className="col-md-3 mb-3">
                <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                        <a href="mailto:support@academianerds.com" className="text-decoration-none text-dark">
                            <span className="mr-2">
                                <i className="far fa-envelope-open"></i>
                            </span>
                            <span>support@academianerds.com</span>
                        </a>
                    </li>
                </ul>
            </div>
          
            <div className="col-md-6 mb-3">
                <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                        <a href="tel:+17182816807" className="text-decoration-none text-dark">
                            <span className="mr-2">
                                <i className="fas fa-phone-alt"></i>
                            </span>
                            <span>Call/SMS: +1 (613) 801-1112</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-md-3 mb-3">
                <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                        <a href="https://academianerds.com/order" className="text-decoration-none text-dark">
                            <span className="mr-2">
                                <i className="far fa-bell"></i>
                            </span>
                            <span>Claim Discount</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section className="sticky-top bg-light">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-4 text-center text-md-left">
                <a href="https://academianerds.com">
                    <img src="https://academianerds.com/wp-content/uploads/2020/10/logo.png" alt="Logo" className="img-fluid" width="275" height="66" />
                </a>
            </div>
            
            <div className="col-4">
                <nav className="navbar navbar-expand-md navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="https://academianerds.com/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/professional-writing-services/" id="aboutDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us</a>
                                <div className="dropdown-menu" aria-labelledby="aboutDropdown">
                                    <a className="dropdown-item" href="/services">Why Us</a>
                                    <a className="dropdown-item" href="/team">Our Companysss</a>
                                    <a className="dropdown-item" href="/faqs/">FAQs</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/blogs1/" id="blogsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blogs</a>
                                <div className="dropdown-menu" aria-labelledby="blogsDropdown">
                                    <a className="dropdown-item dropdown-toggle" href="/academictips/" id="academicTipsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Academic Tips</a>
                                    <div className="dropdown-menu" aria-labelledby="academicTipsDropdown">
                                        <a className="dropdown-item" href="/how-to-order/">How To Order</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/our-guarantee/" id="guaranteeDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Guarantee</a>
                                <div className="dropdown-menu" aria-labelledby="guaranteeDropdown">
                                    <a className="dropdown-item" href="/services">Services</a>
                                    <a className="dropdown-item" href="/pricing">Pricing</a>
                                    <a className="dropdown-item" href="/image">Privacy Policy</a>
                                    <a className="dropdown-item" href="/image">Money Back Guarantee</a>
                                    <a className="dropdown-item" href="/image">Terms and Conditions</a>
                                    <a className="dropdown-item" href="/contact">Plagiarism Policy</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/testimonials">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">LOGIN</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="col-4 text-center text-md-right mb-1">
                <a href="/form" className="btn btn-primary login">PLACE ORDER</a>
            </div>
        </div>
    </div>
</section>

    </>
  );
};
