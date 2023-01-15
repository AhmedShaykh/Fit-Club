import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import HeroImage from '../../Assets/hero_image.png';
import HeroImageBack from '../../Assets/hero_image_back.png';
import Heart from '../../Assets/heart.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />

                <div className="the-ad">
                    <div></div>
                    <span>The Best Fitness Club In The Town</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>

                    <div>
                        <span>Ideal Body</span>
                    </div>

                    <div>
                        <span>In Here We Will Help You To Shape And Build Your Ideal Body And Live Up Your Life To Fullest</span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>Expert Coachs</span>
                    </div>

                    <div>
                        <span>+ 978</span>
                        <span>Members Joined</span>
                    </div>

                    <div>
                        <span>+ 50</span>
                        <span>Fitness Programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>

            <div className="right-h">
                <button className="btn">Join Now</button>

                <div className="heart-rate">
                    <img src={Heart} />

                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                <img src={HeroImage} className="hero-image" />
                <img src={HeroImageBack} className="hero-image-back" />

            </div>
        </div>
    )
};

export default Hero;