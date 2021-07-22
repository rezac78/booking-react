import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#1A2B49" }}>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-6  mt-4">
                        <div className="z1">
                            <div className="z2">
                                <span>Language</span>
                                <input type="text" className="form-control" placeholder="English (United States)" />
                                <span>Currency</span>
                                <input type="text" className="form-control" placeholder="Euro ($)" />
                            </div>
                            <div className="z4"><span style={{ color: "white", fontWeight: "bold" }}>Mobile</span></div>
                            <div className="z3">
                                <img src="/img/phone/1.svg" alt="" />
                                <img src="/img/phone/3.svg" alt="" />
                            </div>
                        </div>
                        <div className="z5"><span>© 2008 – 2020 GetYourGuide. Made in Zurich & Berlin.</span></div>
                    </div>
                    <div className="col-lg-3 col-md-3  mt-4">
                        <div className="z6">
                            <table>
                                <thead>
                                    <tr>
                                        <td>Support</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="mt-5">
                                        <td>Contact</td>
                                    </tr>
                                    <tr>
                                        <td>Legal</td>
                                    </tr>
                                    <tr>
                                        <td>Privacy Policy</td>
                                    </tr>
                                    <tr>
                                        <td>Terms of Use</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table >
                                <thead>
                                    <tr>
                                        <td>Company</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="mt-5">
                                        <td>About Us</td>
                                    </tr>
                                    <tr>
                                        <td>Coreers</td>
                                    </tr>
                                    <tr>
                                        <td>Blog</td>
                                    </tr>
                                    <tr>
                                        <td>Press</td>
                                    </tr>
                                    <tr>
                                        <td>Gift Cards</td>
                                    </tr>
                                    <tr>
                                        <td>Magazine</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3  mt-4">
                        <div className="z7 text-center">
                            <span>Work With Us</span>
                            <div className="z8">
                                <a href="">Supplier Administration</a>
                            </div>
                            <div className="z9">
                                <a href="">Affiliate Partner <br />Administration</a>
                            </div>
                            <div className="z0">
                                <span>Ways You Can Pay</span>
                            </div>
                            <div className="z11">
                                <img src="/img/box/1.svg" alt="" />
                                <img src="/img/box/2.svg" alt="" />
                                <img src="/img/box/3.svg" alt="" />
                                <img src="/img/box/4.svg" alt="" />
                                <img src="/img/box/5.svg" alt="" />
                                <img src="/img/box/6.svg" alt="" />
                                <img src="/img/box/7.svg" alt="" />
                                <img src="/img/box/8.svg" alt="" />
                                <img src="/img/box/9.svg" alt="" />
                                <img src="/img/box/10.svg" alt="" />
                                <img src="/img/box/11.svg" alt="" />
                                <img src="/img/box/12.svg" alt="" />
                            </div>
                            <div className="z12">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-pinterest-p"></i>
                                <i className="fab fa-invision"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;