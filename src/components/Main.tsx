import React, { useEffect } from 'react';
 
import styled from 'styled-components';
import { decrement, increment, changeThema } from '../redux/actions';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';


const Main =  () => {


    interface RootState {
        counterReducer: { 
            counter: number 
        },
        themaReducer: { 
            thema: string 
        },
      }
   


    //const store = useStore();
    
    const dispatch = useDispatch();
    const counter  = useSelector((state: RootState) => state.counterReducer.counter, shallowEqual);
    const thema    = useSelector((state: RootState) => state.themaReducer.thema, shallowEqual);

    
      

    useEffect(() => {
       // console.log("2 store.getState(): ", store.getState())          
    }, []);
  

    const Wrapper = styled.section`
          border:11px solid #ccc;
          display:inline-block;
          padding:4px 6px;
          display: block;
 
          &.black  {
            background:#000;
            color:#fff;
          }
    `;
 
    
    const onIncrement = () => {
       dispatch(increment())
       console.log(thema)  
    }

 
    const onDecrement = () => {
        dispatch(decrement());
    };
     

    const onAsync= () => {
        setTimeout(function(){
           dispatch(increment());
        },1999)
    }


    const onChangeThema = (e) => {
        dispatch(changeThema());
    }
 
 
    return (
        <Wrapper className={`wrapper ${thema}`}>
            <div style={{ padding:"50px" }}>
    
                <button 
                    className="btn thema"
                    style={{ float: "right" }}
                    onClick={onChangeThema}>
                    Thema
                </button>
                
                <br style={{ clear: "both" }} />
                
                <h1>counter: {counter}</h1>
     
                <button 
                    className="btn increment"
                    onClick={onIncrement}>
                    Increment
                </button>

                <button 
                    className="btn dicrement"
                    onClick={onDecrement}>
                        Decrement
                </button>

                <button 
                    className="btn async"
                    onClick={onAsync}>
                        Async
                </button>
        
            </div>
        </Wrapper>
    );
}


export default Main;
