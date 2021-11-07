import React from 'react';
import Contact from '../../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppoinmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
           <Contact></Contact>
           <Services></Services>
           <AppointmentBanner></AppointmentBanner>

           <Footer></Footer>
        </div>
    );
};

export default Home;