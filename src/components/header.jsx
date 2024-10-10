import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBookmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons';
import ReviewsSection from "./Review";
import HomeComponent from "./Home";
//import { Features } from "./components/features";
import { Features } from "./features";
export const Header = (props) => {
  return (
    <header id="header">
      
      <HomeComponent />
      <Features />
     
      
{/* <section class="container-fluid" style={{backgroundColor: '#1d1f21',color: 'wheat'}}>

  <div class="row">

  <h1 className="text-center">All your paper needs covered 24/7 by Experts at all times</h1>
   
    <div className="col-12 col-md-3">
      <ul className="list-unstyled">
        <li className="mb-2">
          <a href="https://academianerds.com/order" class="text-decoration-none text-white">
          <FontAwesomeIcon icon={faCheckCircle} style={{Color: '#FC4910'}} /> Nursing
          </a>
        </li>
        <li className="mb-2">
          <a href="https://academianerds.com/order" class="text-decoration-none text-white">
          <FontAwesomeIcon icon={faCheckCircle} style={{backgroundColor: '#FC4910'}} /> Humanities
          </a>
        </li>
        <li>
          <a href="https://academianerds.com/order" class="text-decoration-none text-white">
          <FontAwesomeIcon icon={faCheckCircle} style={{backgroundColor: '#FC4910'}} /> Case Study
          </a>
        </li>
      </ul>
    </div>

    
    <div className="col-12 col-md-3">
      <ul className="list-unstyled">
        <li className="mb-2">
          <a href="https://academianerds.com/order" class="text-decoration-none text-white">
          <FontAwesomeIcon icon={faCheckCircle} style={{backgroundColor: '#FC4910'}} /> Economics
          </a>
        </li>
        <li className="mb-2">
          <a href="https://academianerds.com/order" class="text-decoration-none text-white">
          <FontAwesomeIcon icon={faCheckCircle} style={{backgroundColor: '#FC4910'}} /> Medical Sciences
          </a>
        </li>
        <li>
          <a href="https://academianerds.com/order" class="text-decoration-none text-white">
          <FontAwesomeIcon icon={faCheck} style={{backgroundColor: '#FC4910'}} /> Marketing Essays
          </a>
        </li>
      </ul>
    </div>

    
    <div className="col-12 col-md-3">
      <ul className="list-unstyled">
        <li class="mb-2">
          <a href="https://academianerds.com/order" class="text-decoration-none text-white">
          <FontAwesomeIcon icon={faCheckCircle} style={{backgroundColor: '#FC4910'}} /> Political Science
          </a>
        </li>
        <li className="mb-2">
          <a href="https://academianerds.com/order" class="text-decoration-none text-white">
          <FontAwesomeIcon icon={faCheckCircle} style={{backgroundColor: '#FC4910'}} /> Management
          </a>
        </li>
        <li>
          <a href="http://Biology%20homework%20help" class="text-decoration-none text-white">
          <FontAwesomeIcon icon={faCheck}  style={{backgroundColor: '#FC4910'}}/> Biology Homework Help
          </a>
        </li>
      </ul>
    </div>

    
    <div className="col-12 col-md-3">
      <ul className="list-unstyled">
        <li className="mb-2">
          <a href="https://academianerds.com/order" class="text-decoration-none text-white">
          <FontAwesomeIcon icon={faCheckCircle} style={{backgroundColor: '#FC4910'}} /> Social Studies
          </a>
        </li>
        <li className="mb-2">
          <a href="https://academianerds.com/order" class="text-decoration-none text-white">
          <FontAwesomeIcon icon={faCheckCircle} style={{backgroundColor: '#FC4910'}} />  Psychology Studies
          </a>
        </li>
        <li>
          <a href="https://academianerds.com/order" class="text-decoration-none text-white">
          <FontAwesomeIcon icon={faCheck} style={{backgroundColor: '#FC4910'}} /> Nursing Homework Help
          </a>
        </li>
      </ul>
    </div>
  </div>
</section> */}
{/* <HomeComponent /> */}
{/* <ReviewsSection /> */}




    </header>
  );
};
