import React, { useState } from "react";
import SignUp from "./Signup";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    ops_aclevel: "1#Undergrad",
    order_tpaper: "1#essay",
    order_title: "",
    order_instructions: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    <div>
    <form id="myform" action="https://academianerds.com/order/order/create" method="POST" onSubmit={handleSubmit}>
      <div className="form-group row">
        <label className="col-lg-3 col-md-12">Academic level</label>
        <div className="col-lg-9 col-md-12">
          <div className="btn-group row" data-toggle="buttons">
            {[
              { label: "High School", value: "0.9#High School" },
              { label: "Undergrad", value: "1#Undergrad" },
              { label: "Masters", value: "1.08#Masters" },
              { label: "Doctoral", value: "1.2#Doctoral" },
              { label: "Others", value: "1.5#Others" },
            ].map((level, index) => (
              <label
                key={index}
                className={`col-sm-3 btn btn-default ${
                  formData.ops_aclevel === level.value ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="ops_aclevel"
                  value={level.value}
                  checked={formData.ops_aclevel === level.value}
                  onChange={handleInputChange}
                />
                {level.label}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-3" htmlFor="exampleSelect1">
          Type of Paper
        </label>
        <div className="col-sm-8">
          <select
            name="order_tpaper"
            className="form-control custom-select border-default"
            value={formData.order_tpaper}
            onChange={handleInputChange}
            id="exampleSelect1"
          >
            {[
              { label: "Essay (Any Type)", value: "1#essay" },
              { label: "Essay", value: "1#Essay" },
              { label: "Article", value: "1#Article" },
              { label: "Assignment", value: "1#Assignment" },
              { label: "Annotated Bibliography", value: "1.4#Annotated Bibliography" },
              // Add more options as necessary...
            ].map((paper, index) => (
              <option key={index} value={paper.value}>
                {paper.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-3" htmlFor="order_title">
          Title
        </label>
        <input
          type="text"
          name="order_title"
          className="form-control col-sm-8 border-default"
          id="order_title"
          placeholder="Enter topic"
          value={formData.order_title}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group row">
        <label className="col-sm-3" htmlFor="exampleTextarea">
          Paper Instructions
        </label>
        <div className="col-sm-8">
          <textarea
            className="form-control border-default"
            name="order_instructions"
            id="exampleTextarea"
            rows="3"
            value={formData.order_instructions}
            onChange={handleInputChange}
            placeholder="Enter instructions"
          ></textarea>
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-8 offset-sm-3">
          <button type="submit" className="btn btn-primary">
            Submit Order
          </button>
        </div>
      </div>
    </form>
    {/* <SignUp /> */}
    </div>
  );
};

export default OrderForm;