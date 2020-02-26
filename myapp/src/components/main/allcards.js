import React, { Component } from 'react';
import Gen from '../utils/genall'
import {allalum} from '../actions/recordactions'

import {getrecords}  from '../actions/recordactions';
import FieldRow from "../utils/formrow"
import Pic from '../utils/pic';
import {connect} from 'react-redux'
class Allalumni extends Component {
    state={
        records:'',
        data:'',
        loading:false
    }

    componentWillMount(){
        this.props.dispatch(allalum()).then(response=>{
            console.log(response.payload)
            this.setState({
                records:response.payload
            })
        }).catch(err=>console.log(err))
    }

    
submitForm=(event,data)=>{
event.preventDefault()
this.setState({
    loading:true,
    data:data
})
console.log(this.state.data)
}

goback=(e)=>{
    this.setState({
        loading:false,
        data:""
    })
}
    render() {
        return (
            <div className="container">
         {
             this.state.loading?
             <div className="row">
        
             <div className="cv" >
                 <h3 className="neon" style={{textAlign:'center'}}>
                     YOUR INFORMATION
                 </h3>
                 <div className="row">
                 <div className="col-lg-6 col-sm-6">
                     <FieldRow name={'name'}
                     value={this.state.data.name}
                     />
                 </div>
 
             <div className="col-lg-6 col-sm-6">
                 <Pic image={this.state.data.images?this.state.data.images[0].url:null} text={"PHOTO"}/>
             </div>
                     
             </div>
 
 
             <div className="row">
                  <FieldRow name={'email'}
                     value={this.state.data.email}
                  />
             </div>
                
                
             <div className="row">
                 <FieldRow name={'Current qualification'}
                     value={this.state.data.currentdegree}
                  />
             </div>
                 
                 
             <div className="row">
                 <FieldRow name={'Work Place'}
                     value={this.state.data.workplace}
                  />
             </div>
 
                 
             <div className="row">
                 <FieldRow name={'Year of Passing'}
                     value={this.state.data.year}
                 />
             </div>
 
             <div className="row">
                 <FieldRow name={'Additional Information'}
                     value={this.state.data.additional}
                  />
             </div>
             <button className="btn btn-primary" onClick={(event)=> this.goback(event)}>GO BACK</button>
             </div>
        </div>
             :
            
             <Gen recalumni={this.state.records} change={(event,data,_id)=>this.submitForm(event,data)}/>
             

         }      
            </div>
        );
    }
}

const mapStateToProps=(state)=>{    
    return{
      records:state.records,
    }
      
}
export default connect(mapStateToProps)(Allalumni);