import React from 'react'
import OrderFormComponent from './FormsComponents'
import SignInSignUp from './Signup'
import PriceCalculator from './PriceCalculato'

export default function OrderComponen() {
  return (
    <section class="features" id="features">
      <div class="container">
      <div class="section-heading">

</div>
<div class="row">
<div class="col-lg-9 col-md-12">
<div className="border border-dotted border-left">
<div>

</div>
    <div class="rc-orderform__step-flag">
        <h6> 1. PLACE AN ORDER</h6>
    </div>
<hr />
<OrderFormComponent />
<SignInSignUp />
</div>
</div>
<div class="col-lg-9 col-md-12">
    <PriceCalculator />
</div>
</div>
      </div>
      </section>
  )
}
