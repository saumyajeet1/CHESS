import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import four from '../../images/gre1.jpg' 
import five from '../../images/gre1.jpg'
import six from '../../images/gate1.jpg'
import {allnews} from '../actions/recordactions'
import "./n.css"
class Main extends Component {

    state={
        news:'',
    }
    
     newslist=()=>(
         this.state.news?
       
         this.state.news.reverse().map((item,i)=>(  

//   <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
//   <div className="d-flex w-100 justify-content-between">
//     {/* <h5 className="mb-1">CREATED AT {item.createdAt}</h5> */}
  
//   </div>
//      <a href={item.link} className="mb-1" style={{fontFamily:"'Montserrat', sans-serif"}}>{item.subject}</a>
  
//      {
//        item.author?
//        <a className="mb-1" style={{textTransform:"capitalize"}}>BY {item.author}</a>
//      :null
// }
// {/* {
//        item.link?
//      <a href={item.link} className="mb-1">{item.link}</a>
//      :null
// } */}
//   </a>
<li key={i} className="row">


  <div className="col-lg-4 col-sm-4 col-md-4 col-xs-4">
  <div className="date">
   <h3><span id="er" >{item.month}</span><br/><span className="row">{item.date}</span></h3>
   </div>
  </div>
  <div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
   <a href={item.link}>
     <p>{item.subject}</p>  </a>
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
              <img src={four} alt="chess" id="win" loading="lazy" />
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
            <span className="sr-only">Previous</span>
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


               <div className="row">
               
               <div  id="description" >
                   
               <h1 style={{color:"#AC3B61",fontFamily:"Aeonix",fontStyle:'normal',textAlign:'center'}}>ABOUT</h1>
                   <div className="circle">
    
                   </div>
               
                   <p style={{ fontFamily:"Aeonix",fontStyle:'normal' ,color:"#AC3B61"}} id="parag">The Chemical Engineering Student's Society (CHESS) is an independent student run society of Chemical Engineering Department of NIT Durgapur.It is solely dedicated to form a network
                     among all the students,faculty members and alumni of the department. It promotes interaction  within the department and implements acadmeic, social and other programs of interest to its members.
                   
                   </p>
               
               
                    </div>
            
            </div>
            
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
             <div className="row" id="about">
               
               <div className="col-lg-12 col-sm-12 col-md-12 description" >
                   
               <h1 style={{color:"#AC3B61",fontFamily:"Aeonix",fontStyle:'normal',textAlign:'center'}}>MESSAGE FROM HOD:Prof Gopinath Halder</h1>
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
            
            </div>
            </div>
               
        );
    }
}

const mapStateToProps=(state)=>{
    
       
    return{
      news:state.news,
    }
      
  }
  
  export default connect(mapStateToProps)(Main);