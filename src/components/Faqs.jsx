import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const FAQSection = () => {
  const faqs = [
    {
      question: "What Are the Reasons for Trusting AcademiaNerds.com?",
      answer: "This is not the first year we have been in the essay industry, and we work hard to meet students’ academic requirements. We have passed a long way to become a leader, and our solid reputation is based on the years of professional and dedicated performance. We are absolutely devoted to providing customers with high-quality works and making sure that they always receive the best product within the set deadline."
    },
    {
      question: "Do You Have Any Discount Policies for Customers?",
      answer: "Yes, we offer our clients generous discounts. You can find more information on our discounts page."
    },
    {
      question: "If the Paper Does Not Follow My Recommendations and Requirements, What Should I Do?",
      answer: "We hire only writers who are professional and attentive enough to follow your requirements word for word and produce an original paper from scratch. As such, cases, when customers do not like our papers, are very rare. However, if you still feel that something important is missing in your work, we will be happy to revise your paper for free. Please, send us a complaint or place a free revision of your work."
    },
    {
        question: "What Are the Reasons for Trusting AcademiaNerds.com?",
        answer: "This is not the first year we have been in the essay industry, and we work hard to meet students’ academic requirements. We have passed a long way to become a leader, and our solid reputation is based on the years of professional and dedicated performance. We are absolutely devoted to providing customers with high-quality works and making sure that they always receive the best product within the set deadline."
      },
      {
        question: "Do You Have Any Discount Policies for Customers?",
        answer: "Yes, we offer our clients generous discounts. You can find more information on our discounts page."
      },
      {
        question: "If the Paper Does Not Follow My Recommendations and Requirements, What Should I Do?",
        answer: "We hire only writers who are professional and attentive enough to follow your requirements word for word and produce an original paper from scratch. As such, cases, when customers do not like our papers, are very rare. However, if you still feel that something important is missing in your work, we will be happy to revise your paper for free. Please, send us a complaint or place a free revision of your work."
      },
      {
        question: "What Are the Reasons for Trusting AcademiaNerds.com?",
        answer: "This is not the first year we have been in the essay industry, and we work hard to meet students’ academic requirements. We have passed a long way to become a leader, and our solid reputation is based on the years of professional and dedicated performance. We are absolutely devoted to providing customers with high-quality works and making sure that they always receive the best product within the set deadline."
      },
      {
        question: "Do You Have Any Discount Policies for Customers?",
        answer: "Yes, we offer our clients generous discounts. You can find more information on our discounts page."
      },
      {
        question: "If the Paper Does Not Follow My Recommendations and Requirements, What Should I Do?",
        answer: "We hire only writers who are professional and attentive enough to follow your requirements word for word and produce an original paper from scratch. As such, cases, when customers do not like our papers, are very rare. However, if you still feel that something important is missing in your work, we will be happy to revise your paper for free. Please, send us a complaint or place a free revision of your work."
      },
      
    // Add additional FAQs here as needed
  ];

  return (
    <div className="container my-4">
      <h3 className="text-center mb-4">Frequently Asked Questions</h3>
      <div className="row">
        <div className="col-md-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                <h5>{faq.question}</h5>
              </div>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
