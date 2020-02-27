import { 
    ADDRECORD,
    GETRECORD,
    ALLALUM,
    SEARCHYR
} from "../actions/types";

export default function(state={},action){
    switch(action.type){ 
        case ADDRECORD:
        return {...state, award:action.payload }
        
        case GETRECORD:
            return {...state, rec:action.payload }
        case ALLALUM:
            return {...state, all:action.payload }
        case SEARCHYR:
            return {...state, searchresult:action.payload }
              
        
        default:
            return state;
    }
}
