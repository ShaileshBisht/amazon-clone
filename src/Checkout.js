import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";

function Checkout() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
           <div className="checkout_left">
                <img className="checkout_ad" alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/TM236_MalcolmX_ILM_2x_1300x90._CB406475508_.jpg" ></img>

                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct  
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}

                        />
                    ))}
                    

                </div>
           </div>
           <div className="checkout_right">
                <Subtotal />
           </div>
        </div>
    )
}

export default Checkout;
