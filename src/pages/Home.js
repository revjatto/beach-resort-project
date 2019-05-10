import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Service from '../components/Service';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
    <Hero>
        <Banner title="Luxurious Rooms" subtitle="Delux Rooms starting at $299 Per Night">
       <Link to='/rooms' className="btn-primary">
          Our Rooms
       </Link>
        </Banner>
    </Hero>; 
    <Service />
    </div>
  )
 
};
export default Home
