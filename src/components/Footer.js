import React from 'react'
import { Button } from './Button'
import './Footer.css'
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
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle="btn--outline">ASK INFO</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Learn more about us</h2>
                        <Link to='/about-us'>Who are we?</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/sign-up'>Contact</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>Instagram</Link>
                        <Link to='https://www.facebook.com/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
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
                        <Link to="/" className="social-icon-link facebook" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="/" className="social-icon-link instagram" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="/" className="social-icon-link youtube" target="_blank" aria-label="Youtube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link to="/" className="social-icon-link twitter" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="/" className="social-icon-link linkedin" target="_blank" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
