import React, { useState, useEffect } from 'react';
import "./Home.css";
const HomeComponent = () => {
    const [academicLevel, setAcademicLevel] = useState(0.9);
    const [paperType, setPaperType] = useState(1);
    const [pages, setPages] = useState(1);
    const [deadline, setDeadline] = useState(11.99);
    const [total, setTotal] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    
    useEffect(() => {
        const price = (academicLevel * deadline * pages).toFixed(2);
        setTotal(price);
        setWordCount(pages * 275);
    }, [academicLevel, pages, deadline]);

    return (
      <div className="container-fluid my-5">
     <div className="d-flex justify-content-between  section-container">
    {/* Left Section: Heading and Paragraph */}
    <div className="text-section "  style={{ marginLeft: '170px'}}>
        <h1 className="mb-4 ml-5" style={{ fontSize: '40px'}}>Boost Productivity, Reduce Stress & <br /> Achieve Your Goals</h1>
        <p style={{lineHeight:'5rem'}}>
            Drowning in assignments with deadlines looming?<br />
            We’re here to help.<br />
            Beat the crunch by letting us tackle your coursework.<br />
            Top-quality, original essays – <strong>No plagiarism</strong>, no AI.
        </p>
    </div>

    {/* Right Section: Calculate Price Form with Card Background */}
    <div className="card price-section p-4" style={{background:'#2e2a2a', marginRight: '160px'}}>
        <h4>Calculate Price</h4>
        <form>
            <div className="form-group">
                <label htmlFor="ops_aclevel">Academic Level</label>
                <select value={academicLevel} onChange={(e) => setAcademicLevel(parseFloat(e.target.value))} className="form-control" id="ops_aclevel">
                    <option value="0.9">High School</option>
                    <option value="1">Undergrad</option>
                    <option value="1.08">Masters</option>
                    <option value="1.2">Doctoral</option>
                    <option value="1.5">Others</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="order_tpaper">Type of Paper</label>
                <select value={paperType} onChange={(e) => setPaperType(parseFloat(e.target.value))} className="form-control" id="order_tpaper">
                    <option value="1">Essay</option>
                    <option value="1">Article</option>
                    <option value="1">Assignment</option>
                    <option value="1">Content</option>
                    <option value="1">Admission Essay</option>
                    <option value="1.4">Annotated Bibliography</option>
                    <option value="1">Argumentative Essay</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="order_pages">Select Pages</label>
                <input type="number" className="form-control" min="1" max="10" value={pages} onChange={(e) => setPages(parseInt(e.target.value))} id="order_pages" />
            </div>

            <div className="form-group">
                <label htmlFor="order_deadline">Deadline</label>
                <select value={deadline} onChange={(e) => setDeadline(parseFloat(e.target.value))} className="form-control" id="order_deadline">
                    <option value="11.99">14 Days</option>
                    <option value="12.5">11 Days</option>
                    <option value="16.99">7 Days</option>
                    <option value="21.99">4 Days</option>
                </select>
            </div>

            <div className="text-right">
                <strong>Price (USD): </strong><span id="price-display">${total}</span>
            </div>
            <div className="text-right">
                <strong>Word Count: </strong><span className="wordcount">{wordCount} words</span>
            </div>
        </form>
    </div>
</div>

  </div>
  
    );
}

export default HomeComponent;