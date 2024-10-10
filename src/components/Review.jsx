import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReviewsSection = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#54595F', minHeight: '400px', padding: '20px' }}>
      <div className="row">
        <div className="col-md-3">
          <div className="blockquote">
            <p className="blockquote-text">
              Check Out Our Most Recent Reviews
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial">
                  <img src="https://academianerds.com/wp-content/uploads/2020/10/1901138.jpg" alt="Customer #123567" className="img-fluid" />
                  <cite>
                    <span>Customer #123567 </span>
                    <span>⭐️⭐️⭐️⭐️⭐️</span>
                    <span>USA, California</span>
                  </cite>
                  <div className="testimonial-text">
                    Initially, school and education were burdens, but thanks to academianerds.com, everything has changed.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial">
                  <img src="https://academianerds.com/wp-content/uploads/2020/10/2430099.jpg" alt="Customer #113454" className="img-fluid" />
                  <cite>
                    <span>Customer #113454 </span>
                    <span>⭐️⭐️⭐️⭐️⭐️</span>
                    <span>USA, Washington</span>
                  </cite>
                  <div className="testimonial-text">
                    Thanks for the great service. The platform has definitely transformed my academic experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial">
                  <img src="https://academianerds.com/wp-content/uploads/2020/10/143618.jpg" alt="Customer #132232" className="img-fluid" />
                  <cite>
                    <span>Customer #132232 </span>
                    <span>⭐️⭐️⭐️⭐️⭐️</span>
                    <span>Australia, Victoria</span>
                  </cite>
                  <div className="testimonial-text">
                    "An excellent mark for my essay means that you, guys, wrote an outstanding paper! Thanks, thanks, thanks."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
