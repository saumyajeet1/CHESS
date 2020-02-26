import axios from 'axios';
import {
    ADDDETAIL,
    ADDRECORD,
    ALLALUM,
    GETRECORD,
    ADDEDUCATION
} from './types';

import { RECORD_SERVER } from '../utils/misc';


export function adddetails(data){
    const request = axios.post(`${RECORD_SERVER}/adddetail`,data)
        .then(response => response.data);
    
    return {
        type: ADDDETAIL,
        payload: request
    }
}


export function allalum(){
    const request = axios.get(`${RECORD_SERVER}/allalum`)
        .then(response => response.data);
    
    return {
        type: ALLALUM,
        payload: request
    }
}


export function getrecords(){
    const request = axios.get(`${RECORD_SERVER}/getrecords`)
        .then(response => response.data);
    
    return {
        type: GETRECORD,
        payload: request
    }
}

export function addrecord(data,email){
    console.log(data)
    const request = axios.post(`${RECORD_SERVER}/records`,data)
        .then(response => response.data);
    
    return {
        type: ADDRECORD,
        payload: request
    }
}


export function addeducation(data,email){
    console.log(data)
    const request = axios.post(`${RECORD_SERVER}/education`,data)
        .then(response => response.data);
    
    return {
        type: ADDEDUCATION,
        payload: request
    }
}