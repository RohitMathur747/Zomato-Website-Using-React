import React,{useState} from "react";
import "../pages/pages.css";
import { Link } from "react-router-dom";
import Login from "../AuthComponents/Login";
import {Modal} from "react-bootstrap";
import Signup from "../AuthComponents/Signup";
import zomato from "../images/zomato.avif";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Header = () => {
    let [logintoggle,setlogintoggle]=useState(false);
    let [signtoggle, setsigntoggle]=useState(false);

    let logintogglehandler=(e)=>{
        //e.preventdefault();
        if(logintoggle){
            setlogintoggle(false)
        }
        else{
            setlogintoggle(true)
        }
    }

    let signtogglehandler=(e)=>{
        //e.preventdefault();
        if(signtoggle){
            setsigntoggle(false);
        }else{
            setsigntoggle(true);
        }
    }

return (
<div id="container">
    <div className="nav">
        <div className="logo"><span><PhoneAndroidIcon></PhoneAndroidIcon></span>
            Get the App
        </div>
            <ul>
                <li>
                    <Link to="/">Investor Relations</Link>
                </li>
                <li>
                    <Link to="/">Add Restaurant</Link>
                </li>
                <li>
                    <Link onClick={logintogglehandler}>Log in</Link>
                </li>
                <li>
                    <Link  onClick={signtogglehandler}>Sign up</Link>
                </li>
            </ul>
    </div>
    
    <div className="content">
        <div className="container">
            <img src={zomato} alt=""></img>
            <h2>Discover the best food & drinks in Bengaluru</h2>
        </div>    
    </div>

    <div className="search-bar">
        <div className="container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 tag">
                <span className="font-icon"><LocationOnIcon></LocationOnIcon></span>
                    <input
                        placeholder="Bengaluru"
                        class="sc-hCbubC capgxt"
                        value=""  
                    />
                    <span className="font-icon"><SearchIcon></SearchIcon></span>
                    
                    <input
                        placeholder="Search for restaurant, cuisine or a dish"
                        class="sc-hCbubC capgxt"
                        value=""  
                    />
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>    
    </div>

        <Modal show={logintoggle} className="modal fade bd-example-modal-lg">
            <Login toggle={logintogglehandler}/>
        </Modal>    
        
        <Modal show={signtoggle} className="modal fade bd-example-modal-lg">
            <Signup toggle={signtogglehandler}/>
        </Modal>

    </div>
);
};

export default Header;
