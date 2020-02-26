import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import FormFields from '../utils/formfields';
import {update,validform, generatedata} from '../utils/formtions'
import {connect} from 'react-redux'
import {forgetpass} from '../actions/memberactions'
import queryString from 'query-string';


class Forgot extends Component {
    state={
        loading:false,
        formSuccess:false,
        formError:false,
        formdata:{
        password: {
            element:'input',
            value:'',
            config:{
                name:'password',
                placeholder:'Enter password here',
                type:'password'
            },
            validation:{
                required:true
            },
            valid:false,
            validationMessage:'',
            label:true
        },
        confirmpassword: {
            element:'input',
            value:'',
            config:{
                name:'Confirm Password',
                placeholder:'ReEnter your Password here',
                type:'password'
            },
            validation:{
                required:true,
                confirm: 'password'
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
console.log('ggg')
event.preventDefault();
const isformvalid=validform(this.state.formdata,'register')
const data=generatedata(this.state.formdata,'register')
console.log(queryString.parse(this.props.location.search))
if(isformvalid){
    this.props.dispatch(forgetpass(queryString.parse(this.props.location.search),data)).then((response)=>{
        if(response.payload.success){
         
            this.setState({
                formSuccess:true,
                formError:false,
                loading:true
            })
            setTimeout(()=>{
            this.props.history.push('/login')
            console.log('dffdfd')
            },5000)}
            else{
                this.setState({
                    formError:true
                })
            }
        }
    )}
}

    render() {
        return (
            this.state.loading?
        <center> <CircularProgress thickness={7} size={10} style={{color:'grey'}} />  </center>
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
                  formdata={this.state.formdata.password}
                  id={'password'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div><br></br>

                <div className="block row">
                <FormFields
                  formdata={this.state.formdata.confirmpassword}
                  id={'confirmpassword'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div>

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

export default connect()(Forgot);