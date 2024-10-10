import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Error Boundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

const HandlePrice = () => {
  const [orderPages, setOrderPages] = useState(1);
  const [orderSources, setOrderSources] = useState(0);
  const [orderPPTSlides, setOrderPPTSlides] = useState(0);
  const [orderSpacing, setOrderSpacing] = useState('1#Double');
  const [orderCurrency, setOrderCurrency] = useState('1#USD');
  const [orderDeadline, setOrderDeadline] = useState('11.99#14 Days');

  const handleOrderPagesChange = (type) => {
    setOrderPages(type === 'plus' ? orderPages + 1 : Math.max(1, orderPages - 1));
  };

  const handleOrderSourcesChange = (type) => {
    setOrderSources(type === 'plus' ? orderSources + 1 : Math.max(0, orderSources - 1));
  };

  const handleOrderPPTSlidesChange = (type) => {
    setOrderPPTSlides(type === 'plus' ? orderPPTSlides + 1 : Math.max(0, orderPPTSlides - 1));
  };

  return (
    <ErrorBoundary>
      <div className="container">
        <div className="rc-orderform__step-flag">
          <h6>2. PRICING DETAILS</h6>
        </div>
        <hr />

        {/* Number of Pages */}
        <div className="form-group row">
          <label className="col-sm-3">Number of Pages</label>
          <div className="input-group col-sm-4">
            <button
              type="button"
              className="btn btn-default border-default"
              disabled={orderPages <= 1}
              onClick={() => handleOrderPagesChange('minus')}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input
              type="text"
              id="order_pages"
              name="order_pages"
              className="form-control input-number text-center"
              value={orderPages}
              readOnly
            />
            <button
              type="button"
              className="btn btn-default border-default"
              onClick={() => handleOrderPagesChange('plus')}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        {/* Word Spacing */}
        <div className="form-group row">
          <label className="col-sm-3">Word Spacing</label>
          <div className="col-sm-9">
            <div className="btn-group" data-toggle="buttons">
              <label className={`btn btn-default ${orderSpacing === '1#Double' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="order_spacing"
                  value="1#Double"
                  checked={orderSpacing === '1#Double'}
                  onChange={() => setOrderSpacing('1#Double')}
                />
                Double Spaced
              </label>
              <label className={`btn btn-default ${orderSpacing === '2#Single' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="order_spacing"
                  value="2#Single"
                  checked={orderSpacing === '2#Single'}
                  onChange={() => setOrderSpacing('2#Single')}
                />
                Single Spaced
              </label>
            </div>
          </div>
        </div>

        {/* Currency */}
        <div className="form-group row">
          <label className="col-sm-3">Currency</label>
          <div className="col-sm-9">
            <div className="btn-group" data-toggle="buttons">
              <label className={`btn btn-default ${orderCurrency === '1#USD' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="order_currency"
                  value="1#USD"
                  checked={orderCurrency === '1#USD'}
                  onChange={() => setOrderCurrency('1#USD')}
                />
                USD
              </label>
              <label className={`btn btn-default ${orderCurrency === '0.77#GBP' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="order_currency"
                  value="0.77#GBP"
                  checked={orderCurrency === '0.77#GBP'}
                  onChange={() => setOrderCurrency('0.77#GBP')}
                />
                GBP
              </label>
              <label className={`btn btn-default ${orderCurrency === '0.89#EUR' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="order_currency"
                  value="0.89#EUR"
                  checked={orderCurrency === '0.89#EUR'}
                  onChange={() => setOrderCurrency('0.89#EUR')}
                />
                EUR
              </label>
              <label className={`btn btn-default ${orderCurrency === '1.4#AUD' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="order_currency"
                  value="1.4#AUD"
                  checked={orderCurrency === '1.4#AUD'}
                  onChange={() => setOrderCurrency('1.4#AUD')}
                />
                AUD
              </label>
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className="form-group row">
          <label className="col-sm-3">Sources</label>
          <div className="input-group col-sm-5">
            <button
              type="button"
              className="btn btn-default border-default"
              disabled={orderSources <= 0}
              onClick={() => handleOrderSourcesChange('minus')}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input
              type="text"
              id="order_sources"
              name="order_sources"
              className="form-control border-default input-number text-center"
              value={orderSources}
              readOnly
            />
            <button
              type="button"
              className="btn btn-default border-default"
              onClick={() => handleOrderSourcesChange('plus')}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        {/* PowerPoint Slides */}
        <div className="form-group row">
          <label className="col-sm-3">PowerPoint Slides</label>
          <div className="input-group col-sm-5">
            <button
              type="button"
              className="btn btn-default border-default"
              disabled={orderPPTSlides <= 0}
              onClick={() => handleOrderPPTSlidesChange('minus')}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input
              type="text"
              id="order_pptslides"
              name="order_pptslides"
              className="form-control border-default input-number text-center"
              value={orderPPTSlides}
              readOnly
            />
            <button
              type="button"
              className="btn btn-default border-default"
              onClick={() => handleOrderPPTSlidesChange('plus')}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        {/* Deadline */}
        <div className="form-group row">
          <label className="col-sm-3">Deadline</label>
          <div className="col-sm-9">
            <div className="btn-group" data-toggle="buttons">
              {['3 Hours', '12 Hours', '24 Hours', '48 Hours', '3 Days', '4 Days', '7 Days', '11 Days', '14 Days', '6 Hours'].map(
                (deadline) => (
                  <label
                    key={deadline}
                    className={`btn btn-default ${
                      orderDeadline.includes(deadline) ? 'active' : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="order_deadline"
                      value={deadline}
                      checked={orderDeadline.includes(deadline)}
                      onChange={() => setOrderDeadline(`11.99#${deadline}`)}
                    />
                    {deadline}
                  </label>
                )
              )}
            </div>
          </div>
        </div>

        {/* Writer Category */}
        <div className="form-group row">
          <label className="col-lg-3 col-md-12">Writer Category</label>
          <div className="col-lg-9 col-md-12">
            <div className="btn-group" data-toggle="buttons">
              {['Standard', 'Premium', 'Platinum'].map((category) => (
                <label key={category} className="btn btn-default">
                  <input type="radio" name="order_writer_category" value={category} />
                  {category}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Calculate Total Price */}
        <div className="form-group row">
          <label className="col-sm-3">Total Price</label>
          <div className="col-sm-9">
            <h4 className="text-success">
              ${((orderPages * 11.99 + orderSources * 2.99 + orderPPTSlides * 4.99) * parseFloat(orderCurrency)).toFixed(2)}
            </h4>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default HandlePrice;
