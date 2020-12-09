import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container" >
                <img className="home_image" alt="" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"

                />

                <div className="home_row" >
                    <Product 
                        id="122321"
                        title="he Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Audible Logo" 
                        price={2209.42} 
                        image="https://miro.medium.com/max/700/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg"
                        rating={5}
                     />
                    <Product 
                        id="166321"
                        title="Titanfall 2" 
                        price={1178} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71vRF4V3ipL._SL1500_.jpg"
                        rating={4}
                    />
                </div>
                
                <div className="home_row" >
                    <Product 
                        id="167321"
                        title="Invicta Men's Specialty Stainless Steel Watch" 
                        price={2873.20} 
                        image="https://m.media-amazon.com/images/I/712OkHFNzCL._AC_UL320_.jpg"
                        rating={5}
                     />
                    <Product 
                        id="15351"
                        title="CYRILL Color Brick Designed for iPhone 12 Pro Max Case (2020) - Black" 
                        price={1178} 
                        image="https://m.media-amazon.com/images/I/61nsgAdteHL._AC_UL320_.jpg"
                        rating={2}
                    />
                    <Product 
                        id="166321"
                        title="Bose SoundSport Free, True Wireless Earbuds, (Sweatproof Bluetooth Headphones for Workouts and Sports), Midnight Blue/Citron" 
                        price={19022.84} 
                        image="https://m.media-amazon.com/images/I/61Bx0jEMbnL._AC_UY218_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home_row" >
                <Product 
                    id="166321"
                    title="Sceptre Curved 27- 75Hz LED Monitor HDMI VGA Build-In Speakers, EDGE-LESS Metal Black 2019 (C275W-1920RN)" 
                    price={12376.89} 
                    image="https://m.media-amazon.com/images/I/914W+OtJQ-L._AC_UY218_.jpg"
                    rating={4}
                />
                </div>

                <div className="home_row" >
                    <Product 
                        id="165321"
                        title="ASUS ZenBook Duo Intel Core i5-10210U 10th Gen 14-inch FHD (8GB RAM/512GB NVMe SSD/2GB NVIDIA GeForce MX250 Graphics/1.60 Kg)" 
                        price={92990} 
                        image="https://m.media-amazon.com/images/I/81K9Es2DDFL._AC_UY218_.jpg"
                        rating={5}
                     />
                    <Product 
                        id="15351"
                        title="Bose Noise Cancelling Wireless Bluetooth Headphones 700, with Alexa Voice Control, Black" 
                        price={ 31050} 
                        image="https://m.media-amazon.com/images/I/51ntWa1Q0sL._AC_UY218_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="166321"
                        title="Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm f4 is STM Lens (Black)" 
                        price={52750} 
                        image="https://m.media-amazon.com/images/I/81cEKnH692L._AC_UL320_.jpg"
                        rating={4}
                    />
                </div>

            </div>

        </div>
    )
}

export default Home;
