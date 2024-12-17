import { Button } from '@mui/material'
import { Input } from 'antd'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "../../Customization/css/addlead.css"
import { ArrowLeftOutlined, SaveOutlined, UploadOutlined } from '@ant-design/icons'


export default function AddLead() {
  const fileInputRef = useRef(null);
  const [imageurl, setImageUrl] = useState(null);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger click on the hidden input
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files[0];
    if (files) {
      const url = URL.createObjectURL(files);
      setImageUrl(url);
    }
  };
  return (
    <div>
      <div className="addlead_page_back">
        <div className="addlead_page_main">
          <div className="main_title">
            <div className='title_left'>
              <Link to="/landing"><h6><label><ArrowLeftOutlined /> Back to leads</label></h6></Link>
              <h4><b>&nbsp;&nbsp;Add Leads</b></h4>
            </div>
            <div className="title_right">
              <Button variant='contained' size='large' style={{ backgroundColor: "#5146dd"}}><SaveOutlined/>&nbsp;Save Changes</Button>
            </div>
          </div>
          <div className="addlead_page_inputs">
            <div className='addlead_input'>
              <label><b>Lead name</b></label>
              <Input id='antd_lead_input' size='large' type='text' placeholder="Enter lead name"></Input>
            </div>
            <div className="addlead_file_output">
              <label><b>Profile photo</b></label>
              <div className="file_output_borderline" onClick={handleDivClick} >
                <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{display:'none'}}/>
                <div>
                  <UploadOutlined style={{fontSize:'40px', color:'gray'}}></UploadOutlined>
                </div>
                <label style={{fontSize:"13px"}}>Drag & Drop a photo here , or click to one <br /> PNG, JPG, GIF up to 10MB</label>
              </div>
            </div>
            {
              imageurl && (
                <div className='previewImg'>
                  <label><b>Preview</b></label>
                  <div>
                    <img 
                      src={imageurl} 
                      alt="selected" 
                      style={{
                      maxWidth: '100%',
                      maxHeight: '400px',
                      objectFit: 'contain',
                    }} />
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
