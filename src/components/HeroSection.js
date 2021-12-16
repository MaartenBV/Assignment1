import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>REEL Architecture Office</h1>
            <p>Architecture office</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    <p className="button-text">LEARN MORE</p>
                    </Button>
            </div>
        </div>
    )
}

export default HeroSection
