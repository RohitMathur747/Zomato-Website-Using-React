import React,{useState} from 'react'
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function Signup(){
  let navigate=useNavigate();
  let [name,setname]=useState();
  let [email,setemail]=useState();
  let [password,setpassword]=useState();
  let [confirmPassword,setconfirmPassword]=useState();

  let handledata=(e)=>{
    e.preventDefault();
    if(password===confirmPassword){
      navigate("/login");
    }
  }

  return (
    <div>
      <form id="form_card" onSubmit={handledata} action="">
            <fieldset>
                <legend>
                    <h1><strong>Sign Up:-</strong></h1>
                </legend>
                <label htmlFor="">Username :</label>
                <input type="text" onChange={e=>setname(e.target.value)}></input>
                <label htmlFor="">Email :</label>
                <input type="email" onChange={e=>setemail(e.target.value)}></input>
                <label htmlFor="">Password :</label>
                <input type="password" onChange={e=>setpassword(e.target.value)}></input>
                <label htmlFor="">Confirm Password :</label>
                <input type="password" onChange={e=>setconfirmPassword(e.target.value)}></input>
                <button type="submit">Submit</button>
            </fieldset>
      </form>
    </div>
  )
}

export default Signup
