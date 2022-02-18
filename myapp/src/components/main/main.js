import React, { Component } from 'react';
import {connect} from 'react-redux'
import five from '../../images/gre1.jpg'
import six from '../../images/gate1.jpg'
import cfd from '../../images/CFD.jpeg'
import pic from "../images/wp5330256.png"
import hexa from "../images/hexa.png"
import wall from "../images/R.jfif"
import {allnews} from '../actions/recordactions'
import "./bootstrap.css"
import"./js/script"
import "./fonts.css"
import "./style.css"
import "./n.css"
class Main extends Component {

    state={
        news:'',
    }
    
     newslist=()=>(
         this.state.news?
       
         this.state.news.reverse().map((item,i)=>(  

<li key={i} className="row">


  <div className="col-lg-4 col-sm-4 col-md-4 col-xs-4">
  <div className="date">
   <h3><span id="er" id="lis">{item.month}</span><br/><span className="row" id="lis">{item.date}</span></h3>
   </div>
  </div>
  <div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
   <a href={item.link} >
     <p className="lis">{item.subject}</p>  </a>
   </div>

</li>
         ))
         :null
        )
      

    componentWillMount(){
        this.props.dispatch(allnews()).then(response=>{
            console.log(response.payload)
            this.setState({
                news:response.payload
            })
        }).catch(err=>console.log(err))
    }

