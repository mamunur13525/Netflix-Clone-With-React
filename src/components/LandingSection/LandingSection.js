import React from 'react';
import './LandingSection.css';
import gif from '../../images/download-icon.gif';

const LandingSection = ({ title, subtitle, img, side }) => {
    return (
        <section className='landing_section'>
            <div className={`landing_section_div ${side === 'left' && 'reverse'} `}>
                <div className='landing_section_title_subtitle'>
                    <h1 className='title'>{title}</h1>
                    <h4 className='subtitle'>{subtitle}</h4>
                </div>
                <div className='img_box'>
                    {
                        title !== 'Watch everywhere.' &&
                        <>
                            <img src={img} alt="" />
                            {
                                title === 'Enjoy on your TV.'
                                &&
                                <div className='tv_video'>
                                    <video className="our-story-card-video" autoPlay={true} playsInline={true} muted={true} loop={true}><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" /></video>

                                </div>
                            }
                            {
                                title === 'Download your shows to watch offline.' &&
                                <div className="our-story-card-animation">
                                    <div className='animation_div_'>
                                        <div className="our-story-card-animation-image"><img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                                        </div>
                                        <div className="our-story-card-animation-text">
                                            <div id="" className="text-0" data-uia="">Stranger Things</div>
                                            <div id="" className="text-1" data-uia="">Downloading...</div>
                                        </div>
                                        <div>
                                            <img className='download_gif' src={gif} alt="download" />
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                    }
                </div>
            </div>
        </section>
    );
};

export default LandingSection;