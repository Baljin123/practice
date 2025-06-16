import React from 'react';
import { Button } from "react-bootstrap";
import "../../css/header.css";

const Header = () => {
  return (
    <div className='main_header_parent_div'>
      <img
        className="header_image"
        src="/main_image.webp"
        alt="Anniversary"
      />

       <div className="header-content">   
          <h1 className="text-white text-3xl font-bold italic">HAPPY ANNIVERSARY</h1>
          <h6 className="text-white text-lg italic">Make Life With DREAMS PARTNER</h6>
          <p className="text-white text-lg italic m-3" style={{textAlign : "center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. make life with dream partner.
                </p>
        </div>
 </div>  
  );
};

export default Header;
