import { combineReducers } from 'redux'


const initialStateCounter = {
    counter:0
}

 function counterReducer(state = initialStateCounter, action) {
    
    switch(action.type) {
        case("INCREMENT"): 
            console.log("INCREMENT");            
            return {...state, counter: state.counter + 1 }
            case("DECREMENT"): 
            console.log("DECREMENT")
            if(state.counter <= 0) return state;
            return {...state, counter: state.counter - 1 }       
        default: 
            return state
    }
    
}


const initialStateThema = {
    thema:'white'
}

function themaReducer(state = initialStateThema , action) {
   
    switch(action.type) {       
        case("CHANGE_THEMA"): 
            console.log("CHANGE_THEMA")
            return {...state, thema: (state.thema==='black') ? 'white' : 'black' }
        default: 
            return state
    }
    
}

const rootReducer = combineReducers({ counterReducer, themaReducer }); 

export default rootReducer;
