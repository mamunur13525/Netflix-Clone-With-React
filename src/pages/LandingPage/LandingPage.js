import React from 'react';
import LandingMainContent from '../../components/LandingMainContent/LandingMainContent';
import LandingSection from '../../components/LandingSection/LandingSection';
import Navbar from '../../components/Navbar/Navbar';
import './LandingPage.css';
import playerBox from '../../images/tv-frame.png';
import mobileFrame from '../../images/mobile-girl.jpg';
import Cartoon from '../../images/cartoon.png';
import FqQuestion from '../../components/FqQuestion/FqQuestion';
import Footer from '../../components/Footer/Footer';

const sectionDetails = [
    {
        title: 'Enjoy on your TV.',
        subtitle: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
        ,
        img: playerBox,
        side: 'right'
    }, {
        title: 'Download your shows to watch offline.',
        subtitle: 'Save your favorites easily and always have something to watch.'
        ,
        img: mobileFrame,
        side: 'left'
    }, {
        title: 'Watch everywhere.',
        subtitle: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
        ,
        img: playerBox,
        side: 'right'
    }, {
        title: 'Create profiles for kids.',
        subtitle: 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
        ,
        img: Cartoon,
        side: 'left'
    },
]

const LandingPage = () => {
    return (
        <section className='landing_main_section '>
            <div className='background_image'>
                <div className="landing_main_overlay">
                    <Navbar signBtn={true}/>
                    <LandingMainContent />
                </div>
            </div>
            {
                sectionDetails.map((item, index) => (
                    <LandingSection
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        img={item.img}
                        side={item.side}
                    />
                ))
            }
            <FqQuestion />
            <Footer />
        </section>
    );
};

export default LandingPage;