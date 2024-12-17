import React, { useState } from 'react';
import SideBar from '../Sidebar';
import { Col, Input, notification } from 'antd';
import "../../Customization/css/CampCustomize.css";
import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';
import { Button } from '@mui/material';
import VideoPreview from './VideoPreview';
import "../../Customization/css/Inputbox.css";
import { Link, useNavigate } from 'react-router-dom';
import  Axios  from 'axios';

export default function CampCustomize() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [campname, setCamName] = useState('');
  const [leftnavtitle, setLeftNaviTitle] = useState('');
  const [pageheader, setPageHeader] = useState('');
  const [firstname, setFirstName] = useState('');
  const [videotitle, setVideoTitle] = useState('');
  const [videolink, setVideoLink] = useState('');
  const [btnonetxt, setButtonOneText] = useState('');
  const [btnonelink, setButtonOneLink] = useState('');
  const [btntwotxt, setButtonTwoText] = useState('');
  const [btntwolink, setButtonTwoLink] = useState('');
  const [headertxt, setHeaderText] = useState('');
  const [headerlink, setHeaderLink] = useState('');
  const [extendArray, setExtendArray] = useState(new Array(12).fill(''));

  const previewArray = () => {
    const newArray = [...extendArray]; // create a copy of the existing array
    newArray[0] = campname;
    newArray[1] = leftnavtitle;
    newArray[2] = pageheader;
    newArray[3] = firstname;
    newArray[4] = videotitle;
    newArray[5] = videolink;
    newArray[6] = btnonetxt;
    newArray[7] = btnonelink;
    newArray[8] = btntwotxt;
    newArray[9] = btntwolink;
    newArray[10] = headertxt;
    newArray[11] = headerlink;
    
    setExtendArray(newArray); // update the state
  };
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (sentence, type="success") => {
    api[type]({
      message: type === "error" ? `Error` : `Success`,
      description: sentence,
      placement: "top",
      showProgress:true
    });
  };

  const saveCard = async () =>{
    const date = new Date();
    const option = {year:'numeric', month:'long', day:'numeric'};
    const created_at = date.toLocaleDateString('en-US', option);
    console.log(created_at);
    const cardInfo={ campname, leftnavtitle, pageheader, firstname, videotitle, videolink, btnonetxt, btnonelink, btntwotxt, btntwolink, headertxt, headerlink, created_at };
    Axios.post("http://localhost:5000/api/card/create", cardInfo)
    .then((res)=>{
      console.log(res);
      openNotification("You have successfuly created");
      setTimeout(() => navigate("/landing"), 1500);
    })
    .catch((error)=>{
      console.log(error);
      openNotification("Fail your cared",'error');
    })
  }

  return (
    <div className='camp-customize'>
      <SideBar></SideBar>
      {contextHolder}      
      <Col span={21} className='ant-cutomize-landing'>
        <div className="campcustom-title">
          <Link to="/landing"><h6><label><ArrowLeftOutlined /> Back to campaigns</label></h6></Link>
          <h4><b>Campaigns</b></h4>
          <label>Customize your landing page appearance</label>
        </div>
        <div className="campcustom-navbar">
          <Button className='campcustom-btn' color='gray' onClick={() => { setShow(true); }}>Edit</Button>
          <Button className='campcustom-btn' color='gray' onClick={() => { setShow(false); previewArray(); }}>Preview</Button>
          {
            show && <Button variant='contained' className='campcustom-sec' style={{ backgroundColor: "#5146dd", marginLeft: "70%" }} onClick={saveCard} ><SaveOutlined />  Create Campaign</Button>
          }
        </div>
        <hr />
        <div className="campcustom-inputbox">
          {show &&
            <div className="boxes">
              <div className="box-1">
                <div className="campcustomize-input">
                  <label><b>Campaign Name</b></label>
                  <Input size='large' type='text' className="setBack" placeholder="Enter campaign name" onChange={(e) => { setCamName(e.target.value); }} value={campname}></Input>
                </div>
                <div className="campcustomize-input">
                  <label><b>Left Navigation Subtitle</b></label>
                  <Input size='large' type='text' className="setBack" placeholder="Enter left navigation subtitle" onChange={(e) => { setLeftNaviTitle(e.target.value) }} value={leftnavtitle}></Input>
                </div>
              </div>
              <div className="box-2">
                <label><b>Page Header Text</b></label>
                <Input size='large' type='text' className='setBack' placeholder="Enter page header text" onChange={(e) => { setPageHeader(e.target.value) }} value={pageheader}></Input>
              </div>
              <div className="box-2">
                <label><b>First Name</b></label>
                <Input size='large' type='text' className='setBack' placeholder="Enter first name" onChange={(e) => { setFirstName(e.target.value) }} value={firstname}></Input>
              </div>
              <div className="box-1">
                <div className="campcustomize-input">
                  <label><b>Video Title</b></label>
                  <Input size='large' type='text' className="setBack" placeholder="Enter video title" onChange={(e) => { setVideoTitle(e.target.value) }} value={videotitle}></Input>
                </div>
                <div className="campcustomize-input">
                  <label><b>Video Link</b></label>
                  <Input size='large' type='text' className="setBack" placeholder="Enter video link" onChange={(e) => { setVideoLink(e.target.value) }} value={videolink}></Input>
                </div>
              </div>
              <div className="box-1">
                <div className="campcustomize-input">
                  <label><b>Button one Text</b></label>
                  <Input size='large' type='text' className="setBack" placeholder="Enter first button text" onChange={(e) => { setButtonOneText(e.target.value) }} value={btnonetxt}></Input>
                </div>
                <div className="campcustomize-input">
                  <label><b>Button One Link</b></label>
                  <Input size='large' type='text' className="setBack" placeholder="Enter one button link" onChange={(e) => { setButtonOneLink(e.target.value) }} value={btnonelink}></Input>
                </div>
              </div>
              <div className="box-1">
                <div className="campcustomize-input">
                  <label><b>Button Two Text</b></label>
                  <Input size='large' type='text' className="setBack" placeholder="Enter second button text" onChange={(e) => { setButtonTwoText(e.target.value) }} value={btntwotxt}></Input>
                </div>
                <div className="campcustomize-input">
                  <label><b>Button Two Link</b></label>
                  <Input size='large' type='text' className="setBack" placeholder="Enter second button link" onChange={(e) => { setButtonTwoLink(e.target.value) }} value={btntwolink}></Input>
                </div>
              </div>
              <div className="box-1">
                <div className="campcustomize-input">
                  <label><b>Header Text</b></label>
                  <Input size='large' type='text' className="setBack" placeholder="Enter header text" onChange={(e) => { setHeaderText(e.target.value) }} value={headertxt}></Input>
                </div>
                <div className="campcustomize-input">
                  <label><b>Header Link</b></label>
                  <Input size='large' type='text' className="setBack" placeholder="Enter header link" onChange={(e) => { setHeaderLink(e.target.value) }} value={headerlink}></Input>
                </div>
              </div>
            </div>
          }
          {!show &&
            <VideoPreview contentsArray={extendArray}></VideoPreview>
          }
        </div>
      </Col>
    </div>
  )
}