import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';


const About = () => {
    return(
        <div>
            <Hero>
            <Banner title="Barbados Beach Resort Info Page" subtitle="We have from deluxe to super Luxurious Rooms">
                <Link to='/rooms' className="btn-primary">Check out our Rooms</Link>
            </Banner>
            </Hero>
        </div>
    )
}
export default About