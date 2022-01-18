import React from 'react';

function Footer() {
    return (
        <footer id="footer">
        <div id="Contact" class="media">
            <ul>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/djamz919" class="fab fa-github" aria-hidden="true"> </a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/daryll-munoz/" class="fab fa-linkedin" aria-hidden="true"> </a>
                </li>
                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/djmz919/" class="fab fa-instagram" aria-hidden="true"> </a></li>
                <li><a href="mailto:djtm97@gmail.com" class="fas fa-envelope" aria-hidden="true"> </a></li>
            </ul>
        </div>
        <div class="copyright">
            &copy; 2022 DARYLL MUNOZ
        </div>
    </footer>
    );
}

export default Footer;