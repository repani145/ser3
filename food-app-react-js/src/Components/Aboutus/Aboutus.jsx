import React from 'react';
import './Aboutus.css'; // Ensure the CSS file exists and is correctly named
import Nav from '../HomepageComponents/navbar/navbar';
import Footer from '../HomepageComponents/Footers';

const AboutUs = () => {
    return (
        <>
        <Nav />
        <div className="about-us">
           
            <h1>About Us</h1>
            <div className="about-content">
                <div className="about-description">
                    <h2>Welcome to Our Culinary Adventure!</h2>
                    <p>
                        At our restaurant app, we believe that food is more than just sustenance; it’s an experience that brings people together. 
                        Our passion for gastronomy drives us to connect you with a diverse array of restaurants, each offering unique flavors 
                        and unforgettable dining experiences.
                    </p>
                    <p>
                        Our mission is to help you discover the hidden gems in your city and beyond. From bustling bistros to elegant fine dining, 
                        we curate a selection of eateries that prioritize quality ingredients, innovative dishes, and exceptional service.
                    </p>
                    <p>
                        We understand that dining out is not just about the food; it’s about creating memories with family and friends. 
                        Whether it’s a romantic dinner, a family gathering, or a quick lunch with colleagues, we are here to make every meal special.
                    </p>
                    <p>
                        Join us on this delicious journey as we explore the world of flavors and share the stories behind the dishes and the chefs 
                        who create them. Let’s celebrate food, culture, and the joy of dining together!
                    </p>
                </div>
            </div>
        </div>
        <Footer />
</>
    );
};

export default AboutUs;
