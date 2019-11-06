import React from 'react';
import '@fortawesome/fontawesome-free';

import './FooterBar.css';

const footerBar = () => {
    return(
        <div className="footerBar">
            <ul>
                <li><a href="/#"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="/#"><i className="fab fa-github"></i></a></li>
                <li><a href="/#"><i className="fas fa-code"></i></a></li>
                <li><a href="/#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="/#"><i className="fab fa-instagram"></i></a></li>
            </ul>
            <p>{'Created & designed by Ivan Vezhnavets'}</p>
        </div>
    )
}

export default footerBar;