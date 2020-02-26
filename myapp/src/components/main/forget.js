import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import FormFields from '../utils/formfields';
import {update,validform, generatedata} from '../utils/formtions'
import {connect} from 'react-redux'
import {forget} from '../actions/memberactions'

class Forget extends Component {
    state={
        loading:false,
        data:'',
        formSuccess:false,
        formError:false,
        formdata:{
   email: {
            element:'input',
            value:'',
            config:{
                name:'email',
                placeholder:'Enter email here',
                type:'email'
            },
            validation:{
                required:true
            },
            valid:false,
            validationMessage:'',
            label:true
        }
}
    }

updateform=(element)=>{
    const newdata=update(element,this.state.formdata,'register')
    this.setState({
        formdata:newdata,
    })
}

submitform=(event)=>{
    console.log("Dfdf")
event.preventDefault();
const isformvalid=validform(this.state.formdata,'register')
const data=generatedata(this.state.formdata,'register')
console.log(data)
console.log(isformvalid)
if(isformvalid){
    console.log("lll")
    this.setState({
        data:data,
        loading:true
    })
    this.props.dispatch(forget(data)).then((response)=>{
   
        console.log(response)
            }).catch(err=>console.log(err))

        }
    
}

    render() {
        return (
            this.state.loading?
        <center> <h2>Email sent to <u>{this.state.data.email}</u></h2> </center>
            :
            <div class="jumbotron">
                <div className="form">
                <div className="headtitle row">
                    <h2 className="neon" style={{fontFamily:"sans serif"}}>RESET PASSWORD</h2>
                </div>
                <div style={{display:'flex'}} className="row">
                    <div className="col-lg-12 col-sm-12 col-md-12 f">
                <form onSubmit={(event)=>{
                  this.submitform(event)
                }}>
               
                <div className="block row">
                  <FormFields
                  formdata={this.state.formdata.email}
                  id={'email'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div><br></br>

                <br></br>
                
                <br></br>
                <br></br>
                <div className="block row">
          <center>     <button class="btn btn-primary" style={{padding:"10px"}} onClick={(event)=> this.submitform(event)}>
                     Reset your Password
                </button></center> </div>
                </form>
                </div>
                 </div>
            </div>
            </div>
        );
    }
}

export default connect()(Forget);