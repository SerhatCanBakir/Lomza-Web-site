import {Link,  } from 'react-router-dom'
import React from 'react'
import { useState } from 'react';
function LoginComp(){
    const [LoginText,setLoginText]=useState('');
    const [LoginPassword,setLoginPasswword]=useState('');
 
    
    const LoginCheck = (e)=>{
        e.preventDefault();

    }
     
    return(
        <div>
            <h3>Login Page</h3>
            <from>
    <input type='text' placeholder='Username' value={LoginText} onChange={(e)=>setLoginText(e.target.value)} id='LoginText'></input>
    <input type='password' placeholder='Password' value={LoginPassword} onChange={e=>setLoginPasswword(e.target.value)} id='LoginPass'></input>
    <button type='submit'>LOGIN</button>
            </from>
        <Link to="/register">Register!</Link>
        </div>
    );
}

export default LoginComp;