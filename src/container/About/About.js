import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants/';

const About = () => {
    const about = [
        {
            title: 'Web Development',
            description: 'I am a good web developer,',
            imgUrl: images.about01
        },
        {
            title: 'Front-End Development',
            description: 'I am a good web developer,',
            imgUrl: images.about02
        },
        {
            title: 'Back-End Development',
            description: 'I am a good web developer,',
            imgUrl: images.about03
        },
        {
            title: 'UI/UX Design',
            description: 'I am a good web developer,',
            imgUrl: images.about04
        }
    ];
    return (
        <>
            <h2 className="head-text">
                I Know That
                <span> Good Dev </span>
                <br />
                means
                <span> Good Business</span>
            </h2>
            <div className="app__profiles">
                {about.map((item, index) => (
                    <motion.div
                        key={item.title + index}
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                    >
                        <img src={item.imgUrl} alt="About Title" />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>
                            {item.title}
                        </h2>
                        <p className="p-text" style={{ marginTop: 10 }}>
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default About;
