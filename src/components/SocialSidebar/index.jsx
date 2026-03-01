import React from 'react';

const SocialSidebar = () => {
    return (
        <div className="social-sidebar-container">
            <div className="social-heading">Social Links</div>

            <a href="https://www.instagram.com/numansaleem_/" target="_blank" rel="noopener noreferrer" className="social-float-btn btn-ig group">
                <div className="social-icon-wrapper">
                    <i className="fab fa-instagram"></i>
                </div>
                <span className="social-text">Connect on Instagram</span>
            </a>

            <a href="https://www.facebook.com/numan.saleem.714842/" target="_blank" rel="noopener noreferrer" className="social-float-btn btn-fb group">
                <div className="social-icon-wrapper">
                    <i className="fab fa-facebook-f"></i>
                </div>
                <span className="social-text">Connect on Facebook</span>
            </a>

            <a href="https://www.linkedin.com/in/numan-saleem-4401b9289/" target="_blank" rel="noopener noreferrer" className="social-float-btn btn-li group">
                <div className="social-icon-wrapper">
                    <i className="fab fa-linkedin-in"></i>
                </div>
                <span className="social-text">Connect on LinkedIn</span>
            </a>
        </div>
    );
};

export default SocialSidebar;
