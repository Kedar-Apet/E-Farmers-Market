import { useHistory } from "react-router-dom"

import React from 'react'; 



function Home(){
    const history=useHistory();
const loginHandler=()=>{
    
    history.push('/login');
    }
    const registerHandler=()=>{
    
        history.push('/register');
        }
    return(
        
      <div>
      
        <button onClick={ loginHandler}>login</button>
        <button onClick={ registerHandler}>Register</button>
      </div>
    ) 
  }


  export default Home;