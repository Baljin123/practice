import React, { useState , useEffect} from 'react';
import axios from "axios";

export default function Ex_Form() {
    const [value, setValue] = useState('');
    const [data , setdata]  = useState([]);


    const submit = async () => {
      console.log("enter in submit function");
        const req_data = {"name" : value , "tablename" : "users"}
        console.log("req_data" ,req_data);
        
        axios.post(`http://localhost:4000/api/user/name_data`, req_data).then(res => {
            if (res.data) {              
              setdata(res.data)

            }else{
              console.log("No Data Found");
            }

          }).catch(err => {
            console.log( "error",err);
          })
        }  
    
useEffect(() => {
},[])

  return (
    <div>
      <h4>Name</h4>
      <input style={{border : "2px solid black"}} type="text" id="myInput" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type something..."/>
      <button onClick={submit} >Submit</button>
    </div>
  )
}