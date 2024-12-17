import React, { useEffect, useState } from 'react';
import SideBar from '../Sidebar';
import { Col } from 'antd';
import "../../Customization/css/campage.css";
import { PlusOutlined } from '@ant-design/icons';
import Camecard from './Camecard';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Removed unused Axios import

export default function Campaign() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => { // Use async/await for the Axios call
    try {
      const response = await axios.get("http://localhost:5000/api/card/get");
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching cards:", error); // Handle errors properly
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='mback'>
        <SideBar />
        <Col span={21} className='antlanding'>
          <div className="landing">
            <div className="title-box">
              <div className='t-box'>
                <h4><b>Campaigns</b></h4>
                <label>Manage and track your landing page campaigns</label>
              </div>
              <div className="newCamp">
                <Link to="/landing/newcamp">
                  <button className="btn" style={{ backgroundColor: '#5833b7', color: 'white' }}>
                    <PlusOutlined /> New Campaign
                  </button>
                </Link>
              </div>
            </div>
            <div className="campcard">
              <div className="campcard-1">
                {cards.map((card, index) => index % 2 === 0 && ( // Check if the index is even
                  <Camecard 
                    key={card._id} 
                    name={card.campname} 
                    date={card.created_at} 
                    views={20} 
                    leads={card.pageheader} 
                  />
                ))}
              </div>
              
              <div className="campcard-2">
                {cards.map((card, index) => index % 2 === 1 && ( // Check if the index is odd
                  <Camecard 
                    key={card._id} 
                    name={card.campname} 
                    date={card.created_at} 
                    views={20} 
                    leads={card.pageheader} 
                  />
                ))}
              </div>
            </div>
          </div>
        </Col>
      </div>
    </>
  );
}