import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
           <div className="checkout_left">
                <img className="checkout_ad" alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/TM236_MalcolmX_ILM_2x_1300x90._CB406475508_.jpg" ></img>

                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                </div>
           </div>
           <div className="checkout_right">
                <Subtotal />
           </div>
        </div>
    )
}

export default Checkout;
