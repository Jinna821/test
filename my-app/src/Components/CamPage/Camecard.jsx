import React from 'react';
import '../../Customization/css/CameCard.css';
import { Button } from '@mui/material';
import { UserAddOutlined, ArrowRightOutlined, EyeOutlined,  UsergroupAddOutlined, CalendarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


export default function Camecard(props) {
  return (
    <>
    <div className="campcard-back">
      <div className="campcard-title">
        <label><h6>{props.name}</h6></label>
      </div>
      <div className="camp-info">
        <div className="camp-contents"><label><CalendarOutlined /> {props.date}</label></div>
        <div className="camp-contents"><label><EyeOutlined /> {props.views} views</label></div>
        <div className="camp-contents"><label><UsergroupAddOutlined /> {props.leads}</label></div>
      </div>
      <div className="camp-btn">
        <div className="c-btn">
          <Link><Button fullWidth variant='outlined' id='edit-c-btn' className="edit-camp" color='secondary'><b><ArrowRightOutlined />  Edit Campaign</b></Button></Link>
        </div>
        <div className="c-btn">
          <Link to="/landing/leads"><Button fullWidth variant='outlined' className="leads" color='success'><b><UserAddOutlined />  Leads</b></Button></Link>
        </div>
      </div>
    </div>
    </>
  );
}
