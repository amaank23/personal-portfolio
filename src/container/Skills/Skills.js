import React, { useState, useEffect } from 'react';
import ReactToolTip from 'react-tooltip';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(query).then((data) => {
            setExperience(data);
        });

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });
    }, []);
    return (
        <>
            <h2 className="head-text">Skills & Experience</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((item, index) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={item.name}
                        >
                            <div
                                className="app__flex"
                                style={{ backgroundColor: item.bgColor }}
                            >
                                <img src={urlFor(item.icon)} alt={item.name} />
                            </div>
                            <p className="p-text">{item.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div className="app__skills-exp">
                    {experience?.map((item, index) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={item.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{item.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {item.works.map((work, index) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            // data-tip
                                            // data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text">
                                                {work.name}
                                            </h4>
                                            <p className="p-text">
                                                {work.company}
                                            </p>
                                        </motion.div>
                                        {/* <ReactToolTip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            {work.desc}
                                        </ReactToolTip> */}
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg'
);