    render() {
        return (
            <div className="container">
             <div className="row">
               <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12" id ="win">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
      
            <div className="item active" >
              <img src={cfd} alt="chess" id="win" loading="lazy" />
              <div className="carousel-caption">
              </div>
            </div>
      
            <div className="item"  >
              <img src={five} alt="chess" id="win" loading="lazy"/>
              <div className="carousel-caption">
              </div>
            </div>
          
            <div className="item" >
              <img src={six} alt="chess" id="win" loading="lazy"/>
              <div className="carousel-caption">
              </div>
            </div>
        
          </div>
      
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
          </div>
          
          </div>

          <div className="col-lg-6 col-md-6">
              <ul className="sam row" >
            {this.newslist()}
              </ul>
          
         </div>
      </div>
      
      <div className="y">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>

      <section className="section section-sm position-relative" id="about">
        <div className="container">
          <div className="row row-30">
            <div className="col-lg-6">
              <div className="block-decorate-img wow fadeInLeft" data-wow-delay=".2s"><img src={pic} alt="" width="570" height="351" style={{objectFit:"cover"}}/>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="block-sm offset-top-45">
                <div className="section-name wow fadeInRight" data-wow-delay=".2s">About us</div>
                <h3 className="wow fadeInLeft text-capitalize devider-bottom" data-wow-delay=".3s">What We<span className="text-primary"> Do</span></h3>
                <p className="offset-xl-40 wow fadeInUp" data-wow-delay=".4s">The Chemical Engineering Student's Society (CHESS) is an independent student run society of Chemical Engineering Department of NIT Durgapur.It is solely dedicated to form a network among all the students,faculty members and alumni of the department. It promotes interaction within the department and implements acadmeic, social and other programs of interest to its members.</p>
                <p className="default-letter-spacing font-weight-bold text-gray-dark wow fadeInUp" data-wow-delay=".4s">We are conducting several events every year for the betterment of students.</p><a className="button-width-190 button-primary button-circle button-lg button offset-top-30" href="#">VIEW OUR TEAM</a>
              </div>
            </div>
          </div>
        </div>
        <div className="decor-text decor-text-1">ABOUT</div>
      </section>
      
      <section className="section custom-section position-relative section-md">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-12">
              <div className="section-name wow fadeInRight">our Events</div>
              <h3 className="text-capitalize devider-left wow fadeInLeft" data-wow-delay=".2s">Why CHESS<span className="text-primary"> Join us</span></h3>
              <p>In few years we have expanded the range of events that we conduct for the students to extend their capabilities.</p>
              <div className="row row-15">
                <div className="col-xl-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="box-default">
                    <div className="box-default-title">Innovative Webinars</div>
                    <p className="box-default-description">We conduct seminars on a variety of topics.</p><span className="box-default-icon novi-icon icon-lg mercury-icon-lightbulb-gears"></span>
                  </div>
                </div>
                <div className="col-xl-6 wow fadeInUp" data-wow-delay=".3s">
                  <div className="box-default">
                    <div className="box-default-title">Strategic Thinking</div>
                    <p className="box-default-description">We conduct hackathons so students can work upon practical problems.</p><span className="box-default-icon novi-icon icon-lg mercury-icon-target-2"></span>
                  </div>
                </div>
                <div className="col-xl-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="box-default">
                    <div className="box-default-title">Experienced Team</div>
                    <p className="box-default-description">We have a talented group of members who work to make CHESS better everyday.</p><span className="box-default-icon novi-icon icon-lg mercury-icon-user"></span>
                  </div>
                </div>
                <div className="col-xl-6 wow fadeInUp" data-wow-delay=".5s">
                  <div className="box-default">
                    <div className="box-default-title">Creative Courses</div>
                    <p className="box-default-description">We conduct courses for additional skill development.</p><span className="box-default-icon novi-icon icon-lg mercury-icon-partners"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-left-side wow slideInRight" data-wow-delay=".5s"><img src={wall} alt="" width="636" height="240"/>
        </div>
        <div className="decor-text decor-text-2 wow fadeInUp" data-wow-delay=".3s">features</div>
      </section>

      <section className="section bg-image-2">
        <div className="container section-md">
          <div className="row row-30 text-center">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="counter-classic">
                <div className="counter-classic-number"><span className="icon-lg novi-icon offset-right-10 mercury-icon-time"></span><span className="counter text-white" data-speed="2000">2020</span>
                </div>
                <div className="counter-classic-title">Year of Establishment</div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="counter-classic">
                <div className="counter-classic-number"><span className="icon-lg novi-icon offset-right-10 mercury-icon-folder"></span><span className="counter text-white" data-speed="2000">10+</span>
                </div>
                <div className="counter-classic-title">Successful Webinars</div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="counter-classic">
                <div className="counter-classic-number"><span className="icon-lg novi-icon offset-right-10 mercury-icon-users"></span><span className="counter text-white" data-speed="2000">3</span><span className="symbol text-white"></span>
                </div>
                <div className="counter-classic-title">Courses</div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="counter-classic">
                <div className="counter-classic-number"><span className="icon-lg novi-icon offset-right-10 mercury-icon-group"></span><span className="counter text-white" data-speed="2000">18+</span>
                </div>
                <div className="counter-classic-title">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-md bg-gray-lighten">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h3 className="wow fadeInLeft text-capitalize text-center" data-wow-delay=".3s">Our HOD's Opinions<span className="text-primary"> About CHESS</span></h3>
              <p className="offset-xl-40 wow fadeInUp" data-wow-delay=".4s">Chemical Engineering Students'society is working with a motivation of developing professional and personal skills of students,which facilitate them to perform magnificently as an eminent engineer in the society. This society is aimed to provide a platform to showcase and sharpen student's talents through a variety of events and activities planned throughout four years, for overall development of students personalities. We continue our effort to prepare and guide the students for the various competitive exams and interviews so that they perform better and make their carrier in the selected fields. Real world problems will be blended in the curriculum and these are to be taught by experts from industry, in addition through guest lectures. Our focus is to effectively train our students as chemical engineers who can serve the society competently, collaboratively and ethically as planners, designers and operators of the environment.</p>
              <div className="owl-carousel review-carousel" data-items="1" data-sm-items="1" data-md-items="1" data-lg-items="1" data-xl-items="1" data-xxl-items="1" data-dots="true" data-nav="false" data-stage-padding="0" data-loop="false" data-margin="0" data-mouse-drag="true" data-autoplay="false">
                </div>
                </div>
              </div>
            </div>
          
        </section>
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
              <li><a className="fa fa-linkedin" href="#"></a></li>
              <li><a className="fa fa fa-twitter" href="#"></a></li>
              <li><a className="fa fa-facebook" href="#"></a></li>
              <li><a className="fa fa-instagram" href="#"></a></li>
            </ul>
          </div>
        </div>
      </footer>
    {/* 

               <div className="row">
               
               <div  id="description" >
                   
               <h1 style={{color:"#AC3B61",fontFamily:"Aeonix",fontStyle:'normal',textAlign:'center'}}>ABOUT</h1>
               <br></br>
                   <div className="circle">
    
                   </div>
               
                   <p style={{ fontFamily:"Aeonix",fontStyle:'normal' ,color:"#AC3B61"}} id="parag">The Chemical Engineering Student's Society (CHESS) is an independent student run society of Chemical Engineering Department of NIT Durgapur.It is solely dedicated to form a network
                     among all the students,faculty members and alumni of the department. It promotes interaction  within the department and implements acadmeic, social and other programs of interest to its members.
                   
                   </p>
               
               
                    </div>
            
            </div> */}
            
              {/* <div className="row" >
               <div id="box">
                <div id="smallbox">
                    <i className="fas fa-user-graduate" id="cap1" style={{fontSize:"40px",color:"#E39821"}}>
                        <h3 id="faculty"><Link to="/facad">FACULTY</Link></h3></i>
                </div>
                <div id="smallbox">
                    <i className="fas fa-graduation-cap" id="cap1" style={{fontSize:"40px",color:"#E39821"}}>
                        <h3 id="faculty"><Link to="/subject">SYLLABUS</Link></h3></i>
               </div>
               
               <div id="smallbox">
                <i className="fa fa-book" id="cap1"style={{fontSize:"40px",color:"#E39821"}}>
                <h3 id="faculty"><Link to="/register">REGISTER</Link></h3></i>
               </div>
               <div id="smallbox">
                <i className="fa fa-lock" id="cap1" style={{fontSize:"40px",color:"#E39821"}}>
                <h3 id="faculty"><Link to="/login">LOGIN</Link></h3></i>
               </div>
                 
            </div>
             </div> */}
             {/* <div className="row" id="about">
               
               <div className="col-lg-12 col-sm-12 col-md-12 description" >
                   
               <h1 style={{color:"#AC3B61",fontFamily:"Aeonix",fontStyle:'normal',textAlign:'center'}}>MESSAGE FROM HOD:prof Gopinath Halder</h1>
                   <br></br>
                   <div className="circler">
    
                   </div>
               
                   <p style={{ fontFamily:"Aeonix" ,color:"#AC3B61",fontStyle:'normal'}} id="parag">Chemical Engineering Students'society is working with a motivation of developing professional
                                    and personal skills of students,which facilitate them to perform magnificently as an eminent
                                    engineer in the society. This society is aimed to provide a platform to showcase and sharpen
                                    student's talents through a variety of events and activities planned throughout four years,
                                    for overall development of students personalities. We continue our effort to prepare and
                                    guide the students for the various competitive exams and interviews so that they perform
                                    better and make their carrier in the selected fields. Real world problems will be blended in
                                    the curriculum and these are to be taught by experts from industry, in addition through guest
                                    lectures. Our focus is to effectively train our students as chemical engineers who can serve the
                                    society competently, collaboratively and ethically as planners, designers and operators of the
                                    environment.
                   </p>
               
               
                    </div>
             
            </div> */}
            
            </div>
               
        );
    }
}

const mapStateToprops=(state)=>{
    
       
    return{
      news:state.news,
    }
      
  }
  
  export default connect(mapStateToprops)(Main);