import React from 'react'
import { Button } from './Button'
import './Button.css'
import './Footer.css'
import './HeroSection.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join my team now!
                </p>
                <p className="footer-subscription-text">
                    Send me an e-mail!
                </p>
                <div className="hero-btns">
                    <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                    <p className="button-text">ASK INFO</p>
                    </Button>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Learn more about us</h2>
                        <Link to='/about-us'>Who are we?</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <a href="https://www.facebook.com/" target="_blank">Facebook</a>
                        <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                        <a href="https://www.youtube.com/" target="_blank">YouTube</a>
                        <a href="https://twitter.com/home" target="_blank">Twitter</a>
                        <a href="https://be.linkedin.com/" target="_blank">LinkedIn</a>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            REEL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">REEL © 2021</small>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/" target="_blank" className="social-icon-link facebook" aria-label="Facebook">
                            <i className="fab fa-facebook-f"/>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="social-icon-link instagram" aria-label="Instagram">
                            <i className="fab fa-instagram"/>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" className="social-icon-link youtube" aria-label="Youtube">
                            <i className="fab fa-youtube"/>
                        </a>
                        <a href="https://twitter.com/home" target="_blank" className="social-icon-link twitter" aria-label="Twitter">
                            <i className="fab fa-twitter"/>
                        </a>
                        <a href="https://be.linkedin.com/" target="_blank" className="social-icon-link linkedin" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"/>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
