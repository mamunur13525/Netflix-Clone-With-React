import React from 'react';
import Subcripiton from '../Subcription/Subcripiton';
import './LandingMainContent.css';

const LandingMainContent = () => {
    return (
        <main className='main_content'>
            <div className='main_content_box'>
                <h1 className='title'>
                    Unlimited movies, TV <br />
                    shows, and more
                </h1>
                <h3 className='subtitle mt-2'>
                    Watch anywhere. Cancel anytime.
                </h3>
              <Subcripiton/>
            </div>
        </main>
    );
};

export default LandingMainContent;