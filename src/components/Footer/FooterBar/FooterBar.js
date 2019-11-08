import React from 'react';
import '@fortawesome/fontawesome-free';

import './FooterBar.css';

const footerBar = () => {
    return(
        <div className="footerBar">
            <ul>
                <li><a className="linkedIn" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ivan-vezhnavets-271231185/"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a className="github" rel="noopener noreferrer" target="_blank" href="https://github.com/whitestranger7"><i className="fab fa-github"></i></a></li>
                <li><a className="codewars" rel="noopener noreferrer" target="_blank" href="https://www.codewars.com/users/whitestranger7"><span class="iconify" data-icon="simple-icons:codewars" data-inline="false"></span></a></li>
                <li><a className="facebook" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100007050428081"><i className="fab fa-facebook-f"></i></a></li>
                <li><a className="instagram" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/whitestranger7/"><i className="fab fa-instagram"></i></a></li>
            </ul>
            <p>{'Created & designed by Ivan Vezhnavets'}</p>
        </div>
    )
}

export default footerBar;