import React, { useState } from 'react';
import '../Customization/css/LogInPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Divider } from '@mui/material';
import { MailOutlined, UserOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Input, notification } from 'antd';
import logo from '../Customization/image/Capture.PNG';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const openNotification = (descriptions, type='success') =>{
    api[type]({
      message: type === "error" ? 'Error' : 'Success',
      description: descriptions,
      placement:"top",
      showProgress:true
    });
  };

  const validation = (email, password) =>{
    if(!email || !password){
      openNotification("Please input again",'error');
      return false;
    }else{
      return true;
    }
  }

  const handleLogIn = () =>{
    if(validation(email, password)){
      Axios.post("http://localhost:5000/api/auth/login",{email, password})
      .then(()=>{
        openNotification("Success");
        setTimeout(()=>navigate("/landing"),2000);
      }).catch((error)=>{
        openNotification("Please regist again",'error');
      })
    }
  }

  return (
    <>
    <div className='background'>
      {contextHolder}
      <div className="container d-flex justify-content-center align-items-center">
        <div className="form-cards cards">
          <div className="titles">
            <img src={logo} alt="" srcset="" />
            <h3 className='h3-title'> <b>Welcome to back Jada</b> </h3>
            <p>Sign in to continue journey</p>
          </div>
          <Divider style={{fontSize:'13px'}}> <label htmlFor="">Or continue with email </label> </Divider>
          <div className="inputbox">  
            <div className='email'>
              <Input type='email' className='newInput' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email address' prefix={ <MailOutlined style={{color:'gray'}} /> }/> 
            </div>
            <div className='password'>
              <Input type='password' className='newInput'  value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' prefix={ <UserOutlined style={{color:'gray'}}/> }/>
            </div>
          </div>
          <div className='checked'>
            <div class="form-check remindbox" style={{textAlign:'left'}}>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">Remember me</label>
              <div className='rightText'>
                <p><b>Forgot your password</b> </p>
              </div>
            </div>
          </div>
          <div className='buttons'>
            <button type="button" class="btn" onClick={handleLogIn} style={{backgroundColor:'rgb(147 51 234)', color:'white', width:'100%'}} >Sign in  <ArrowRightOutlined/></button>
          </div>
          <div className="bottomline">
            <p>Don't you have account? <span className='a'> <Link to="/signup" style={{color:'blueviolet'}}><b> Sign up for free</b></Link></span></p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
