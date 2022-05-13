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
            <a className="brand" href="./"><img className="brand-logo-dark" src={hexa} alt="" width="100" height="16" /><img className="brand-logo-light" src={hexa} style={{ objectFit: "cover" }} alt="" width="100" height="17" /></a>
            <p className="footer-classic-description offset-top-0" style={{ color: "white", fontSize: "12px" }}>CHESS is a student's society at NIT Durgapur.</p>
          </div>
          <div className="col-lg-3 col-sm-8 wow fadeInUp">
            <p className="footer-classic-title" style={{ color: "white" }}>Contact Info</p>
            <div className="d-block offset-top-0">
              Durgapur, West Bengal
              <span className="d-lg-block">Durgapur, India</span>
            </div>
            <a href="mailto:chessnitd2020@gmail.com" className="d-inline-block " style={{ color: "inherit" }}>chessnitd2020@gmail.com</a>
            {/* <a className="d-inline-block" href="tel:#">xxxxxxxxxxx</a> */}
          </div>
          <div className="col-lg-2 col-sm-4 wow fadeInUp" data-wow-delay=".3s">
            <p className="footer-classic-title" style={{ color: "white" }}>Quick Links</p>
            <ul className="footer-classic-nav-list">
              <li><a href="./">Home</a></li>
              <li><a href="/facad">Faculty</a></li>
              <li><a href="/member">Members</a></li>
              <li><a href="/register">Blog</a></li>

            </ul>
          </div>
          <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".2s">
            <p className="footer-classic-title" style={{ color: "white" }}>newsletter</p>
            <form className="rd-mailform text-left footer-classic-subscribe-form" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
              <div className="form-wrap">
                <label className="form-label" for="subscribe-email">Your Email Address</label>
                <input className="form-input" id="subscribe-email" type="email" name="email" data-constraints="@Email @Required" />
              </div>
              <div className="form-button group-sm text-center text-lg-left">
                <button className="button button-primary button-circle" type="submit">Sign Up <i class="fa fa-sign-in" aria-hidden="true"></i></button>
              </div>
            </form>
            <p style={{ color: "inherit", marginTop: "6%" }}>Be the first to find out about our latest news, updates, and special offers.</p>
          </div>
        </div>
      </div>
      <div className="container wow fadeInUp" data-wow-delay=".4s">
        <div className="footer-classic-aside">
          <p className="rights"><span>&copy; {new Date().getFullYear()}</span><span className="copyright-year"></span> All Rights Reserved</p>
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