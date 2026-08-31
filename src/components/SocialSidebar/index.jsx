import React from 'react';

const SocialSidebar = () => {
    return (
        <div className="social-sidebar-container">
            <div className="social-heading">Contact Links</div>

            <a href="https://wa.me/923044005650" target="_blank" rel="noopener noreferrer" className="social-float-btn btn-wa group">
                <div className="social-icon-wrapper">
                    <i className="fab fa-whatsapp"></i>
                </div>
                <span className="social-text">Chat on WhatsApp</span>
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Faryad228@gmail.com" target="_blank" rel="noopener noreferrer" className="social-float-btn btn-mail group">
                <div className="social-icon-wrapper">
                    <i className="fas fa-envelope"></i>
                </div>
                <span className="social-text">Send an Email</span>
            </a>

            <a href="tel:+923044005650" className="social-float-btn btn-call group">
                <div className="social-icon-wrapper">
                    <i className="fas fa-phone"></i>
                </div>
                <span className="social-text">Call 0304-4005650</span>
            </a>
        </div>
    );
};

export default SocialSidebar;
