import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormFields from '../utils/formfields';
import {update,validform, generatedata} from '../utils/formtions'
import {connect} from 'react-redux'
import {loginuser} from '../actions/memberactions'
class Login extends Component {
    state={
        loading:false,
        formSuccess:false,
        formError:false,
        formdata:{
        email: {
            element:'input',
            value:'',
            config:{
                name:'Email',
                placeholder:'Enter your Email here',
                type:'email'
            },
            validation:{
                email:true
              },
            valid:false,
            validationMessage:'',
            label:true
        },
        password: {
            element:'input',
            value:'',
            config:{
                name:'password',
                placeholder:'Enter your password here',
                type:'password'
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
event.preventDefault();
const isformvalid=validform(this.state.formdata,'register')
const data=generatedata(this.state.formdata,'register')
if(isformvalid){
    this.props.dispatch(loginuser(data)).then((response)=>{
        if(response.payload.loginSuccess){
         console.log('hurray')
            this.setState({
                formSuccess:true,
                formError:false,
                loading:true
            })
            console.log(response.payload)
        if(response.payload.member.role===1){
            
            setTimeout(()=>{
                this.props.history.push('/details');
            },3000)
        }else{
            setTimeout(()=>{
                this.props.history.push('/allalum');
            },3000)
        }
         }
         
            else{
                this.setState({
                    formError:true
                })
            }
        }
    )}
}


resetpassword=(event)=>{
    event.preventDefault();   
    
    setTimeout(()=>{
        this.props.history.push('/forget');
    },3000)        
        }
    

    render() {
        return (
            this.state.loading?
        <center> <CircularProgress thickness={7} size={100} style={{color:'grey'}} />  </center>
            :
            <div className="jumbotron">
            <div className="login container col-lg-12 col-md-12 col-sm-12">
                <div className="jk">
                <div className="row headtitle" >
              <h2 className="neon">Please Login</h2>
                </div>
           <form onSubmit={(event)=>{
                  this.submitform(event)
                }}>
               
               <div className=" row block lblock">
               <FormFields
                  formdata={this.state.formdata.email}
                  id={'email'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div>
                
                <div className="row block lblock">
                  <FormFields
                  formdata={this.state.formdata.password}
                  id={'password'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div>
                  
                <div className="row block lblock">
          <center>     <button className="btn btn-primary" style={{padding:"10px"}}onClick={(event)=> this.submitform(event)}>
                     Login
                </button></center> </div>
          
                <div className="row block lblock">
          <center>     <button className="btn btn-primary" style={{padding:"10px"}}onClick={(event)=> this.resetpassword(event)}>
                     Forgot Password
                </button></center> </div>

               </form>
               </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    
       
    return{
      user:state.member
    }
      
}
export default connect(mapStateToProps)(Login);