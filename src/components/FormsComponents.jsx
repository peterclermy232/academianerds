import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to include Bootstrap CSS
import OrderComponen from './OrderComponen';

const OrderFormComponent = () => {
    const [writerCategory, setWriterCategory] = useState("1#Standard");
    const [preferredWriterId, setPreferredWriterId] = useState("0");
    const [additionalServices, setAdditionalServices] = useState({
        samples: false,
        sources: false,
        delivery: false,
    });

    const handleWriterCategoryChange = (e) => {
        setWriterCategory(e.target.value);
    };

    const handlePreferredWriterIdChange = (e) => {
        setPreferredWriterId(e.target.value);
    };

    const handleServiceChange = (e) => {
        const { name, checked } = e.target;
        setAdditionalServices((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            writerCategory,
            preferredWriterId,
            additionalServices,
        });
        // Handle form submission logic
    };

    return (
        <div>
            {/* <OrderComponen /> */}
        <form className="container mt-4" onSubmit={handleSubmit}>
            {/* Writer Category Section */}
            <div className="form-group opclick row">
                <label className="col-lg-3 col-md-12">Writer Category</label>
                <div className="col-lg-9 col-md-12 btn-group">
                    <div className="row" data-toggle="buttons">
                        <label className={`btn text-center btn-default col ${writerCategory === "1#Standard" ? "active" : ""}`}>
                            <input
                                type="radio"
                                name="order_wquality"
                                value="1#Standard"
                                checked={writerCategory === "1#Standard"}
                                onChange={handleWriterCategoryChange}
                            />
                            <h6>Standard</h6>
                            <hr />
                            <small>Standard Price writers</small>
                        </label>
                        <label className={`btn text-center btn-default col ${writerCategory === "1.15#Premium" ? "active" : ""}`}>
                            <input
                                type="radio"
                                name="order_wquality"
                                value="1.15#Premium"
                                checked={writerCategory === "1.15#Premium"}
                                onChange={handleWriterCategoryChange}
                            />
                            <h6>Premium</h6>
                            <hr />
                            <small>High-rank writer,<br /> proficient in <br /> the requested field of study</small>
                        </label>
                        <label className={`btn text-center btn-default col ${writerCategory === "1.25#Platinum" ? "active" : ""}`}>
                            <input
                                type="radio"
                                name="order_wquality"
                                value="1.25#Platinum"
                                checked={writerCategory === "1.25#Platinum"}
                                onChange={handleWriterCategoryChange}
                            />
                            <h6>Platinum</h6>
                            <hr />
                            <small>English as a native <br /> language writer <br />(US, UK, CA, AU writers)</small>
                        </label>
                    </div>
                </div>
            </div>

            {/* Preferred Writer's ID Section */}
            <div className="form-group row">
                <label className="col-sm-3" htmlFor="order_prefwriter">Preferred Writer's ID</label>
                <input
                    type="text"
                    name="order_writer"
                    className="form-control col-sm-7 border-default"
                    id="order_prefwriter"
                    placeholder="optional"
                    value={preferredWriterId}
                    onChange={handlePreferredWriterIdChange}
                />
            </div>

            {/* Additional Services Section */}
            <div className="form-group row">
                <label className="col-sm-3">Additional Services</label>
                <div className="col-sm-8 addons">
                    <label className="text-left checkbox" style={{ width: '100%' }}>
                        <input
                            type="checkbox"
                            name="samples"
                            checked={additionalServices.samples}
                            onChange={handleServiceChange}
                        />
                        Get Writer Samples
                        <p style={{ float: 'right' }}>$5</p>
                    </label>
                    <hr />
                    <label className="text-left checkbox" style={{ width: '100%' }}>
                        <input
                            type="checkbox"
                            name="sources"
                            checked={additionalServices.sources}
                            onChange={handleServiceChange}
                        />
                        Get Copy of Sources
                        <p style={{ float: 'right' }}>$20</p>
                    </label>
                    <hr />
                    <label className="text-left checkbox" style={{ width: '100%' }}>
                        <input
                            type="checkbox"
                            name="delivery"
                            checked={additionalServices.delivery}
                            onChange={handleServiceChange}
                        />
                        Progressive Delivery
                        <p style={{ float: 'right' }}>$15</p>
                    </label>
                    <hr />
                </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">Submit Order</button>
        </form>
        </div>
    );
};

export default OrderFormComponent;
