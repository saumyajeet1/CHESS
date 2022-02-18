import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import FormFields from '../utils/formfields';
import {update,validform, generatedata} from '../utils/formtions'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import {registeruser,alumnienter} from '../actions/memberactions'
import hexa from '../../images/hexa.png'

class Register extends Component {
    state={
        loading:false,
        formSuccess:false,
        formError:false,
        formdata:{
        name: {
            element:'input',
            value:'',
            config:{
                name:'name',
                placeholder:'Enter your name here',
                type:'text'
            },
            validation:{
                required:true
            },
            valid:false,
            validationMessage:'',
            label:true
        },
        lastname: {
            element:'input',
            value:'',
            config:{
                name:'lastname',
                placeholder:'Enter your Last name here',
                type:'text'
            },
            validation:{
                required:true
            },
            valid:false,
            validationMessage:'',
            label:true
        },
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
        },
        role: {
            element:'radio',
            value:0,
            config:{
                name:'admin',
                placeholder:'Admin here',
                type:'admin'
            },
            validation:{
                required:false
            },
            valid:true,
            validationMessage:'',
            label:false
        },
        
    },
    value:0,
    show:''
}

updateform=(element)=>{
    const newdata=update(element,this.state.formdata,'register')
    this.setState({
        formdata:newdata,
    })
}
submitalumni=(event)=>{
    event.preventDefault()
    const isformvalid=validform(this.state.formdata,'register')
    if(isformvalid){
    const name=this.state.formdata.name.value
    const email=this.state.formdata.email.value
    this.props.dispatch(alumnienter(name,email)).then(res=>{
       
        alert("YOUR RESPONSE HAS BEEN SENT TO THE ADMIN.")
        this.setState({
            show:'YOUR RESPONSE HAS BEEN SENT TO THE ADMIN. YOU WILL BE ABLE TO REGISTER IN FEW MOMENTS'
        })   
    }
        
    ).catch(err=>{
     console.log(err)   
    })

    }
    
}
submitform=(event)=>{
    // console.log("Dfdf")
event.preventDefault();
const isformvalid=validform(this.state.formdata,'register')
const data=generatedata(this.state.formdata,'register')
// console.log(data)
// console.log(isformvalid)
if(isformvalid){
    // console.log("lll")
    this.props.dispatch(registeruser(data)).then((response)=>{
        
        if(response.payload.success){
         console.log('hurray')
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
                    formError:true,
                    show:response.payload.message
                })
                // console.log('sddsd')
            }
        }
    )}
}

onrchange=(e)=>{
    // console.log(this.state.formdata.role.value)
    const newformdata=this.state.formdata

    newformdata['role'].value=e.target.value
    this.setState({
        formdata:newformdata,
        value:e.target.value
    })
    
    this.setState({
      value:1
    })
    // console.log(this.state)
}
    render() {
        return (
            this.state.loading?
        <center> <CircularProgress thickness={7} size={10} style={{color:'grey'}} />  </center>
            :
            <div className="container">
                
                <div className="row">
                    <h2 className="neon" style={{fontFamily:"Gilroy",color:"#AC3B61"}}>REGISTER YOURSELF TO CHEMICAL ALUMNI DATABASE</h2>
                </div>
                <form id="contact" onSubmit={(event)=>{
                  this.submitform(event)
                }} style={{backgroundColor:"#123C69"}}>
                             <div><img src={hexa} id="image"/>
              <h3 style={{color:"#EDC7B7"}}>CHEMICAL ENGINEERING STUDENTS SOCIETY</h3>
                <h4 style={{color:"#EDC7B7"}}>National Institute of Technology Durgapur</h4>
                {
                    this.state.show?
                <label style={{color:'red',fontSize:"20px"}}>{this.state.show}</label>:null
                }
              </div>
               <div className="block row">
               <FormFields
                  formdata={this.state.formdata.name}
                  id={'name'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div><br></br>
               <div className="block row">
               <FormFields
                  formdata={this.state.formdata.lastname}
                  id={'lastname'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div><br></br>
               <div className="block row">
               <FormFields
                  formdata={this.state.formdata.email}
                  id={'email'}
                  change={(event)=>{this.updateform(event)}}
                />
                </div><br></br>
                
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
                {/* <div className="row">
                   <label style={{fontFamily:'algerian'}}> ARE YOU AN ADMIN ? </label> 
           <div className="row">
           <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
                <input
                type="radio"
                value="1"
                checked={this.state.value === 1}
                onChange={(e)=>this.onrchange(e)}/>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
                <label>YES</label>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">

                <input
                type="radio"
                value="0"
                checked={this.state.value === 0}
                onChange={(e)=>this.onrchange(e)}/>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
                <label>NO</label>
                </div>
                </div>
                </div>
 */}

                <br></br>
                <br></br>
                   
        <div className="row">
            <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
            
                <Button variant="outlined" color="primary" id="forgot"  style={{padding:"10px",color:"#EDC7B7"}} onClick={(event)=> this.submitform(event)}>
         REGISTER AS A STUDENT
                </Button>
                </div>

            <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
                <Button variant="outlined" color="primary"  id="forgot"  style={{padding:"10px",color:"#EDC7B7"}} onClick={(event)=> this.submitalumni(event)}>
             REGISTER AS AN ALUMNI
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
export default connect(mapStateToProps)(Register);