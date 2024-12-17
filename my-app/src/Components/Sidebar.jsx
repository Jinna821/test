import { CopyOutlined, LogoutOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Col, Button } from 'antd';
import React from 'react';
import '../Customization/css/Sidebar.css';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <>
      <Col span={3} id='antdBack' style={{}} >
        <div id='title'>
          <h4><b>Jada</b> </h4>
        </div>
        <div className="menubar">
          <div className="menuspace">
            <Link to="/landing"><Button type='text' className='antdbtn' style={{color:'#ffffffb5', width:'100%', fontSize:'14px', display:'flex', justifyContent:'left'}}><CopyOutlined style={{marginRight:'10px'}} />Campaigns</Button></Link>
          </div>
          <div className="sidebottomspace">
            <Button type='text' style={{color:'#ffffffb5', width:'100%', fontSize:'14px', display:'flex', justifyContent:'left'}}><QuestionCircleOutlined style={{marginRight:'10px'}}/> Help & support</Button>
            <Link to="/"><Button type='text' style={{color:'#ffffffb5', width:'100%', fontSize:'14px', display:'flex', justifyContent:'left', marginTop:'5vh'}}><LogoutOutlined style={{marginRight:'10px'}}/> Log out</Button></Link>
          </div>
        </div>
        
      </Col>
    </>
  );
}
