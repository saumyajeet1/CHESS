import React from 'react';
  
const Desc = (props) => {
    console.log(props.location)
    return (
        <div className="container">
            <div className="row" style={{fontFamily:"'Marcellus SC', serif",fontSize:"25px",fontWeight:"1000"}}>
                {props.location.state.item.name}
            </div>
            <br/>
            <div className="row" style={{fontFamily:"'Marcellus SC', serif",fontSize:"20px"}}>
                {props.location.state.item.email}
            </div>
            <br/>
            <div className="row" style={{fontFamily:"'Marcellus SC', serif",fontSize:"15px"}}>
                {props.location.state.item.batch}
            </div>
            <br/>
            <div className="row" style={{fontFamily:"'Oleo Script', cursive",fontSize:"15px",fontWeight:"200"}}>
                {props.location.state.item.main}
            </div>
        </div>
    );
};

export default Desc;