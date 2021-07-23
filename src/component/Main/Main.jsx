import React from 'react';

const Main = () => {
    return (
        <React.Fragment>
            <div className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100 h-100 d-block zare" src="/img/carousel/1.jpg" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-100 h-100 d-block zare" src="/img/carousel/2.jpg" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-100 h-100 d-block zare" src="/img/carousel/3.jpg" alt="" />
                    </div>
                </div>
                <div>
                    <div className=" carousel-caption matn">
                        <h2>Book tours, activities, and attractions<br />anywhere</h2>
                        <div className="boxbid">
                            <form action="">
                                <input className="mr-2 input" type="text" placeholder="Dubai,Paris" />
                                <input className="mr-1 input2" type="date" />
                                <input className="ml-1 input3" type="date" />
                                <input className="ml-3 sdsd input4" type="submit" value="Search" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <main>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-lg-4 col-sm-12 col-md-4">
                            <div className="boxcard text-center">
                                <div className="heart"><i className="fas fa-thumbs-up"></i></div>
                                <div className="font">
                                    <h5>Free cancellation</h5>
                                </div>
                                <p className="fo" style={{ color: "#6D8BBA" }}>were standing by24/7 to make your <br />experince incredible
                                    Reach us by phone <br />email or
                                    WhatsApp</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-4">
                            <div className="boxcard text-center">
                                <div className="heart"><i className="fas fa-history"></i></div>
                                <div className="font">
                                    <h5>Faster access</h5>
                                </div>
                                <p className="fo" style={{ color: "#6D8BBA" }}>were standing by24/7 to make your <br />experince incredible
                                    Reach us by phone <br />email or
                                    WhatsApp</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-4">
                            <div className="boxcard text-center">
                                <div className="heart"><i className="far fa-heart"></i></div>
                                <div className="font">
                                    <h5>Friendly help</h5>
                                </div>
                                <p className="fo" style={{ color: "#6D8BBA" }}>were standing by24/7 to make your <br />experince incredible
                                    Reach us by phone <br />email or
                                    WhatsApp</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main2">
                    <form action="">
                        <div className="headname text-center mt-3 pt-4"><span>Explore our top destinations</span></div>
                        <div className="input8 text-center mt-3">
                            <input style={{ backgroundColor: "#00AA71", color: "white", border: "none" }} className="in1 text-center"
                                type="text" value="Amsterdom" />
                            <input className="in2 text-center" type="text" value="Barcelona" />
                            <input className="in3 text-center" type="text" value="Berlin" />
                            <input className="in4 text-center" type="text" value="Dubai" />
                            <input className="in5 text-center" type="text" value="London" />
                            <input className="in6 text-center" type="text" value="New York City" />
                            <input className="in7 text-center" type="text" value="Paris" />
                            <input className="in8 text-center" type="text" value="Rome" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 mt-5 pr-5">
                                    <div className="img1"><img className="d-flex" src="/img/svg/92.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mt-1">
                                    <div className="headname2 text-center mt-3 pt-4"><span>Amsterdam</span></div>
                                    <div className="matn2">
                                        <p>From kayaking the iconic canals to discovering its world-famous art tradition,
                                            exploring Amsterdam can feel like walking through a dream. Find the best things to
                                            do and make the most of your visit to the Dutch capital.</p>
                                    </div>
                                    <div className="input9  d-flex">
                                        <div className="inpt1 d-flex">
                                            <img src="/img/svg/2.svg" alt="" />
                                            <input type="submit" value="Sightseeing tours" />
                                        </div>
                                        <div className="inpt2 ml-2 d-flex text-center">
                                            <img src="/img/svg/172.svg" alt="" />
                                            <input type="submit" value="Day trips" />
                                        </div>
                                        <div className="inpt3 ml-2 d-flex">
                                            <img src="/img/svg/21.svg" alt="" />
                                            <input type="submit" value="Local culfure" />
                                        </div>
                                    </div>
                                    <div className="input9  d-flex">
                                        <div className="inpt4 mt-2 d-flex">
                                            <img src="/img/svg/48.svg" alt="" />
                                            <input type="submit" value="Boot tours" />
                                        </div>
                                        <div className="inpt5 mt-2 ml-2 d-flex text-center">
                                            <img src="/img/svg/123.svg" alt="" />
                                            <input type="submit" value="Attraction tickets" />
                                        </div>
                                        <div className="inpt6 mt-2 ml-2 d-flex">
                                            <img src="/img/svg/35.svg" alt="" />
                                            <input type="submit" value="Nature & adventure" />
                                        </div>
                                    </div>
                                    <div className="input9  d-flex">
                                        <div className="inpt7 mt-2 d-flex">
                                            <img src="/img/svg/103.svg" alt="" />
                                            <input type="submit" value="Food & drink" />
                                        </div>
                                        <div className="inpt8 mt-2 ml-2 d-flex text-center">
                                            <img src="/img/svg/152.svg" alt="" />
                                            <input type="submit" value="Transportation" />
                                        </div>
                                        <div className="inpt9 mt-2 ml-2 d-flex">
                                            <img src="/img/svg/101.svg" alt="" />
                                            <input type="submit" value="City cards" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="headname3 mt-3 pt-4"><span>Unmissable sights and activities</span></div>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
                                    <div className="card rezacard">
                                        <div className="r-img"><img className="card-img-top" src="/img/card/2.jpg"
                                            alt="" /></div>
                                        <div className="mark"><i className="far fa-heart"></i></div>
                                        <div className="mark2"><input type="submit" value="CRULSE" /></div>
                                        <div className="card-body">
                                            <div className="mat"><span>Amsterdam: Canal Day Cruise</span></div>
                                            <div className="mat2 mt-2">
                                                <i className="fas fa-running"></i>
                                                <span>Skip the line through a separate entrance</span>
                                            </div>
                                            <div className="mat3 ">
                                                <i className="fas fa-history"></i>
                                                <span>Duration: 75 minutes</span>
                                            </div>
                                            <div className="mat4 ">
                                                <i className="fas fa-pause"></i>
                                                <span>Optional audio guide</span>
                                            </div>
                                            <div className="mat6">
                                                <span>From</span>
                                            </div>
                                            <div className="mat5 mt-4">
                                                <div className="left4">
                                                    <div className="star">
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "rgb(187, 184, 184)" }} className="fas fa-star"></i>
                                                        <span>4.4</span>
                                                    </div>
                                                </div>
                                                <div className="right4">
                                                    <span>$13.65</span>
                                                </div>
                                            </div>
                                            <div className="mat7 ">
                                                <div className="left5">
                                                    <span>54 Reviews</span>
                                                </div>
                                                <div className="right5">
                                                    <span>per person</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
                                    <div className="card rezacard">
                                        <div className="r-img"><img className="card-img-top" src="/img/card/3.jpg"
                                            alt="" /></div>
                                        <div className="mark"><i className="far fa-heart"></i></div>
                                        <div className="mark2"><input type="submit" value="CRULSE" /></div>
                                        <div className="card-body">
                                            <div className="mat"><span style={{ fontSize: "13.5px" }}>Amsterdam: Evening Canal
                                                Cruise</span></div>
                                            <div className="mat2 mt-2">
                                                <i className="fas fa-running"></i>
                                                <span>Skip the line through a separate entrance</span>
                                            </div>
                                            <div className="mat3 ">
                                                <i className="fas fa-history"></i>
                                                <span>Duration: 1.5 hours</span>
                                            </div>
                                            <div className="mat4 ">
                                                <i className="fas fa-pause"></i>
                                                <span>Optional audio guide</span>
                                            </div>
                                            <div className="mat6">
                                                <span>From</span>
                                            </div>
                                            <div className="mat5 manman mt-4">
                                                <div className="left4 lef4t ">
                                                    <div className="star">
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "rgb(187, 184, 184)" }} className="fas fa-star"></i>
                                                        <span>4.4</span>
                                                    </div>
                                                </div>
                                                <div className="right4 lef5t">
                                                    <span>$18</span>
                                                </div>
                                            </div>
                                            <div className="mat7 manman">
                                                <div className="left5">
                                                    <span>37 Reviews</span>
                                                </div>
                                                <div className="right5">
                                                    <span>per person</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
                                    <div className="card rezacard">
                                        <div className="r-img"><img className="card-img-top" src="/img/card/5.jpg"
                                            alt="" /></div>
                                        <div className="mark"><i className="far fa-heart"></i></div>
                                        <div className="mark3"><input type="submit" value="GULDED TOUR" /></div>
                                        <div className="card-body">
                                            <div className="mat"><span>Amsterdam: Life of Anne Frank and World war II walking
                                                Tour</span></div>
                                            <div className="mat3 mt-2 ">
                                                <i className="fas fa-history"></i>
                                                <span>Duration: 2 hours</span>
                                            </div>
                                            <div className="mat6">
                                                <span>From</span>
                                            </div>
                                            <div className="mat8 mt-5">
                                                <div className="left7 ">
                                                    <div className="star">
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "rgb(187, 184, 184)" }} className="fas fa-star"></i>
                                                        <span>4.8</span>
                                                    </div>
                                                </div>
                                                <div className="right7">
                                                    <span>$28.50</span>
                                                </div>
                                            </div>
                                            <div className="mat7 ">
                                                <div className="left5">
                                                    <span>471 Reviews</span>
                                                </div>
                                                <div className="right5">
                                                    <span>per person</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
                                    <div className="card rezacard">
                                        <div className="r-img"><img className="card-img-top" src="/img/card/1.jpg"
                                            alt="" /></div>
                                        <div className="mark"><i className="far fa-heart"></i></div>
                                        <div className="mark2"><input type="submit" value="CRULSE" /></div>
                                        <div className="card-body">
                                            <div className="mat"><span>Amsterdam: Luxury Canal Cruise</span></div>
                                            <div className="mat2 mt-2">
                                                <i className="fas fa-running"></i>
                                                <span>Skip the ticket line</span>
                                            </div>
                                            <div className="mat3 ">
                                                <i className="fas fa-history"></i>
                                                <span>Duration: 1 hour</span>
                                            </div>
                                            <div className="mat6">
                                                <span>From</span>
                                            </div>
                                            <div className="mat5 mt-4">
                                                <div className="left8 ">
                                                    <div className="star">
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "rgb(187, 184, 184)" }} className="fas fa-star"></i>
                                                        <span>4.8</span>
                                                    </div>
                                                </div>
                                                <div className="right8">
                                                    <span>$18</span>
                                                </div>
                                            </div>
                                            <div className="mat7 ">
                                                <div className="left5">
                                                    <span>302 Reviews</span>
                                                </div>
                                                <div className="right5">
                                                    <span>per person</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="headname3 mt-3 pt-4"><span>Extraordinary things to do</span></div>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
                                    <div className="card rezacard ">
                                        <div className="r-img"><img className="card-img-top" src="/img/card/6.jpg"
                                            alt="" /></div>
                                        <div className="mark"><i className="far fa-heart"></i></div>
                                        <div className="mark4"><input type="submit" value="ENTRY TICKET" /></div>
                                        <div className="card-body">
                                            <div className="mat"><span>Amsterdam: Cheese Tasting by Henri wilig with wine</span>
                                            </div>
                                            <div className="mat3 ">
                                                <i className="fas fa-history"></i>
                                                <span>Duration: 45 minutes</span>
                                            </div>
                                            <div className="mat6">
                                                <span>From</span>
                                            </div>
                                            <div className="mat5 mt-4">
                                                <div className="left9">
                                                    <div className="star">
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "rgb(187, 184, 184)" }} className="fas fa-star"></i>
                                                        <span>4.7</span>
                                                    </div>
                                                </div>
                                                <div className="right9">
                                                    <span>$17.50</span>
                                                </div>
                                            </div>
                                            <div className="mat7 ">
                                                <div className="left">
                                                    <span>359 Reviews</span>
                                                </div>
                                                <div className="right5">
                                                    <span>per person</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
                                    <div className="card rezacard">
                                        <div className="r-img"><img className="card-img-top" src="/img/card/4.jpg"
                                            alt="" /></div>
                                        <div className="mark"><i className="far fa-heart"></i></div>
                                        <div className="mark2"><input type="submit" value="CRULSE" /></div>
                                        <div className="card-body">
                                            <div className="mat"><span style={{ fontSize: "13.5px" }}>Amsterdam: Noture Resrtve Kayak &
                                                Giethoorn Boat Ride</span></div>
                                            <div className="mat2 mt-2">
                                                <i className="fas fa-running"></i>
                                                <span>Small group</span>
                                            </div>
                                            <div className="mat4 ">
                                                <i className="fas fa-pause"></i>
                                                <span>Transportation incliuded</span>
                                            </div>
                                            <div className="mat3 ">
                                                <i className="fas fa-history"></i>
                                                <span>Duration: 8 hours</span>
                                            </div>
                                            <div className="mat6">
                                                <span>From</span>
                                            </div>
                                            <div className="mat5 mt-4">
                                                <div className="left4 ">
                                                    <div className="star">
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <i style={{ color: "gold" }} className="fas fa-star"></i>
                                                        <span>5</span>
                                                    </div>
                                                </div>
                                                <div className="right4">
                                                    <span>$149</span>
                                                </div>
                                            </div>
                                            <div className="mat7 ">
                                                <div className="left5">
                                                    <span>1 Reviews</span>
                                                </div>
                                                <div className="right5">
                                                    <span>per person</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container text-center mt-5">
                            <div className="center"><input className="text-center" type="text"
                                value="Find more activities in Amsterdam" /></div>
                        </div>
                        <div className="container">
                            <div className="headname3 mt-3 pt-4"><span>Amsterdams most iconic sights</span></div>
                            <div className="row mt-4">
                                <div className="col-lg-4 col-md-4">
                                    <div className="card alireza">
                                        <img src="/img/card2/1.jpg" alt="" />
                                        <div className="capp text-center">
                                            <div className="cap"><span>Magere Brug</span></div>
                                            <div className="cap2 t"><input className="text-center" type="text"
                                                value="26 tours & activities" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card alireza">
                                        <img src="/img/card2/2.jpg" alt="" />
                                        <div className="capp text-center">
                                            <div className="cap"><span>Grachtengordel</span></div>
                                            <div className="cap2 t"><input className="text-center" type="text"
                                                value="37 tours & activities" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card alireza">
                                        <img src="/img/card2/3.jpg" alt="" />
                                        <div className="capp1 text-center">
                                            <div className="cap"><span>Heineken Experience</span></div>
                                            <div className="cap2"><input className="text-center" type="text"
                                                value="11 tours & activities" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="headname3 mt-3 pt-4"><span>Amsterdams on Instagram</span></div>
                            <div className="row mt-4">
                                <div className="col-lg-3 col-md-4">
                                    <div className="card ali">
                                        <img src="/img/card2/4.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="card ali">
                                        <img src="/img/card2/5.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="card ali">
                                        <img src="/img/card2/6.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="card ali">
                                        <img src="/img/card2/7.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
            <main>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-8 col-md-6 ">
                            <div className="headname4 ">
                                <div className="logo d-none d-sm-block"><img src="/img/phone/2.svg" alt="" />
                                </div>
                                <div className="namelogo">
                                    <h4 style={{ color: "#1A2B49" }}>Your ultimate travel companion</h4>
                                    <p style={{ color: "#6D7688" }}>Book in advance or last-minute with GetYourGuide. Receive <br />
                                        instant confirmation. Access your booking info offline.</p>
                                </div>
                            </div>
                            <div className="headname5">
                                <div className="us d-none d-sm-block">
                                    <h6>Send a link to your mobile phone</h6>
                                    <div className="us2 ">
                                        <input className="one" type="number" placeholder="+98" />
                                        <input className="two" type="text" />
                                        <input className="three" type="submit" value="Send" />
                                    </div>
                                </div>
                                <div className="barcod d-none d-sm-block">
                                    <h6>Scan the QR code</h6>
                                    <img src="/img/phone/5.png" alt="" />
                                </div>
                            </div>
                            <div className="headname6">
                                <div className="us3">
                                    <h6 className="d-none d-sm-block">Download The app</h6>
                                    <div className="poop">
                                        <img src="/img/phone/3.svg" alt="" />
                                        <img className="poop2 ml-3" src="/img/phone/1.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-none d-sm-block">
                            <div className="phone-number"><img src="/img/phone/4.png" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row sogand mt-5">
                        <div className="col-lg-6 col-md-6">
                            <div className="el">
                                <img className="d-none d-sm-block" src="/img/1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 em6">
                            <div className="em">
                                <h2>Wish you were there</h2>
                            </div>
                            <div className="em2">
                                <p>Sign up for our newsletter and discover travel experiences you’ll really br want to try.</p>
                            </div>
                            <div className="em3">
                                <div className="em5"><input type="email" placeholder="Your email" className="form-control mr-1" /></div>
                                <input className="em4" type="submit" value="Sing up" />
                            </div>
                        </div>
                    </div>
                    <div className="em7"><span>By signing up, you agree to receive promotional emails. You can unsubscribe at any
                        time. For more information, read our <a href="">Privacy statement.</a></span></div>
                </div>
                <div className="container mt-5  dragble-list">
                    <div className="headname7 text-center"><span>Top destinations</span></div>
                    <div id="owl-product" className="owl-carousel owl-item ">
                        <div className="item">
                            <div className="card alireza2">
                                <img src="/img/bar/1.jpg" alt="" />
                                <div className="capt text-center">
                                    <div className="cap"><span>Paris</span></div>
                                    <div className="cap2 t"><input className="text-center" type="text" value="737 tours & activities" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card alireza2">
                                <img src="/img/bar/3.jpg" alt="" />
                                <div className="capt text-center">
                                    <div className="cap"><span>Dubai</span></div>
                                    <div className="cap2 t"><input className="text-center" type="text" value="26 tours & activities" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card alireza2">
                                <img src="/img/bar/4.jpg" alt="" />
                                <div className="capt text-center">
                                    <div className="cap"><span>Rome</span></div>
                                    <div className="cap2 t"><input className="text-center" type="text" value="1343 tours & activities" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card alireza2">
                                <img src="/img/bar/5.jpg" alt="" />
                                <div className="capt text-center">
                                    <div className="cap"><span>London</span></div>
                                    <div className="cap2 t"><input className="text-center" type="text" value="785 tours & activities" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card alireza2">
                                <img src="/img/bar/6.jpg" alt="" />
                                <div className="capt text-center">
                                    <div className="cap"><span>New York City</span></div>
                                    <div className="cap2 t"><input className="text-center" type="text" value="571 tours & activities" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card alireza2">
                                <img src="/img/bar/7.jpg" alt="" />
                                <div className="capt text-center">
                                    <div className="cap"><span>Barcelona</span></div>
                                    <div className="cap2 t"><input className="text-center" type="text" value="663 tours & activities" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card alireza2">
                                <img src="/img/bar/8.jpg" alt="" />
                                <div className="capt text-center">
                                    <div className="cap"><span>Reykjavik</span></div>
                                    <div className="cap2 t"><input className="text-center" type="text" value="337 tours & activities" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card alireza2">
                                <img src="/img/bar/9.jpg" alt="" />
                                <div className="capt text-center">
                                    <div className="cap"><span>Florence</span></div>
                                    <div className="cap2 t"><input className="text-center" type="text" value="628 tours & activities" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card alireza2">
                                <img src="/img/bar/2.jpg" alt="" />
                                <div className="capt text-center">
                                    <div className="cap"><span>Amsterdom</span></div>
                                    <div className="cap2 t"><input className="text-center" type="text" value="502 tours & activities" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card alireza2">
                                <img src="/img/bar/10.jpg" alt="" />
                                <div className="capt text-center">
                                    <div className="cap"><span>New Orleans</span></div>
                                    <div className="cap2 t"><input className="text-center" type="text" value="122 tours & activities" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="headname7 text-center"><span>Top attraction categories</span></div>
                    <div className="row mt-5">
                        <div className="">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="1" />
                                <input className="one-two text-center" type="text" value="Dubai Sky Diving" />
                            </div>
                        </div>
                        <div className="">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="2" />
                                <input className="one-two text-center" type="text" value="Rome City Cards" />
                            </div>
                        </div>
                        <div className="three-paris">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="3" />
                                <input className="one-three text-center" type="text" value="Paris Cruises & Boot Tours" />
                            </div>
                        </div>
                        <div className="one-new-yo three-paris">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="4" />
                                <input className="one-four text-center" type="text" value="New York City City Cards" />
                            </div>
                        </div>
                        <div className="one-new three-paris">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="5" />
                                <input className="one-five text-center" type="text" value="New Orleans Ghost & Vampire Tous" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one  text-center" type="text" value="6" />
                                <input className="one-four text-center" type="text" value="New Orleans Walking Tour" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="7" />
                                <input className="one-four text-center" type="text" value="New Orleans City Cards" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="8" />
                                <input className="one-four text-center" type="text" value="Rome Museum Tickets" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="9" />
                                <input className="one-four text-center" type="text" value="New York City Museum Tickets" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="10" />
                                <input className="one-four text-center" type="text" value="New Orleans Museum Tickets" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="11" />
                                <input className="one-two text-center" type="text" value="Dubai Sky Diving" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="12" />
                                <input className="one-two text-center" type="text" value="Rome City Cards" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="13" />
                                <input className="one-three text-center" type="text" value="Paris Cruises & Boot Tours" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="14" />
                                <input className="one-four text-center" type="text" value="New York City City Cards" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="15" />
                                <input className="one-five text-center" type="text" value="New Orleans Ghost & Vampire Tous" />
                            </div>
                        </div>
                        <div className="mt-3">/
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="16" />
                                <input className="one-four text-center" type="text" value="New Orleans Walking Tour" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">/
                                <input className="one-one text-center" type="text" value="17" />
                                <input className="one-four text-center" type="text" value="New Orleans City Cards" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="18" />
                                <input className="one-four text-center" type="text" value="Rome Museum Tickets" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="19" />
                                <input className="one-four text-center" type="text" value="New York City Museum Tickets" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="20" />
                                <input className="one-four text-center" type="text" value="New Orleans Museum Tickets" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="21" />
                                <input className="one-two text-center" type="text" value="Dubai Sky Diving" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="22" />
                                <input className="one-two text-center" type="text" value="Rome City Cards" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="23" />
                                <input className="one-three text-center" type="text" value="Paris Cruises & Boot Tours" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="24" />
                                <input className="one-four text-center" type="text" value="New York City City Cards" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="25" />
                                <input className="one-five text-center" type="text" value="New Orleans Ghost & Vampire Tous" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="26" />
                                <input className="one-four text-center" type="text" value="New Orleans Walking Tour" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="27" />
                                <input className="one-four text-center" type="text" value="New Orleans City Cards" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="28" />
                                <input className="one-four text-center" type="text" value="Rome Museum Tickets" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="29" />
                                <input className="one-four text-center" type="text" value="New York City Museum Tickets" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="30" />
                                <input className="one-four text-center" type="text" value="New Orleans Museum Tickets" />
                            </div>
                        </div>
                        <div className="mt-3 redmin one-Atla">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="31" />
                                <input className="one-two text-center" type="text" value="Atlanta City Cards" />
                            </div>
                        </div>
                        <div className="mt-3 ">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="32" />
                                <input className="one-three text-center" type="text" value="Amsterdam Museum Tickets" />
                            </div>
                        </div>
                        <div className="mt-3 ">
                            <div className="one-part">
                                <input className="one-one text-center" type="text" value="33" />
                                <input className="one-four text-center" type="text" value="Amsterdam City Cards" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </React.Fragment>
    )
}

export default Main;