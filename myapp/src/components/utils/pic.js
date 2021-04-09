import React from 'react';

const Pic = (props) => {
    return (
        <div >
             <img style={{border:"2px solid black"}} className="img-responsive img-rounded" src={props.image} alt={props.text} width="200" height="200"/> 
        </div>
    );
};

export default Pic;