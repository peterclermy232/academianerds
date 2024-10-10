import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import PriceCalculator from "./components/PriceCalculato";
import OrderForm from "./components/OrderForm";
import SignUp from "./components/Signup";
import HandlePrice from "./components/handlePrice";
import Login from "./components/Login";
import FAQSection from "./components/Faqs";
import { Image } from "./components/image";
import LoginForm from "./components/Login";
import ResetPasswordForm from "./components/ResetPassword";
import OrderComponen from "./components/OrderComponen";
import OrderFormComponent from "./components/FormsComponents";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation /> {/* This will always stay visible */}
        {/* <Features /> */}
        <Routes>
          <Route path="/" element={<Header data={landingPageData.Header} />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery data={landingPageData.Gallery} />} />
          <Route path="/testimonials" element={<Testimonials data={landingPageData.Testimonials} />} />
          <Route path="/team" element={<Team data={landingPageData.Team} />} />
          <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />
          <Route path="/orderform" element={<OrderForm />} />
          <Route path="/handleprice" element={<HandlePrice />} />
          <Route path="/pricecalculator" element={<PriceCalculator />} />
          <Route path="/image" element={<Image  data={landingPageData.Image}/>} />
          <Route path="/reset" element={<ResetPasswordForm />} />
          <Route path="/form" element={<OrderFormComponent />} />
          {/* <Route path="/faqs" element={<FAQSection />} /> */}
          <Route path="/faqs" element={<FAQSection />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
