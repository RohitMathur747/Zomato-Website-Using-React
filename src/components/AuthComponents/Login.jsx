import React,{useState} from 'react'
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function Login(){
  let navigate=useNavigate();
  let [email,setemail]=useState();
  let [password,setpassword]=useState();

  let handledata=(e)=>{
    e.preventDefault();
    if(password.length>8){
      navigate("/");
    }
  }

  return (
    <div>
      <form id="form_card" onSubmit={handledata} action="">
            <fieldset>
                <legend>
                  <h1><strong>Log In:-</strong></h1>
                </legend>  
                  <label htmlFor="">Email :</label>
                  <input type="email" onChange={e=>setemail(e.target.value)}></input>
                  <label htmlFor="">Password :</label>
                  <input type="password" onChange={e=>setpassword(e.target.value)}></input>
                  <button type="submit">Submit</button>
            </fieldset>
      </form>
    </div>
  )
}


export default Login