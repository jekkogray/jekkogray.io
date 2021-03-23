import React, { Component } from "react";

function Footer() {
    return (
        <footer>
            <nav>
                <ul className="follow">
                    <li>
                        <a href="https://github.com/jekkogray">
                            @jekkogray <br />
                            <i className="fa fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jekko-syquia-850026163/">
                            Jekko Syquia <br />
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/jekkogray/">
                            @jekkogray <br />
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
