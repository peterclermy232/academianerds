import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CalPrice.css'; // Importing custom CSS file

const PriceCalculator = () => {
  const [formData, setFormData] = useState({
    academicLevel: '0.9',
    paperType: '1',
    pages: '1',
    deadline: '11.99',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-5 price-calculator">
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="text-center mb-4">Price Calculator</h4>

          <div className="form-group">
            <label htmlFor="academicLevel" className="form-label">Academic Level</label>
            <select
              name="academicLevel"
              className="form-control"
              value={formData.academicLevel}
              onChange={handleChange}
            >
              <option value="0.9">High School</option>
              <option value="1">Undergrad</option>
              <option value="1.08">Masters</option>
              <option value="1.2">Doctoral</option>
              <option value="1.5">Others</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="paperType" className="form-label">Paper Type</label>
            <select
              name="paperType"
              className="form-control"
              value={formData.paperType}
              onChange={handleChange}
            >
              <option value="1">Essay</option>
              <option value="1">Article</option>
              <option value="1.4">Annotated Bibliography</option>
              <option value="1.5">Capstone Project</option>
              <option value="1.8">Lab Report</option>
              <option value="2">Statistic Project</option>
              <option value="0.7">Presentation/PPT</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="pages" className="form-label">Number of Pages</label>
            <select
              name="pages"
              className="form-control"
              value={formData.pages}
              onChange={handleChange}
            >
              <option value="1">1 Page</option>
              <option value="2">2 Pages</option>
              <option value="3">3 Pages</option>
              <option value="10">10 Pages</option>
              <option value="30">30 Pages</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="deadline" className="form-label">Deadline</label>
            <select
              name="deadline"
              className="form-control"
              value={formData.deadline}
              onChange={handleChange}
            >
              <option value="11.99">14 Days</option>
              <option value="12.5">11 Days</option>
              <option value="16.99">7 Days</option>
              <option value="21.99">4 Days</option>
              <option value="27.99">24 Hours</option>
              <option value="32.44">3 Hours</option>
            </select>
          </div>

          <button className="btn btn-primary w-100 mt-4" onClick={() => console.log(formData)}>
            Calculate Price
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
