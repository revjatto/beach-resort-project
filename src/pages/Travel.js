import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';


const Travel = () => {
    return(
        <div>
            <Hero>
            <Banner title="Barbados Beach Resort Travel Service" subtitle="We can arrange flight and Airport Transfer for your group">
                <Link to='/rooms' className="btn-primary">Check out our Rooms</Link>
            </Banner>
            </Hero>
        </div>
    )
}
export default Travel