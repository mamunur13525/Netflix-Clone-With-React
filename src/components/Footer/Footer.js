import React from 'react';
import './Footer.css';

const ulBoxFirst = [
    {
        ul: [
            {
                li: 'FAQ',
                link: ''
            }, {
                li: 'Investor Relations',
                link: ''
            }, {
                li: 'Privacy',
                link: ''
            }, {
                li: 'Speed Test',
                link: ''
            }
        ]
    }, {
        ul: [
            {
                li: 'Help Center',
                link: ''
            }, {
                li: 'Jobs',
                link: ''
            }, {
                li: 'Cookie Preferences',
                link: ''
            }, {
                li: 'Legal Notices',
                link: ''
            }
        ],
    }, {
        ul: [
            {
                li: 'Account',
                link: ''
            }, {
                li: 'Ways to Watch',
                link: ''
            }, {
                li: 'Corporate Information',
                link: ''
            }, {
                li: 'Only on Netflix',
                link: ''
            }
        ],
    }, {
        ul: [
            {
                li: 'Media Center',
                link: ''
            }, {
                li: 'Terms of Use',
                link: ''
            }, {
                li: 'Contact Us',
                link: ''
            }
        ]
    }
]

const Footer = () => {
    return (
        <footer className='py-5 landing_section mb-0'>
            <div className='footer_section'>
                <p className="footer_header">
                    Questions? Contact us.
                </p>
                <div className='d-flex justify-content-between' >
                    {
                        ulBoxFirst.map((item, index) => (
                            <ul className='footer_ul' key={index}>
                                {item.ul.map((li, ind) => (
                                    <li key={ind}>
                                        {li.li}
                                    </li>

                                ))}
                            </ul>
                        ))
                    }
                </div>
                <p className='mt-4'>
                Netflix Bangladesh
                </p>
            </div>
        </footer>
    );
};

export default Footer;