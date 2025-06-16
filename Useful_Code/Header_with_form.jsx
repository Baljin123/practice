import React from 'react';
import { Button } from "react-bootstrap";
import "../../css/header.css";

const Header = () => {
  return (
    <div style={{position : "relative" , height : "680px" , width : "100%"}}>
      <img
        className="header_image"
        src="/main_image.webp"
        alt="Anniversary"
        style={{ height: "100%", width: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0, zIndex: 0}}
      />

<div className='row'style={{ position: "relative", height: "100%", zIndex: 1}}>
 

<div className='col-12 col-sm-12 col-md-6 mt-6'>
    <div className="row ">
                <div className="col-12 col-sm-12 col-md-12 mt-12">
                    <form id="msform">
                        <div className="form-card row" >
                            <h3 className="fs-title my-5 text-white">Join Our Community</h3>

                            <div className="col-12">
                                <label className="text-white">First Name</label>
                                <input type="text" name="First Name" 
                                // value={leavetype.firstname} onChange={handleInputChange} 
                                />
                            </div>

                            <div className="col-12">
                                <label className="text-white">Last Name</label>
                                <input type="text" name="lastname" 
                                // value={leavetype.lastname} onChange={handleInputChange} 
                                />
                            </div>

                            <div className="col-12">
                                <label className="text-white">Phone Number</label>
                                <input type="number" name="phonenumber" 
                                // value={leavetype.phonenumber} onChange={handleInputChange} 
                                />
                            </div>

                            <div className="col-12">
                                <label className="text-white">Email</label>
                                <input type="email" name="email" 
                                // value={leavetype.email} onChange={handleInputChange} 
                                />
                            </div>

                            <div className="col-12" style={{ display: "inline-flex", justifyContent: "center" }}>
                                <Button type="button" className="btn btn-warning" 
                                // onClick={handlePostRequest}
                                 style={{ width: "100px" }}>Add</Button>
                            </div>
                        </div>

                    </form>
                </div>

              
            </div>
       </div>

        <div className='col-12 col-sm-12 col-md-6 mt-6'>
      <div className="header-content">
        
        <div>
          <h1 className="text-white text-3xl font-bold">HAPPY ANNIVERSARY</h1>
          <p className="text-white text-lg">Make Life With DREAMS PARTNER</p>
        </div>
 </div>  
      </div>
            </div>
    </div>
  );
};

export default Header;
