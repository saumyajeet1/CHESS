import React from 'react';
import hexa from "../images/hexa.png"
import "../main/bootstrap.css"
import "../main/fonts.css"
import "../main/style.css"
import "../main/n.css"
const Footer = () => {
    return (
        <footer className="section footer-classic section-sm">
        <div className="container">
          <div className="row row-30">
            <div className="col-lg-3 wow fadeInLeft">
             <a className="brand" href="index.html"><img className="brand-logo-dark" src={hexa} alt="" width="100" height="17"/><img className="brand-logo-light" src={hexa} style={{objectFit:"cover"}} alt="" width="100" height="17"/></a>
              <p className="footer-classic-description offset-top-0 offset-right-25">CHESS is a student's society at NIT Durgapur.</p>
            </div>
            <div className="col-lg-3 col-sm-8 wow fadeInUp">
              <p className="footer-classic-title">contact info</p>
              <div className="d-block offset-top-0">Durgapur, West Bengal<span className="d-lg-block">Durgapur, India</span></div><a className="d-inline-block accent-link" href="mailto:#">chessnitd2020@gmail.com</a><a className="d-inline-block" href="tel:#">xxxxxxxxxxx</a>
             </div>
            <div className="col-lg-2 col-sm-4 wow fadeInUp" data-wow-delay=".3s">
              <p className="footer-classic-title">Quick Links</p>
              <ul className="footer-classic-nav-list">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">Facad</a></li>
                <li><a href="#">Members</a></li>
                <li><a href="#">Blog</a></li>

              </ul>
            </div>
            <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".2s">
              <p className="footer-classic-title">newsletter</p>
              <form className="rd-mailform text-left footer-classic-subscribe-form" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                <div className="form-wrap">
                  <label className="form-label" for="subscribe-email">Your Email Address</label>
                  <input className="form-input" id="subscribe-email" type="email" name="email" data-constraints="@Email @Required"/>
                </div>
                <div className="form-button group-sm text-center text-lg-left">
                  <button className="button button-primary button-circle" type="submit">sign up</button>
                </div>
              </form>
              <p>Be the first to find out about our latest news, updates, and special offers.</p>
            </div>
          </div>
        </div>
        <div className="container wow fadeInUp" data-wow-delay=".4s">
          <div className="footer-classic-aside">
            <p className="rights"><span>&copy;&nbsp;</span><span className="copyright-year"></span>. All Rights Reserved. Design by <a href="https://www.templatemonster.com">TemplateMonster</a></p>
            <ul className="social-links">
              <li><a className="fa fa-linkedin" href="https://in.linkedin.com/company/chemical-engineering-students-society-nit-durgapur?trk=public_profile_experience-item_profile-section-card_image-click"></a></li>
              <li><a className="fa fa fa-twitter" href="#"></a></li>
              <li><a className="fa fa-facebook" href="https://www.facebook.com/Chessnitd"></a></li>
              <li><a className="fa fa-instagram" href="#"></a></li>
            </ul>
          </div>
        </div>
      </footer>

    );
};

export default Footer;