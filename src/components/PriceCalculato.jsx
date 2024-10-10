import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const PriceCalculator = () => {
    const [coupon, setCoupon] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [orderAmount, setOrderAmount] = useState(275); // Sample order amount
    const [discountAmount, setDiscountAmount] = useState(0);
    const [finalAmount, setFinalAmount] = useState(orderAmount);

    const applyCoupon = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        setSuccessMsg('');

        try {
            const response = await axios.post('https://academianerds.com/order/order/coupon', {
                cpn_name: coupon,
            });

            const data = response.data;

            if (data.error) {
                setErrorMsg(data.error);
            } else {
                const discount = parseFloat(data.error);
                const discountedAmount = orderAmount - (orderAmount * discount);
                setDiscountAmount(discountedAmount);
                setFinalAmount(discountedAmount);
                setSuccessMsg(data.success);
                setCoupon('');
            }
        } catch (error) {
            console.error('Error applying coupon:', error);
            setErrorMsg('An error occurred while applying the coupon.');
        }
    };

    return (
        <div className="sticky-top">
            <div className="row">
                <div className="col-sm-12">
                    <div className="pricecalculate">
                        <div className="topicright" style={{ fontSize: '15px', fontWeight: 'bold' }}></div>
                        <div className="ops_aclevelright"></div>
                        <hr style={{ marginBottom: '0px' }} />
                        <div className="order_tpaperright"></div>
                        <div className="order_subjectright"></div>

                        <div className="row">
                            <div className="col-sm-7"><div className="order_pagesright float-left"></div></div>
                            <div className="col-sm-5 font-weight-bold"><div className="totalsumright"></div></div>
                        </div>

                        <div className="row">
                            <div className="col-sm-7"><div className="order_slidesright"></div></div>
                            <div className="col-sm-5 font-weight-bold"><div className="order_slidesrightprice"></div></div>
                        </div>

                        <div className="row">
                            <div className="col-sm-7"><div className="order_discountright"></div></div>
                            <div className="col-sm-5 font-weight-bold"><div className="order_discountrightprice"></div></div>
                        </div>

                        <hr style={{ marginBottom: '0px' }} />
                        <div className="row">
                            <div className="col-sm-7 font-weight-bold">Total price</div>
                            <div className="col-sm-5 text-success font-weight-bold"><div className="orderamountc">${finalAmount.toFixed(2)}</div></div>
                        </div>
                        <hr />

                        <input id="words" type="hidden" value="275" />
                        <input id="addontotal" type="hidden" name="addontotal" value="0" readOnly />
                        <input type="hidden" name="cpn_value" id="cpn_value" className="form-control" value="1" />

                        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
                        {successMsg && <div className="alert alert-success">{successMsg}</div>}

                        <form className="coupon_area" onSubmit={applyCoupon}>
                            <div className="form-group row">
                                <input
                                    type="text"
                                    name="cpn_name"
                                    className="form-control col-sm-8"
                                    placeholder="Enter coupon"
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                    required
                                />
                                <button type="submit" className="btn btn-success btn-submit col-sm-3">Apply</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceCalculator;
