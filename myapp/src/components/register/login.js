import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormFields from '../utils/formfields';
import {update,validform, generatedata} from '../utils/formtions'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {loginuser} from '../actions/memberactions'
import hexa from '../../images/hexa.png'

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
    },
    show:''
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
                console.log(this.props.user.member)
                this.setState({
                    formError:true,
                    show:this.props.user.member.message
                })
            }
        }
    )}
}


resetpassword=(event)=>{
    event.preventDefault();   
    
    setTimeout(()=>{
        this.props.history.push('/forget');
    },100)        
        }
    

    render() {
        return (
         this.state.loading?
            <center> <CircularProgress thickness={7} size={100} style={{color:'grey'}} />  </center>
            :
            <div className="container">
                           
                <div className="row">
                    <h2 className="neon" style={{fontFamily:"Gilroy",color:"#AC3B61"}}>PLEASE LOGIN</h2>
                </div>
 
                <form  style={{backgroundColor:'#123C69'}} id="contact" onSubmit={(event)=>{
                  this.submitform(event)
                }}>
                    
                   <div><img src={hexa} id="image"/>
                   <h3 style={{color:"#EDC7B7"}}>CHEMICAL ENGINEERING STUDENTS SOCIETY</h3>
                   <h4 style={{color:"#EDC7B7"}}>National Institute of Technology Durgapur</h4>
                   {
                    this.state.show?
                    <label style={{color:'red',fontSize:"20px"}}>{this.state.show}</label>:null
                   }
                   </div>
               
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
                <br/>
                <div className="row">
                    <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
                    <Button variant="outlined" color="primary" id="forgot"  style={{padding:"10px",color:"#EDC7B7"}} onClick={(event)=> this.submitform(event)}>
                       LOGIN
                    </Button>
                    </div>
                
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
                    <Button variant="outlined" color="primary"  id="forgot"  style={{padding:"10px",color:"#EDC7B7"}} onClick={(event)=> this.resetpassword(event)}>
                      Forgot Password
                    </Button>
                </div>
            </div>
        </form>
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