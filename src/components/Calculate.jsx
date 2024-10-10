import React from 'react'

function Calculate() {
    return (
        <div className="opc1">
          <div className="op-col-12">
            <h4>Calculate Price</h4>
          </div>
          <div className="op-form-group op-row">
            <div className="op-col-12">
              <select name="ops_aclevel" className="form-control custom-select border-default op-col-7" id="ops_aclevel">
                <option value="0.9">High School</option>
                <option value="1">Undergrad</option>
                <option value="1.08">Masters</option>
                <option value="1.2">Doctoral</option>
                <option value="1.5">Others</option>
              </select>
            </div>
          </div>
    
          <div className="op-form-group op-row">
            <div className="op-col-12">
              <select name="order_tpaper" className="form-control custom-select border-default op-col-7" id="exampleSelect1">
                <option value="1">Essay</option>
                <option value="1">Article</option>
                <option value="1">Assignment</option>
                <option value="1">Content</option>
                <option value="1">Admission Essay</option>
                <option value="1.4">Annotated Bibliography</option>
                <option value="1">Argumentative Essay</option>
                <option value="1">Article Review</option>
                <option value="1">Book/Movie Review</option>
                <option value="1">Business Plan</option>
                <option value="1.5">Capstone Project</option>
                <option value="1">Case Study</option>
                <option value="1">Coursework</option>
                <option value="1">Creative Writing</option>
                <option value="1">Critical Thinking</option>
                <option value="1.5">Dissertation</option>
                <option value="1.5">Dissertation chapter</option>
                <option value="1.8">Lab Report</option>
                <option value="1.8">Math Problem</option>
                <option value="1">Research Paper</option>
                <option value="1">Research Proposal</option>
                <option value="1">Research Summary</option>
                <option value="1">Scholarship Essay</option>
                <option value="1">Speech</option>
                <option value="2">Statistic Project</option>
                <option value="1.3">Term Paper</option>
                <option value="1.2">Thesis/Thesis Chapter</option>
                <option value="1">Other</option>
                <option value="1.3">Presentation or Speech</option>
                <option value="1">Q&A</option>
                <option value="1">speech work</option>
                <option value="1">Application Paper</option>
                <option value="1">Analysis</option>
                <option value="1">Memo/Letter</option>
                <option value="1">Outline</option>
                <option value="1">Personal reflection</option>
                <option value="0.7">Presentation/PPT</option>
                <option value="1">Report (Any type)</option>
                <option value="1">Response Essay</option>
                <option value="1">Acceptance letter</option>
                <option value="2">Online Exam</option>
                <option value="1">Revision Paper</option>
                <option value="1.3">Blog Writing</option>
                <option value="1">Executive Summary</option>
                <option value="1.2">Extended Revision</option>
                <option value="2.2">Microsoft Project</option>
                <option value="1.3">Progressive Paper</option>
                <option value="1">Dissertation Editing</option>
                <option value="1.3">Grant proposal</option>
                <option value="1">Paraphrase</option>
                <option value="1.5">Nursing calculations</option>
                <option value="1.3">Combined Sections</option>
                <option value="1">Dissertation editing</option>
                <option value="0.9">Proofreading/editing</option>
                <option value="2">Brochure</option>
                <option value="0.9">Paper Editing</option>
                <option value="2">Online Quiz</option>
              </select>
            </div>
          </div>
    
          <div className="op-form-group op-row">
            <div className="op-col-12">
              <select id="order_pages" name="order_pages" className="form-control col-sm-12 custom-select border-default" required>
                <option value="1">Select words/Pages</option>
                <option value="1">1 Page</option>
                <option value="2">2 Pages</option>
                <option value="3">3 Pages</option>
                <option value="4">4 Pages</option>
                <option value="5">5 Pages</option>
                <option value="6">6 Pages</option>
                <option value="7">7 Pages</option>
                <option value="8">8 Pages</option>
                <option value="9">9 Pages</option>
                <option value="10">10 Pages</option>
                <option value="11">11 Pages</option>
                <option value="12">12 Pages</option>
                <option value="13">13 Pages</option>
                <option value="14">14 Pages</option>
                <option value="15">15 Pages</option>
                <option value="16">16 Pages</option>
                <option value="17">17 Pages</option>
                <option value="18">18 Pages</option>
                <option value="19">19 Pages</option>
                <option value="20">20 Pages</option>
                <option value="21">21 Pages</option>
                <option value="22">22 Pages</option>
                <option value="23">23 Pages</option>
                <option value="24">24 Pages</option>
                <option value="25">25 Pages</option>
                <option value="26">26 Pages</option>
                <option value="27">27 Pages</option>
                <option value="28">28 Pages</option>
                <option value="29">29 Pages</option>
                <option value="30">30 Pages</option>
              </select>
              <div className="op-col-12">
                <input id="words" type="hidden" value="275" />
              </div>
            </div>
          </div>
    
          <div className="op-form-group op-row">
            <div className="op-col-12">
              <select name="order_deadline" className="form-control custom-select border-default op-col-7" id="exampleSelect1">
                <option value="11.99">14 Days</option>
                <option value="12.5">11 Days</option>
                <option value="16.99">7 Days</option>
                <option value="21.99">4 Days</option>
                <option value="23.99">3 Days</option>
                <option value="25.99">48 Hours</option>
                <option value="27.99">24 Hours</option>
                <option value="29.75">12 Hours</option>
                <option value="32.44">3 Hours</option>
                <option value="11.99">14 Days</option>
                <option value="12.99">11 Days</option>
                <option value="13.99">7 Days</option>
                <option value="14.49">4 Days</option>
                <option value="14.99">3 Days</option>
                <option value="15.99">48 Hours</option>
                <option value="17.99">24 Hours</option>
                <option value="20.75">12 Hours</option>
                <option value="25.44">3 Hours</option>
                <option value="11.99">14 Days</option>
                <option value="12.99">11 Days</option>
                <option value="14.99">7 Days</option>
                <option value="16.99">4 Days</option>
                <option value="18.99">3 Days</option>
                <option value="19.99">48 Hours</option>
                <option value="21.99">24 Hours</option>
                <option value="25.75">12 Hours</option>
                <option value="27.44">3 Hours</option>
                <option value="11.99">14 Days</option>
                <option value="11.99">14 Days</option>
                <option value="12.99">11 Days</option>
                <option value="14.99">7 Days</option>
                <option value="16.99">4 Days</option>
                <option value="18.99">3 Days</option>
                <option value="19.99">48 Hours</option>
                <option value="21.99">24 Hours</option>
                <option value="25.75">12 Hours</option>
                <option value="27.44">3 Hours</option>
              </select>
            </div>
          </div>
    
          <div className="op-form-group op-row">
            <div className="op-col-12">
              <div className="input-group op-col-7">
                <input
                  type="text"
                  className="form-control"
                  id="order_price"
                  name="order_price"
                  placeholder="Total Price"
                />
              </div>
            </div>
            
          </div>
          <br />

<div class="op-row">
<div class="op-col-6 op-text-right"> Price (USD)</div>
<div class="op-col-6 op-text-right op-name"> <div class="orderamountc">$</div> </div>

</div>
  
  <div class="op-row">
    <div class="op-col-6 op-text-right"> </div>
  </div>   

  <div class="op-row">
<div class="opc1btn"> <a class="op-sm-12" href="/order"> ORDER NOW </a></div>
  </div> 
        </div>
      );
    };
    
export default Calculate;
