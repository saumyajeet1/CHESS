import React, { Component } from 'react';
import Gen from '../utils/genall'
import {allalum, searchyear} from '../actions/recordactions'
import FieldRow from "../utils/formrow"
import Pic from '../utils/pic';
import FormFields from '../utils/formfields';
import {updatesearch,generatedata} from '../utils/formtions'
import {connect} from 'react-redux'
class Allalumni extends Component {
    state={
        records:[],
        data:'',
        loading:false,
        show:false,
        search:{
            element:'input',
            validity:true,
            value:'',
            config:{
                name:'search',
                placeholder:'Search by anything',
                type:'text'
            },
            validation:{
                required:false
            },
            valid:true,
            validationMessage:'',
            label:true
        },
        results:'',        
    }

    updateform=(element)=>{
        const newdata=updatesearch(element,this.state.formdata,'register')
        this.setState({
            formdata:newdata,
        })
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
     
   search=(event,data)=>{
       
      console.log(event.target)
      event.preventDefault()
      const datar=generatedata(this.state.formdata,'register')
     console.log(datar)
     if(datar.year){
      this.props.dispatch(searchyear(datar)).then(res=>{
          console.log(res)
          this.setState({
              show:true,
              records:res.payload.resyr
          })
        }).catch(err=>{
              console.log(err)
          })
      
       console.log(this.state.data)
        }else{
            this.props.dispatch(allalum()).then(response=>{
                console.log(response.payload)
                this.setState({
                    records:response.payload
                })
            }).catch(err=>console.log(err))
        }
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
                    ALUMNI INFORMATION
                 </h3>
                 <div className="row">
                 <div className="col-lg-4 col-md-4 col-xs-4 col-sm-4">
                     <FieldRow name={'NAME'}
                     value={this.state.data.name}
                     />
                 </div>
                 <div className="col-lg-2 col-md-2 col-xs-2 col-sm-2">
                     
                 </div>
                 <div className="col-lg-2 col-md-2 col-xs-2 col-sm-2">
                     
                 </div>
             <div className="col-lg-4 col-sm-4 col-md-4 col-xs-4">
                 <Pic image={this.state.data.images[0]?this.state.data.images[0].url:null} text={"PHOTO"}/>
             </div>
                     
             </div>
 
 
             <div className="row">
                  <FieldRow name={'EMAIL'}
                     value={this.state.data.email}
                  />
             </div>
                
                
             <div className="row">
                 <FieldRow name={'CURRENT QUALIFICATION'}
                     value={this.state.data.currentdegree}
                  />
             </div>
                 
                 
             <div className="row">
                 <FieldRow name={'Work Place'}
                     value={this.state.data.workplace}
                  />
             </div>
 
                 
             <div className="row">
                 <FieldRow name={'YEAR OF PASSING'}
                     value={this.state.data.year}
                 />
             </div>
 
             <div className="row">
                 <FieldRow name={'ADDITIONAL INFORMATION'}
                     value={this.state.data.additional}
                  />
             </div>
             
             <div className="row">
                 <FieldRow name={'Academic Records'}
                     value={this.state.data.academicrecords}
                  />
             </div>
             
             <div className="row">
                 <FieldRow name={'AWARDS'}
                     value={this.state.data.awards}
                  />
             </div>
             <button className="btn btn-primary" onClick={(event)=> this.goback(event)}>GO BACK</button>
             </div>
        </div>
             :
                 <div>
               <div className="block row">
               <FormFields
                  formdata={this.state.search}
                  id={'year'}
                  change={(event)=>{this.updateform(event)}}
                />
            
            
                </div><br></br>
                <div className="blo">
                   
                <button className="btn btn-primary" onClick={(event)=> this.search(event)}>SEARCH</button>
                </div>
                {
                    this.state.records?
                    this.state.records.map((item,i)=>{
                        if((i+1)==this.state.records.length){
                            return null
                        }
                        console.log(i)
                        if(i==0){
                           console.log(this.state.records.slice(i,i+3),i,i+3)
                            return(<div key={i} className='row'>
                            <Gen recalumni={this.state.records.slice(i,i+3)} change={(event,data,_id)=>this.submitForm(event,data)}/>
                            </div>)
                        }
                        if(i%3==0){
                            if((i+3)>=this.state.records.length){
                                var n=3-(i+3)+this.state.records.length
                                console.log(n)
                            }
                            else{
                                n=3
                            }
                            console.log(this.state.records.slice(i,i+n),i,i+n)
                  return(<div key={i} className='row'>
             <Gen recalumni={this.state.records.slice(i,i+n)} change={(event,data,_id)=>this.submitForm(event,data)}/>
             </div>)
                        }
                    })
    :null
                }
             </div>

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