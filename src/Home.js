import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container" >
                <img className="home_image" alt="" 
                src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920"

                />

                <div className="home_row" >
                    <Product 
                        id="122321"
                        title="he Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Audible Logo" 
                        price={29.99} 
                        image="https://miro.medium.com/max/700/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg"
                        rating={5}
                     />
                    <Product 
                        id="166321"
                        title="Titanfall 2" 
                        price={15.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71vRF4V3ipL._SL1500_.jpg"
                        rating={4}
                    />
                </div>
                
                <div className="home_row" >
                    <Product 
                        id="167321"
                        title="Invicta Men's Specialty Stainless Steel Watch" 
                        price={39.00} 
                        image="https://m.media-amazon.com/images/I/712OkHFNzCL._AC_UL320_.jpg"
                        rating={5}
                     />
                    <Product 
                        id="15351"
                        title="CYRILL Color Brick Designed for iPhone 12 Pro Max Case (2020) - Black" 
                        price={15.99} 
                        image="https://m.media-amazon.com/images/I/61nsgAdteHL._AC_UL320_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="166321"
                        title="Titanfall 2" 
                        price={15.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71vRF4V3ipL._SL1500_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home_row" >
                <Product 
                    id="166321"
                    title="Sceptre Curved 27- 75Hz LED Monitor HDMI VGA Build-In Speakers, EDGE-LESS Metal Black 2019 (C275W-1920RN)" 
                    price={168} 
                    image="https://m.media-amazon.com/images/I/914W+OtJQ-L._AC_UY218_.jpg"
                    rating={4}
                />
                </div>

            </div>

        </div>
    )
}

export default Home;
