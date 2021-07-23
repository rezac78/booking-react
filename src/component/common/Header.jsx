import React from 'react';
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <nav>
            <div className="navbar">
                <div className="right ml-4">
                    <h5 className="q1">GET</h5><br />
                    <h5 style={{ marginTop: "-40px" }} className="q2">YOUR</h5><br />
                    <h5 style={{ marginTop: "-40px" }} className="q3">GULDE</h5>
                </div>
                <div className="left">
                    <div className="dropdown icon5 mt-2 d-none d-lg-block">
                        <span className="dropdown-toggle" data-toggle="dropdown">English</span>
                        <div className="dropdown-menu mr-4">
                            <div style={{ width: "500px" }} className="dropdown-item-text tabled">
                                <h6 style={{ color: "#1A2B49" }}>Top currencies</h6>
                                <div className="but"><span></span></div>
                                <div className="contery">
                                    <div className="row">
                                        <div className="col-6 d-flex mt-2">
                                            <img style={{ width: "30px" }} src="/img/contry/1.jpg" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">Espanol</span>
                                        </div>
                                        <div className="col-6 d-flex mt-2">
                                            <img style={{ width: "30px" }} src="/img/contry/2.png" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">English</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 d-flex mt-4">
                                            <img style={{ width: "30px" }} src="/img/contry/3.jpg" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">Dansk</span>
                                        </div>
                                        <div className="col-6 d-flex mt-4">
                                            <img style={{ width: "30px" }} src="/img/contry/4.png" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">Deutsh</span>
                                        </div>
                                        <div className="col-6 d-flex mt-4">
                                            <img style={{ width: "30px" }} src="/img/contry/5.png" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">Italiano</span>
                                        </div>
                                        <div className="col-6 d-flex mt-4">
                                            <img style={{ width: "30px" }} src="/img/contry/6.jpg" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">English (UK)</span>
                                        </div>
                                        <div className="col-6 d-flex mt-4">
                                            <img style={{ width: "30px" }} src="/img/contry/7.png" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">Francais</span>
                                        </div>
                                        <div className="col-6 d-flex mt-4">
                                            <img style={{ width: "30px" }} src="/img/contry/8.png" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">Nederlands</span>
                                        </div>
                                        <div className="col-6 d-flex mt-4">
                                            <img style={{ width: "30px" }} src="/img/contry/1.jpg" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">Espanol</span>
                                        </div>
                                        <div className="col-6 d-flex mt-4">
                                            <img style={{ width: "30px" }} src="/img/contry/2.png" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">English</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 d-flex mt-4">
                                            <img style={{ width: "30px" }} src="/img/contry/3.jpg" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">Dansk</span>
                                        </div>
                                        <div className="col-6 d-flex mt-4">
                                            <img style={{ width: "30px" }} src="/img/contry/4.png" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">Deutsh</span>
                                        </div>
                                        <div className="col-6 d-flex mt-4">
                                            <img style={{ width: "30px" }} src="/img/contry/5.png" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">Italiano</span>
                                        </div>
                                        <div className="col-6 d-flex mt-4">
                                            <img style={{ width: "30px" }} src="/img/contry/6.jpg" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">English (UK)</span>
                                        </div>
                                        <div className="col-6 d-flex mt-4">
                                            <img style={{ width: "30px" }} src="/img/contry/7.png" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">Francais</span>
                                        </div>
                                        <div className="col-6 d-flex mt-4">
                                            <img style={{ width: "30px" }} src="/img/contry/8.png" alt="" />
                                            <span style={{ fontWeight: "bold" }} className="ml-2">Nederlands</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown icon5 mt-2 ml-3 d-none d-lg-block ">
                        <span className="dropdown-toggle" data-toggle="dropdown">USD (USS)</span>
                        <div className="dropdown-menu mr-4">
                            <div style={{ width: "500px" }} className="dropdown-item-text tabled ">
                                <h6 style={{ color: "#1A2B49" }}>Top currencies</h6>
                                <div className="but"><span></span></div>
                                <div className="row">
                                    <div style={{ fontSize: "1.1em" }} className="col-4">
                                        <table className="mt-2 text-right ">
                                            <tr className="mt-4">
                                                <td className="">U.S Dollar USS</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">Australian Dollar</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">All currencies</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="col-4" style={{ fontSize: "1.1em" }}>
                                        <table className="mt-2 text-right rreef">
                                            <tr className="mt-4">
                                                <td className="">Euro $</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">Swiss Franc CHF</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="col-4" style={{ fontSize: "1.1em" }}>
                                        <table className="mt-2 text-right rreef">
                                            <tr className="mt-4">
                                                <td className="">British Pound $</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">Canadian Dollar</td>
                                            </tr>

                                        </table>
                                    </div>
                                </div>
                                <div className="but mt-4"><span></span></div>
                                <div className="row">
                                    <div style={{ fontSize: "1.1em" }} className="col-4">
                                        <table className="mt-2 text-right ">
                                            <tr className="mt-4">
                                                <td className="">U.S Dollar USS</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">Australian Dollar</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">All currencies</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">U.S Dollar USS</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">Australian Dollar</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">All currencies</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">British Pound $</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">Canadian Dollar</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">U.S Dollar USS</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">Australian Dollar</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">All currencies</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="col-4" style={{ fontSize: "1.1em" }}>
                                        <table className="mt-2 text-right rreef">
                                            <tr className="mt-4">
                                                <td className="">Euro $</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">Swiss Franc CHF</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">U.S Dollar USS</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">Australian Dollar</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">All currencies</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">British Pound $</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">Canadian Dollar</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">U.S Dollar USS</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">Australian Dollar</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">All currencies</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="col-4" style={{ fontSize: "1.1em" }}>
                                        <table className="mt-2 text-right rreef">
                                            <tr className="mt-4">
                                                <td className="">British Pound $</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">Canadian Dollar</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">U.S Dollar USS</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">Australian Dollar</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">All currencies</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">British Pound $</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">Canadian Dollar</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">U.S Dollar USS</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">Australian Dollar</td>
                                            </tr>
                                            <tr className="mt-4">
                                                <td className="">All currencies</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="icon4 mt-2 ml-3 d-flex">
                        <i className="fas fa-heart mt-1 mr-1"></i>
                        <span className="d-none d-md-block">Wishlist</span>
                    </div>
                    <div className="icon3 mt-2 ml-3 d-flex">
                        <i className="fas fa-shopping-cart mt-1 mr-1"></i>
                        <span className="d-none d-md-block">Cart</span>
                    </div>
                    <div className="icon2 mt-2 ml-3 d-flex">
                        <i className="far fa-question-circle mt-1 mr-1"></i>
                        <span className="d-none d-md-block">Help</span>
                    </div>
                    <div className="mt-2 ml-3 d-flex dropdown">
                        <i className="fas fa-user mt-1 mr-1"></i>
                        {/* <span className="d-none d-md-block" data-toggle="dropdown">Log in</span> */}
                        <NavLink to="/login" activeStyle={{color:"silver"}} style={{color:"black"}} className="d-none d-md-block text-decoration-none" >Log in</NavLink>
                        <i className="fas fa-sort-down ml-1 mt-1"></i>
                        <div className="dropdown-menu mr-4">
                            <div className="dropdown-item">
                                <a className="" data-toggle="modal" data-target="#mymodal"><i style={{ color: "#00AA71" }}
                                    className="fas fa-user"><span style={{ color: "black" }} className="ml-3">Log in</span></i></a>
                            </div>
                            <div className="dropdown-item">
                                <i style={{ color: "#FF8C41" }} className="fas fa-clock"><span style={{ color: "black" }}
                                    className="ml-3">History</span></i>
                            </div>
                            <div className="dropdown-item">
                                <i style={{ color: "#FFD1D7" }} className="fas fa-mobile-alt"><span style={{ color: "black" }}
                                    className="ml-4">Download The app</span></i>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/register">
                    <input className="ml-3 mr-5 d-none d-lg-block" type="submit" value="Sign up" />
                    </NavLink>
                </div>
            </div>
            <div className="modal" id="mymodal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header d-inline-block text-center">
                            <h4 style={{ fontWeight: "bold", color: "#1A2B49" }}>Log in to GetYourGuide</h4>
                            <p style={{ color: "#44526B", fontSize: "1.2em" }}>Log in ti add things to your wishlist and
                                access <br />your boohings from any device.</p>
                            <button className="close" type="button" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <div className="facebook ml-4">
                                <i className="fab fa-facebook-f mt-2"></i>
                                <input className="mt-2" type="submit" value="Continue with Facebook" />
                            </div>
                            <div className="google mt-3 ml-4">
                                <i className="fab fa-google"></i>
                                <input className="mt-2" type="submit" value="Continue with Google" />
                            </div>
                            <div className="apple mt-3 ml-4">
                                <i className="fab fa-apple"></i>
                                <input className="mt-2" type="submit" value="Continue with Google" />
                            </div>
                            <div style={{ color: "#C6C8D0!important;" }} className="but mt-4"><span
                                style={{ position: "relative", top: "7px", fontSize: "1.4em" }}>or</span><span></span></div>
                            <div className="email mt-3 ml-4">
                                <input className="form-control" type="text" placeholder="Email address" />
                            </div>
                            <div className="email mt-2 ml-4">
                                <input className="form-control" type="password" placeholder="Password" />
                            </div>
                            <div className="twin">
                                <div className="check-box mt-2 ml-4">
                                    <input type="checkbox" />
                                    <label for="remember me">Remember me</label>
                                </div>
                                <div className="forget mt-2 mr-5">
                                    <a href=""><span>Forgat your password?</span></a>
                                </div>
                            </div>
                            <div className="submit mt-2 text-center">
                                <input className="submit" type="submit" value="Log In" />
                            </div>
                            <div style={{ color: "#C6C8D0!important" }}
                                className="but mt-4"><span></span></div>
                            <div className="twin2 text-center">
                                <div className="check-box mt-2">
                                    <span>New here?</span>
                                </div>
                                <div className="forget mt-2">
                                    <a href=""><span>Create an account</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;