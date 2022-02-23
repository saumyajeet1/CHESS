//  import React from 'react';
//    import './des.css'
//    import './des.js'
//  const Desc = (props) => {
//      console.log(props.location)
    
//      return (
//           <div classNameName="container">
//               <div classNameName="row" style={{fontFamily:"'Marcellus SC', serif",fontSize:"25px",fontWeight:"1000"}}>
//                   {props.location.state.item.name}
//               </div>
//               <br/>
//               <div classNameName="row" style={{fontFamily:"'Marcellus SC', serif",fontSize:"20px"}}>
//                   {props.location.state.item.email}
//               </div>
//               <br/>
//               <div classNameName="row" style={{fontFamily:"'Marcellus SC', serif",fontSize:"15px"}}>
//                   {props.location.state.item.batch}
//               </div>
//               <br/>
//               <div classNameName="row" style={{fontFamily:"'Oleo Script', cursive",fontSize:"15px",fontWeight:"200"}}>
//                   {props.location.state.item.main}
//               </div>
//           </div>
        
//  <div className="book">
//    <div id="pages" className="pages">
//      <div className="page"><p>Open Me, <br/>please!</p></div>
//      <div className="page"></div>
//      <div className="page"><p>Hello there!</p></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//      <div className="page"></div>
//    </div>
//  </div>



//      );
//  };

//  export default Desc;
import React, { Component } from 'react';
import './des.css'

class Desc extends Component {
    // componentDidMount() {
    //     const script = document.createElement("script");
    
    //     script.src = "des.js";
    //     script.async = true;
    
    //     document.body.appendChild(script);
    //   }
    
    render() {
        return (
  //  <div className="book">
  //  <div id="pages" className="pages">
  //    <div className="page"><p className="paf">{this.props.location.state.item.name}<br/>{this.props.location.state.item.email}</p></div>
  //    <div className="page">{this.props.location.state.item.batch}</div>
  //    <div className="page"><p className="paf">Hello there!</p></div>
  //    <div className="page"><p className="paf">{this.props.location.state.item.main}</p></div>
  //    <div className="page"><p className="paf">{this.props.location.state.item.main1}</p></div>
  //    <div className="page"><p className="paf">{this.props.location.state.item.main2}</p></div>
  //    <div className="page"><p className="paf">{this.props.location.state.item.main3}</p></div>
  //    <div className="page"><p className="paf">{this.props.location.state.item.main4}</p></div>
  //    <div className="page"><p className="paf">{this.props.location.state.item.main5}</p></div>
  //    <div className="page"><p className="paf">{this.props.location.state.item.main6}</p></div>
  //    <div className="page"><p className="paf">{this.props.location.state.item.main7}</p></div>
  //    <div className="page"><p className="paf">{this.props.location.state.item.main8}</p></div>
  //  </div>
  //  </div> 

<div>
  <h1>{this.props.location.state.item.name}</h1>

  <div>
    <p><i class="fa fa-quote-right"></i><br></br>
    {this.props.location.state.item.main}
    </p>
  </div>
</div>
        );
    }
}

export default Desc;