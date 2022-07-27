import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a
                    href="https://www.facebook.com/amaank23/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaFacebook />
                </a>
            </div>
            <div>
                <a
                    href="https://github.com/amaank23"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsGithub />
                </a>
            </div>
            <div>
                <a
                    href="https://www.linkedin.com/in/aman-khan-2642bb207/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsLinkedin />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;
