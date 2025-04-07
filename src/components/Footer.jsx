import React from "react";
import { FOOTER } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__left">
                    <h3>{FOOTER.name}</h3>
                    <p>{FOOTER.title}</p>
                </div>
                <div className="footer__right">
                    <div className="footer__contact">
                        <h4>Contact</h4>
                        <p>Email: {FOOTER.email}</p>
                        <p>Phone: {FOOTER.phone}</p>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} {FOOTER.name}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;