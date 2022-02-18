import React, { Component } from 'react';
import "./card.css"

class Card extends Component {
    render() {
        console.log(this.props.images[0])
        return (

          <div class="columns">
              <div class="team5">
                  <div class="teamimg">
                      <img src={this.props.images[0]?this.props.images[0].url:null} alt="Team Image"/>
                  </div>
                  <div class="teamcontent">
                      <h2 style={{fontSize:"15px"}}>{this.props.name}</h2>
                      <h3>PROFESSOR</h3>
                       <h6 style={{fontSize:"14px"}}>{this.props.workplace}</h6>
                       <button name="submit" type="submit" id="contact-submit" className='btn btn-info' onClick={(e)=>{this.props.evaction(e,this.props)}}>SEE DETAILS</button>
                  </div>
              </div>
          </div>

        )}
}

export default Card;