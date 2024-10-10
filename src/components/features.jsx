import React from "react";
import "./features.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBookmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Features = (props) => {
  const iconStyle = { color: '#FC4910' };
  const liststyle = { color: '#F94A10'}
  return (
    <div id="features" classNameName="text-center">
      <section className="container-fluid text-center my-5 section2">
  <h6 className="feature" style={{fontSize: '30px'}}>All your paper needs covered 24/7 by Experts at all times</h6>
  <div className="row my-4">
      <div className="col-md-3">
        <h5>Nursing & Health</h5>
        <ul className="list-unstyled d-flex flex-column">
          <li className="mb-3">
            <a href="https://academianerds.com/order" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
              <span className="ml-2">Nursing</span>
            </a>
          </li>
          <li className="mb-3">
            <a href="https://academianerds.com/order" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
              <span className="ml-2">Medical Sciences</span>
            </a>
          </li>
          <li className="mb-3">
            <a href="https://academianerds.com/order" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              <span className="ml-2">Nursing Homework Help</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="col-md-3">
        <h5>Humanities & Social Sciences</h5>
        <ul className="list-unstyled d-flex flex-column">
          <li className="mb-3">
            <a href="https://academianerds.com/order" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
              <span className="ml-2">Humanities</span>
            </a>
          </li>
          <li className="mb-3">
            <a href="https://academianerds.com/order" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
              <span className="ml-2">Social Studies</span>
            </a>
          </li>
          <li className="mb-3">
            <a href="https://academianerds.com/order" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
              <span className="ml-2">Psychology Studies</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="col-md-3">
        <h5>Business & Economics</h5>
        <ul className="list-unstyled d-flex flex-column">
          <li className="mb-3">
            <a href="https://academianerds.com/order" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
              <span className="ml-2">Economics</span>
            </a>
          </li>
          <li className="mb-3">
            <a href="https://academianerds.com/order" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
              <span className="ml-2">Marketing Essays</span>
            </a>
          </li>
          <li className="mb-3">
            <a href="https://academianerds.com/order" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
              <span className="ml-2">Management</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="col-md-3">
        <h5>Political & Case Studies</h5>
        <ul className="list-unstyled d-flex flex-column">
          <li className="mb-3">
            <a href="https://academianerds.com/order" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
              <span className="ml-2">Political Science</span>
            </a>
          </li>
          <li className="mb-3">
            <a href="https://academianerds.com/order" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
              <span className="ml-2">Case Study</span>
            </a>
          </li>
          <li className="mb-3">
            <a href="http://Biology%20homework%20help" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              <span className="ml-2">List Item</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
</section>

<section className="container text-center my-5">
  <div className="row mb-4">
      <div className="col-md-3">
          <blockquote className="blockquote">
              <p className="mb-0">Check Out Our Most Recent Reviews</p>
          </blockquote>
      </div>
      <div className="col-md-9">
          <div id="carouselReviews" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <div className="testimonial">
                          <div className="testimonial-header d-flex align-items-center">
                              <img src="https://academianerds.com/wp-content/uploads/2020/10/1901138.jpg" alt="Customer #123567" className="rounded-circle" width="60" />
                              <cite className="ml-3">
                                  <span className="font-weight-bold">Customer #123567</span>
                                  <div className="star-rating">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="far fa-star"></i>
                                  </div>
                                  <span className="d-block">USA, California</span>
                              </cite>
                          </div>
                          <div className="testimonial-content">
                              <p>Initially, school and education were burdens, but thanks to academianerds.com, everything has changed.</p>
                          </div>
                      </div>
                  </div>
                  <div className="carousel-item">
                      <div className="testimonial">
                          <div className="testimonial-header d-flex align-items-center">
                              <img src="https://academianerds.com/wp-content/uploads/2020/10/2430099.jpg" alt="Customer #113454" className="rounded-circle" width="60" />
                              <cite className="ml-3">
                                  <span className="font-weight-bold">Customer #113454</span>
                                  <div className="star-rating">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="far fa-star"></i>
                                  </div>
                                  <span className="d-block">USA, Washington</span>
                              </cite>
                          </div>
                          <div className="testimonial-content">
                              <p>Thanks for the great service. The platform has definitely transformed my academic experience.</p>
                          </div>
                      </div>
                  </div>
                  <div className="carousel-item">
                      <div className="testimonial">
                          <div className="testimonial-header d-flex align-items-center">
                              <img src="https://academianerds.com/wp-content/uploads/2020/10/143618.jpg" alt="Customer #132232" className="rounded-circle" width="60" />
                              <cite className="ml-3">
                                  <span className="font-weight-bold">Customer #132232</span>
                                  <div className="star-rating">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                  </div>
                                  <span className="d-block">Australia, Victoria</span>
                              </cite>
                          </div>
                          <div className="testimonial-content">
                              <p>"An excellent mark for my essay means that you, guys, wrote an outstanding paper! Thanks, thanks, thanks."</p>
                          </div>
                      </div>
                  </div>
              </div>
              <a className="carousel-control-prev" href="#carouselReviews" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselReviews" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
              </a>
          </div>
      </div>
  </div>
</section>
<section className="container text-center my-5">
  <div className="row">
      <div className="col-12">
          <h3 className="font-weight-bold">Why Choose Academia Nerds</h3>
          <p>Check out the benefits of our paper writing service</p>
      </div>
  </div>
</section>

<section className="container my-5">
  <div className="row text-center">
      <div className="col-md-3">
          <p><img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose1.png" alt="" width="29" height="29" className="align-left" />In-depth research<br />and analysis</p>
      </div>
      <div className="col-md-3">
          <p><img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose3.png" alt="" width="30" height="30" className="align-left" />High-Quality Writing<br />100% ORIGINAL papers</p>
      </div>
      <div className="col-md-3">
          <p><img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose5.png" alt="" width="30" height="34" className="align-left" /><a href="/our-guarantee">Privacy</a><br />Guarantee</p>
      </div>
      <div className="col-md-3">
          <p><img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose7.png" alt="" width="33" height="33" className="align-left" />24/7 Customer<br />support</p>
      </div>
  </div>

  <div className="row text-center mt-4">
      <div className="col-md-3">
          <p><img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose2.png" alt="" width="33" height="28" className="align-left" />Any Format<br />of writing</p>
      </div>
      <div className="col-md-3">
          <p><img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose4.png" alt="" width="29" height="34" className="align-left" />Only up-to-date sources<br />of information</p>
      </div>
      <div className="col-md-3">
          <p><img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose6.png" alt="" width="28" height="33" className="align-left" />Direct Contact with<br />a Writer</p>
      </div>
      <div className="col-md-3">
          <p><img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose8.png" alt="" width="32" height="32" className="align-left" />On-time and<br />Urgent Delivery</p>
      </div>
  </div>
</section>


{/* <section className="container my-5">
  <div className="row text-center">
      <div className="col-md-3">
          <p>
              <img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose1.png" alt="" width="29" height="29" className="align-left" />
              In-depth research<br />and analysis
          </p>
      </div>
      <div className="col-md-3">
          <p>
              <img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose3.png" alt="" width="30" height="30" className="align-left" />
              High-Quality Writing<br />100% ORIGINAL papers
          </p>
      </div>
      <div className="col-md-3">
          <p>
              <img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose5.png" alt="" width="30" height="34" className="align-left" />
              <a href="/our-guarantee">Privacy</a><br />Guarantee
          </p>
      </div>
      <div className="col-md-3">
          <p>
              <img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose7.png" alt="" width="33" height="33" className="align-left" />
              24/7 Customer<br />support
          </p>
      </div>
  </div>

  <div className="row text-center mt-4">
      <div className="col-md-3">
          <p>
              <img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose2.png" alt="" width="33" height="28" className="align-left" />
              Any Format<br/>of writing
          </p>
      </div>
      <div className="col-md-3">
          <p>
              <img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose4.png" alt="" width="29" height="34" className="align-left" />
              Only up-to-date sources<br/>of information
          </p>
      </div>
      <div className="col-md-3">
          <p>
              <img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose6.png" alt="" width="28" height="33" className="align-left" />
              Direct Contact with<br />a Writer
          </p>
      </div>
      <div className="col-md-3">
          <p>
              <img src="https://assignwriters.com/wp-content/uploads/2020/06/w-choose8.png" alt="" width="32" height="32" className="align-left" />
              On-time and<br />Urgent Delivery
          </p>
      </div>
  </div>
</section> */}


<section className="container my-5">
  <div className="row">
      <div className="col-12">
          {/* <!-- Spacer (Optional, you can adjust height with CSS) --> */}
          <div style={{height: '50px'}}></div>
      </div>
  </div>
</section>

<section className="container-fluid my-5 section3">
  <div className="row">
      <div className="col-12 text-center mb-4">
          <h4>Academianerds.com<br />Discount Program</h4>
          <p>As a college student, there are always financial challenges that come with it. We have various discount programs as below. Further, we have a coupon code program every month for students.</p>
      </div>
  </div>
  <div className="row text-center">
      <div className="col-md-4">
          <div className="counter">
              <div className="counter-title">for more than 30 pages</div>
              <div className="counter-number">5% OFF</div>
          </div>
      </div>
      <div className="col-md-4">
          <div className="counter">
              <div className="counter-title">for more than 50 pages</div>
              <div className="counter-number">10% OFF</div>
          </div>
      </div>
      <div className="col-md-4">
          <div className="counter">
              <div className="counter-title">for more than 100 pages</div>
              <div className="counter-number">15% OFF</div>
          </div>
      </div>
  </div>
  <div className="row text-center my-4">
      <div className="col-12">
          <a className="btn btn-primary" href="https://academianerds.com/order">
              <i className="far fa-copy"></i> Place Order
          </a>
      </div>
  </div>
  <div className="row">
      <div className="col-md-4 text-center mb-4">
          <div className="image-box">
              <img src="https://assignwriters.com/wp-content/uploads/2020/06/moblile-block-1.png" alt="" />
              <h6>Place your order</h6>
              <p>Fill in the order form and provide all details of your assignment.</p>
          </div>
      </div>
      <div className="col-md-4 text-center mb-4">
          <div className="image-box">
              <img src="https://assignwriters.com/wp-content/uploads/2020/06/moblile-block-2.png" alt="" />
              <h6>Proceed with the payment</h6>
              <p>Choose the payment system that suits you most.</p>
          </div>
      </div>
      <div className="col-md-4 text-center mb-4">
          <div className="image-box">
              <img src="https://assignwriters.com/wp-content/uploads/2020/06/moblile-block-3.png" alt="" />
              <h6>Receive the final file</h6>
              <p>Once your paper is ready, we will email it to you.</p>
          </div>
      </div>
  </div>
</section>

{/* <!-- Include Bootstrap CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
next */}
<section className="container my-5">
  <div className="row">
      <div className="col-12 text-center mb-4">
          <h2>The Most Affordable Assignment Writing Service</h2>
      </div>
      <div className="col-12">
          <p><strong>Academia Nerds</strong> provides affordable and top-quality assignment writing services to our clients. Our experts are committed to high-quality work, benefiting students interested in having their papers written. <strong>Academia Nerds</strong> offers services in essay writing, discussion posts, term papers, research papers, presentations of all forms, team assignments, case studies, speech writing, capstone projects, Q&A, online classNamees, online quizzes, and exams.</p>
          <p>Our writing experts have extensive knowledge and expertise developed over 10+ years in their fields.</p>
          <p><strong>Academia Nerds</strong> assignment writing services are distinguished in the writing industry. We have:</p>
          <ul>
              <li>Exceptional online writing customer services</li>
              <li>Top-notch quality papers and scores</li>
              <li>Flexibility in writing and deadlines as per client needs</li>
              <li>Affordable pricing in writing services</li>
              <li><a href="/plagiarism-policy">No-plagiarism policy</a></li>
              <li>Confidentiality</li>
              <li>Timely delivery of ordered assignments</li>
          </ul>
          <p>Academia Nerds has experts in all fields of study who are ready to offer their services at all times.</p>
          <p>Academianerds.com is proud to have served many clients who have given their reviews. You can check out our reviews <strong><a href="/order/writer/testimonials">here</a>.</strong> The papers are properly edited to offer a succinct and comprehensive final product. Our affordable paper writing services and support have been distinguished over the years, enabling us to follow up with clients who refer others to our website.</p>
          <p>Additionally, our services include free revisions of papers as per professors’ feedback, tailoring them to client requirements. This makes it possible to produce some of the best customized assignments that meet our clients’ needs. Our writing experts undergo periodic rigorous training in their fields and in writing in general to keep up with the dynamic writing world.</p>
      </div>
  </div>
</section>

{/* <!-- Include Bootstrap CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

next */}
<section className="container my-5">
  <div className="row">
      <div className="col-12 text-center mb-4">
          <h2>Why Choose Our Paper Writing Service</h2>
      </div>
      <div className="col-12">
          <p><strong>Academia Nerds</strong> offers affordable and high-quality assignment writing help in different levels and fields of academia. Our prices are tailored to ensure client satisfaction while providing pocket-friendly services. We understand that, as a student, you might be working or engaged in other activities such as volunteering. <strong>Academia Nerds</strong> is here to help students in such challenging situations. Our plagiarism-free papers are guaranteed to score the highest marks. As our client, you will benefit from exceptional writing services, including:</p>
      </div>
  </div>
  
  <div className="row">
      <div className="col-md-6">
          <ul className="list-unstyled">
              <li className="mb-3">
                  <i className="fas fa-check-circle"></i> 
                  Every piece of our work is professionally prepared while a team of editors ensures quality by proofreading and reviewing the paper instructions to ensure grammar and formatting are adhered to before delivery.
              </li>
              <li className="mb-3">
                  <i className="fas fa-check-circle"></i> 
                  All <span style={{whiteSpace:'normal'}}>Academianerds</span>.com assignments are constantly reviewed for plagiarism to ensure originality, and plagiarism reports are delivered upon request.
              </li>
              <li className="mb-3">
                  <i className="fas fa-check-circle"></i> 
                  Every client is invited to provide an honest review about our services to help others understand our credibility.
              </li>
          </ul>
      </div>
      
      <div className="col-md-6">
          <ul className="list-unstyled">
              <li className="mb-3">
                  <i className="fas fa-check-circle"></i> 
                  Extraordinary customer support service is provided on a 24/7 basis.
              </li>
              <li className="mb-3">
                  <i className="fas fa-check-circle"></i> 
                  Experience professional assignment help services with us.
              </li>
              <li className="mb-3">
                  <i className="fas fa-check-circle"></i> 
                  Fast delivery. Our proficiency over the years enables us to deliver high-quality assignment services within specified deadlines.
              </li>
              <li className="mb-3">
                  <a href="/order">
                      <i className="fas fa-check-circle"></i> 
                      Affordable prices. Pocket-friendly prices without compromising quality.
                  </a>
              </li>
              <li className="mb-3">
                  <i className="fas fa-check-circle"></i> 
                  Privacy. Confidentiality is highly enhanced.
              </li>
          </ul>
      </div>
  </div>
</section>

{/* <!-- Include Bootstrap and Font Awesome -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"> */}

<footer>
  <footer className="bg-light py-5">
    <div className="container-fluid">
        {/* <div className="row mb-4">
            <div className="col-md-3">
                <h4>WHAT WE OFFER</h4>
                <ul className="list-unstyled">
                    <li><a href="https://academianerds.com/academictips">Amazing Academic Tips</a></li>
                    <li><a href="https://academianerds.com/privacy-policy/">Privacy Policy</a></li>
                    <li><a href="https://academianerds.com/money-back-guarantee/">Money Back Guarantee</a></li>
                    <li><a href="https://academianerds.com/terms-and-conditions/">Terms and Conditions</a></li>
                    <li><a href="https://academianerds.com/order/writer/testimonials">Latest Reviews</a></li>
                    <li><a href="https://academianerds.com/our-company/">Our Company</a></li>
                    <li><a href="https://academianerds.com/faqs/">Frequently Asked Questions</a></li>
                </ul>
            </div>
        </div> */}

        <div className="row mb-4 container-fluid" style={{background: '#181D27'}}>
        
            <div className="col-md-3" style={liststyle}>
                <h4>WHAT WE OFFER</h4>
                <ul className="list-unstyled" style={liststyle}>
                    <li><a href="/academictips">Amazing Academic Tips</a></li>
                    <li><a href="/privacy-policy/">Privacy Policy</a></li>
                    <li><a href="/money-back-guarantee/">Money Back Guarantee</a></li>
                    <li><a href="/terms-and-conditions/">Terms and Conditions</a></li>
                    <li><a href="/order/writer/testimonials">Latest Reviews</a></li>
                    <li><a href="/our-company/">Our Company</a></li>
                    <li><a href="faqs/">Frequently Asked Questions</a></li>
                </ul>
            
        </div>
            <div className="col-md-3" style={liststyle}>
                <h5>OUR SERVICES</h5>
                <ul className="list-unstyled" style={liststyle}>
                    <li><a href="/how-our-research-paper-writing-service-works/">Research Papers</a></li>
                    <li><a href="/academic-help/">Academic Help</a></li>
                    <li><a href="/lab-report/">Lab Report</a></li>
                    <li><a href="/grant-proposal/">Grant Proposal</a></li>
                    <li><a href="/technical-report/">Technical Report</a></li>
                    <li><a href="/article-review/">Article Review</a></li>
                </ul>
            </div>
            <div className="col-md-3 d-none d-md-block" style={liststyle}>
                <h5>ADDITIONAL SERVICES</h5>
                <ul className="list-unstyled" style={liststyle}>
                    <li><a href="/critical-thinking/">Critical Thinking</a></li>
                    <li><a href="/analysis-essay/">Analysis Essay</a></li>
                    <li><a href="/admission-letter/">Admission Letter</a></li>
                    <li><a href="/summary-essay/">Summary Essay</a></li>
                    <li><a href="/reflection-paper/">Reflection Paper</a></li>
                    <li><a href="/journal-article/">Journal Article</a></li>
                    <li><a href="/write-my-research-paper/">Write My Research Paper</a></li>
                    <li><a href="/creative-writing/">Creative Writing</a></li>
                </ul>
            </div>
            <div className="col-md-3 d-none d-md-block" style={liststyle}>
                <h5>RESEARCH RESOURCES</h5>
                <ul className="list-unstyled" style={liststyle}>
                    <li><a href="/buy-research-papers/">Buy Research Papers</a></li>
                    <li><a href="/pay-for-research-paper/">Pay for Research Paper</a></li>
                    <li><a href="/research-papers-writing/">Research Papers Writing</a></li>
                    <li><a href="/buy-dissertation/">Buy Dissertation</a></li>
                    <li><a href="/free-plagiarism-checker/">Free Plagiarism Checker</a></li>
                </ul>
            </div>
        </div>

        <div className="row">
            <div className="col-12 text-center">
                <p>© 2022 Academia Nerds. All Rights Reserved</p>
            </div>
        </div>
    </div>
</footer>

{/* <!-- Include Bootstrap and Font Awesome -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"> */}

</footer>

<div className="position-fixed" style={{bottom: '20px', left: '20px', zIndex: '99999999', cursor: 'pointer'}}>
  <div className="d-flex align-items-center p-3 rounded shadow" style={{backgroundColor: '#26a69a', transition: '.2s ease-out'}}>
      <svg className="mr-2" height="17px" width="17px" viewBox="0 0 509 512" fill="#ffffff">
          <g fill="none" fill-rule="evenodd">
              <path d="M259.253137,0.00180389396 C121.502859,0.00180389396 9.83730687,111.662896 9.83730687,249.413175 C9.83730687,296.530232 22.9142299,340.597122 45.6254897,378.191325 L0.613226597,512.001804 L138.700183,467.787757 C174.430395,487.549184 215.522926,498.811168 259.253137,498.811168 C396.994498,498.811168 508.660049,387.154535 508.660049,249.415405 C508.662279,111.662896 396.996727,0.00180389396 259.253137,0.00180389396 Z M259.253137,459.089875 C216.65782,459.089875 176.998957,446.313956 143.886359,424.41206 L63.3044195,450.21808 L89.4939401,372.345171 C64.3924908,337.776609 49.5608297,295.299463 49.5608297,249.406486 C49.5608297,133.783298 143.627719,39.7186378 259.253137,39.7186378 C374.871867,39.7186378 468.940986,133.783298 468.940986,249.406486 C468.940986,365.025215 374.874096,459.089875 259.253137,459.089875 Z M200.755924,146.247066 C196.715791,136.510165 193.62103,136.180176 187.380228,135.883632 C185.239759,135.781068 182.918689,135.682963 180.379113,135.682963 C172.338979,135.682963 164.002301,138.050856 158.97889,143.19021 C152.865178,149.44439 137.578667,164.09322 137.578667,194.171258 C137.578667,224.253755 159.487251,253.321759 162.539648,257.402027 C165.600963,261.477835 205.268745,324.111057 266.985579,349.682963 C315.157262,369.636141 329.460495,367.859106 340.450462,365.455539 C356.441543,361.9639 376.521811,350.186865 381.616571,335.917077 C386.711331,321.63837 386.711331,309.399797 385.184018,306.857991 C383.654475,304.305037 379.578667,302.782183 373.464955,299.716408 C367.351242,296.659552 337.288812,281.870254 331.68569,279.83458 C326.080339,277.796676 320.898622,278.418749 316.5887,284.378615 C310.639982,292.612729 304.918689,301.074268 300.180674,306.09099 C296.46161,310.02856 290.477218,310.577055 285.331175,308.389764 C278.564174,305.506821 259.516237,298.869139 236.160607,278.048627 C217.988923,261.847958 205.716906,241.83458 202.149458,235.711949 C198.582011,229.598236 201.835077,225.948292 204.584241,222.621648 C207.719135,218.824546 210.610997,216.097679 213.667853,212.532462 C216.724709,208.960555 218.432625,207.05866 220.470529,202.973933 C222.508433,198.898125 221.137195,194.690767 219.607652,191.629452 C218.07588,188.568136 205.835077,158.494558 200.755924,146.247066 Z"></path>
          </g>
      </svg>
      <span className="text-white">
          Contact us on Matters Assignments
      </span>
  </div>
</div>
{/* <div class="position-relative" style={{width: '100%', height: '100%'}}>
    <span class="badge badge-primary tawk-badge" style={{position: 'absolute', bottom: '40px', left: '40px', zIndex: '1000'}}>1</span>
    <button type="button" class="btn btn-primary rounded-circle" tabindex="0" style={{position: 'absolute', bottom: '0', left: '0', zIndex: '1000', border: 'none'}}>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" height="32px" width="32px" role="img" alt="Chat icon" class="tawk-min-chat-icon">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"></path>
            </svg>
        </div>
    </button>
</div> */}

{/* <!-- Include Bootstrap CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> */}


{/* <!-- Include Bootstrap CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> */}

    </div>
  );
};
