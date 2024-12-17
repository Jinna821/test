import React from 'react'
import SideBar from '../Sidebar'
import { Col, Table } from 'antd'
import { Link } from 'react-router-dom'
import "../../Customization/css/campleads.css"
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons'
import { Button } from '@mui/material'


export default function Campleads() {
  const dataSource = [
    {
      key:'1',
      lead:'afaf',
      name:'asdfa',
      status:'true',
      date_added:'2023-2-21',
      link:'http://localhost:3000'
    }
  ];
  const column = [
    {
      title:'LEAD',
      dataIndex:'lead',
      key:'lead',
    },
    {
      title:'NAME',
      dataIndex:'name',
      key:'name',
    },
    {
      title:'STATUS',
      dataIndex:'status',
      key:'status',
    },
    {
      title:'DATE ADDED',
      dataIndex:'date_added',
      key:'date_added',
    },
    {
      title:'LINK',
      dataIndex:'link',
      key:'link',
    }
  ]
  return (
    <div className='leads_page_back'>
      <SideBar></SideBar>
      <Col span={21} className='ant_leads_land'>
        <div className="leads_land_title">
          <div className='leads_title_left'>
            <Link to="/landing"><h6><label><ArrowLeftOutlined /> Back to campaigns</label></h6></Link>
            <h4><b>Campaigns Leads</b></h4>
            <label>Manage and track leads for this campaign</label>
          </div>
          <div>
            <Link to='/landing/addleads'>
              <Button 
                variant='contained' 
                className='campcustom-sec' 
                style={{ backgroundColor: "#5146dd"}}
              >
                <PlusOutlined />  &nbsp;Add lead
              </Button>
            </Link>
          </div>
        </div>
        <div className="leads_land_table">
          <Table
            dataSource={dataSource} 
            columns={column}
          />
        </div>
      </Col>
    </div>
  )
}
