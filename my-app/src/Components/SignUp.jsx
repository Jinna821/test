import React, { useState } from 'react';
import '../Customization/css/SignUp.css';
import photo from '../Customization/image/Capture1.PNG';
import { CheckCircleOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Input, notification } from 'antd';
import { Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (sentence, type="success") => {
    api[type]({
      message: type === "error" ? `Error` : `Success`,
      description: sentence,
      placement: "top",
      showProgress:true
    });
  };

  const validation = (email, username, password, confirm) => {
    if (!email || !username || !password || !confirm) {
      openNotification("All fields are required!", "error");
      return false;
    }
    if (password !== confirm) {
      openNotification("Passwords do not match!", "error");
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (validation(email, username, password, confirm)) {
      Axios.post("http://localhost:5000/api/auth/register", { email, username, password })
      .then(()=>{
        openNotification("You have successfully registered.");
        setTimeout(() => navigate("/"), 1500);
      }).catch((error)=>{
        console.error(error);
        openNotification("Sorry, please try again", "error");
      });
    }
  };

  return (
    <div className="backgrounds">
      {contextHolder}   
      <div className="leftrow">
        <div className="leftboard">
          <div className="title">
            <h2><b>Welcome to Jada</b></h2>
            <p><span style={{ color: '#6848e3' }}> Free forever. </span> No credit card required</p>
          </div>
          <Divider><label htmlFor=""> Or continue with email </label></Divider>
          <div className="work-email inputs">
            <span id="inputs">Work email</span>
            <Input type='email' id='inputbox' placeholder='you@email.com' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="full-name inputs">
            <span id="inputs">Full name</span>
            <Input type='text' id='inputbox' placeholder='Theo Henry' onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="passwords inputs">
            <span id="inputs">Password</span>
            <Input type='password' id='inputbox' placeholder='123456' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="confirmation inputs">
            <span id="inputs">Confirmation</span>
            <Input type='password' id='inputbox' placeholder='123456' onChange={(e) => setConfirm(e.target.value)} />
          </div>
          <div className="getAccounts inputs">
            <button type="button" className="btn" style={{ backgroundColor: 'rgb(147 51 234)', color: 'white', width: '100%' }} onClick={handleSignUp}>
              Get Started <ArrowRightOutlined />
            </button>
          </div>
          <div className="bottoms">
            <p>Already have an account? <Link to="/"><span style={{ color: 'blueviolet' }}>Sign in here</span></Link></p>
          </div>
        </div>
      </div>
      <div className="rightrow">
        <div className="img">
          <img src={photo} alt="Signup" className='image' style={{ width: '100%', borderRadius: '10px' }} />
          <div className='content'>
            <p><CheckCircleOutlined style={{ color: '#0dd30d', fontSize: '18px' }} /> AI-powered workflow automation</p>
            <p><CheckCircleOutlined style={{ color: '#0dd30d', fontSize: '18px' }} /> Unlimited team collaboration</p>
            <p><CheckCircleOutlined style={{ color: '#0dd30d', fontSize: '18px' }} /> Real-time analytics dashboard</p>
            <p><CheckCircleOutlined style={{ color: '#0dd30d', fontSize: '18px' }} /> 24/7 priority support</p>
          </div>
          <div className="lastcontent">
            <em>
              <p>"Jada transformed how our team collaborates. We've seen a 40% increase in productivity since implementing it. The best part? It's completely free!"</p>
              <p><b>Sarah Chen</b><br /> CTO at Techflow </p>
            </em>
          </div>
        </div>
      </div>
    </div>
  );
}