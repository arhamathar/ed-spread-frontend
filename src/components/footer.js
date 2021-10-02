import React from "react";
import SocialIconLinks from "./SocialIconLinks";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer class='bg-dark text-center text-white'>
                <div class='container p-4'>
                    <section class=''>
                        <div class='row'>
                            <div class='col-lg-6 col-md-12 mb-4 mb-md-0'>
                                <h5 class='text-uppercase'>Quick Links</h5>

                                <ul class='list-unstyled mb-0'>
                                    <li>
                                        <Link class='text-white' to='./home'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class='text-white' to='./courses'>
                                            courses
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class='text-white' to='./about'>
                                            About us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div class='col-lg-6 col-md-12 mb-4 mb-md-0'>
                                <h5 class='text-uppercase'>Contact us</h5>

                                <ul class='list-unstyled mb-0'>
                                    <li>Edspread2@gmail.com</li>
                                    <li>+91 78426 05842</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section class='mb-4'>
                        <p>Find us on</p>
                    </section>

                    <section class='mb-4'>
                        <SocialIconLinks href={""} icon={"fab fa-facebook"} />
                        <SocialIconLinks href={""} icon={"fab fa-twitter"} />
                        <SocialIconLinks href={""} icon={"fab fa-google"} />
                        <SocialIconLinks href={""} icon={"fab fa-instagram"} />
                        <SocialIconLinks href={""} icon={"fab fa-linkedin"} />
                        <SocialIconLinks href={""} icon={"fab fa-github"} />
                    </section>
                </div>

                <div class='text-center p-3'>© 2021 Copyright: Ed Spread</div>
            </footer>
        </div>
    );
};

export default Footer;
