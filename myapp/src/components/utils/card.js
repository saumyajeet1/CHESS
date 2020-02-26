import React, { Component } from 'react';
class Card extends Component {
    render() {
        console.log(this.props.images[0])
        return (
            <div  className="container">
                <div className="card" style={{padding:"10px",borderRadius:"10px",alignItems:"center"}}>
                <div className="imgbox"> 
                <img className="cardimg" style={{width:"200px",height:"200px"}} src={this.props.images[0].url}/>
                </div>
                <div className="details"> 
                <div className="row">
               <div className="col-lg-12">
                   <div className="name" style={{fontFamily: "Spartan"}} onClick={(e)=>{this.props.evaction(e,this.props)}}>
                    NAME:-{this.props.name}
                   </div>
               </div>
               </div>
               <div className="row">
                    <div className="stats">
                    <div className="col-lg-12">
                    <div className="workplace" style={{fontFamily: "Spartan"}}>
                  WORKPLACE:-{this.props.workplace}
                    </div>
                    </div>
                    <div className="col-lg-12 year" style={{fontFamily: "Spartan"}}>
                  YEAR OF PASSING:-{this.props.year}
                    </div>
                </div>
                </div>
                <div className="row">
                </div>
                </div>
                </div>
                               
               
            </div>
        );
    }
}

export default Card;