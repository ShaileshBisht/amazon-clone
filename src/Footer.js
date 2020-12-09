import React from 'react'
import "./Footer.css"
import FooterRow from "./FooterRow"

function Footer() {
    return (
        <div className="footer">
           <div className="footer_component">
                <FooterRow title="Get to Know Us" list={["About Us","Careers","Press Releases","Amazon Cares","Gift a Smile"]}  />
                <FooterRow title="Make Money with Us" list={["Sell on Amazon","Sell under Amazon Accelerator","Fulfilment by Amazon","Advertise Your Products","Amazon Pay on Merchants"]}  />
                <FooterRow title="Connect with Us" list={["Facebook","Twitter","Instagram"]}  />
                <FooterRow title="Let Us Help You" list={["COVID-19 and Amazon","Your Account","100% Purchase Protection","Amazon App Download","Amazon Assistant Download","Help"]}  />
           </div>
        </div>
    )
}

export default Footer;
