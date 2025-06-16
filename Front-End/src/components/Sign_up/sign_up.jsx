import React, { useState, useEffect } from "react";
import { Container, Form, Button, ProgressBar, Row, Col, Card } from 'react-bootstrap';
import "../../css/signup.css"

const Sign_up = () => {

    const [courseData, setcourseData] = useState([])
    const [Departmentdata, setDepartmentdata] = useState([]);
    const [Semesterdata, setSemesterdata] = useState([]);
    const [sectiondata, setsectiondata] = useState([]);
    const [matchimg, setMatchimg] = useState([]);
    const [studentcategories, setstudentcategory] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    const [docuname, setDocname] = useState("");
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [test, settest] = useState(null);
    const [table, settable] = useState("studentcategory");
    var tableName = { 'tablename': table };
    const [studentData, setstudentData] = useState({
      personalInfo: {
        firstName: '', lastName: '', dob: '', age: '', fathername: '', fatherocuu: '', mothername: '', motheroccu: '', phone: '', alternativeno: '', email: '',
        gender: '', address: '', rollno: '', studentcategory: '', city: '', state: '', pincode: '', course: '', department: '', semester: '', section: ''
      },
      bankInfo: { bankname: '', branch: '', accountholder: '', accountnumber: '', ifsc: '' }
    })
  
    const handleDrop = (event) => {
      event.preventDefault();
      const files = Array.from(event.dataTransfer.files);
      const data = { docuname: docuname, file: files[0] };
      console.log("klsfhlkds");
      
      setSelectedFiles([...selectedFiles, data]);
    };
  
    const handleFileSelect = (event) => {
      event.preventDefault();
      const files = Array.from(event.target.files);
      const data = { docuname: docuname, file: files[0] };
      setMatchimg([...matchimg, data]);
      setSelectedFiles([...selectedFiles, data]);
    };
  
    const handleRemove = (file) => {
      var f1 = file;
      const updatedFiles = selectedFiles.filter((f) => f !== file);
      setSelectedFiles(updatedFiles);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      const category = currentStep === 1 ? 'personalInfo' : 'bankInfo';
      setstudentData({
        ...studentData,
        [category]: {
          ...studentData[category],
          [name]: value,
        },
      });
    };
  
    const handleNext = () => {
      setCurrentStep(currentStep + 1);
    };
  
    const handlePrevious = () => {
      setCurrentStep(currentStep - 1);
    };
  
    function submit(e) {
      const config = { headers: { "content-type": "multipart/form-data" }, };
      const totData = { 'studentData': studentData, 'profile': test };
  
      Axios.post("http://localhost:4000/studentdata", totData, config).then((res) => {
        if (res.data) {
  
          const formData = new FormData();
          selectedFiles.forEach((fileData) => {
            console.log(fileData);
            formData.append('files', fileData.file);
            formData.append('names', fileData.docuname); // Append file names
          });
          const config = { headers: { "content-type": "multipart/form-data" }, };
  
          Axios.post("http://localhost:4000/insertdocuments", formData, config)
            .then((res) => {
              if (res.data) {
                console.log("Files uploaded successfully");
              }
            }).catch((error) => {
              console.error("Error uploading files:", error);
            });
        }
      }).catch((error) => {
        console.error("Error submitting form:", error);
      });
    }
  
    // async function allData() {
  
    //   // studentcategory 
    //   const result_one = await api.getData(tableName)
    //   if (result_one) {
    //     setstudentcategory(result_one);
  
    //     // addcourse Data
    //     settable("addcourse")
    //     var result_two = await api.getData(tableName)
    //     if (result_two) {
    //       setcourseData(result_two);
  
    //       // adddepartment Data
    //       settable("adddepartment")
    //       var result_three = await api.getData(tableName)
    //       if (result_three) {
    //         setDepartmentdata(result_three);
  
    //         // assignsemester Data
    //         settable("assignsemester")
    //         var result_four = await api.getData(tableName)
    //         if (result_four) {
    //           setcourseData(result_four);
  
    //           // assignsection Data
    //           settable("assignsection")
    //           var result_five = await api.getData(tableName)
    //           if (result_five) {
    //             setsectiondata(result_five);
  
    //             // addcourse Data
    //             settable("addcourse")
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  
    useEffect(() => {
    }, [settable])
  
    // useEffect(() => {
    //   allData()
    // }, [])


  return (

    <>
    <div className="row signup_row">

      <div className="col-4 col-sm-4 col-md-4 image_div">
        <img className="sign_up_image sticky" src="./signup_photo_2.png" />
      </div>

      <div className="col-7 col-sm-7 col-md-7 mt-5 sign_form_parent_div">

     <div className="card px-1 pt-5 ml-2" id="formmain">
          <div className="row">
            <div className="col-11 col-md-11 col-sm-11 heading_progress_div">
            <h4 className="">New Marriage Registration</h4>
            <ProgressBar className="my-3 heading_progress_div"now={(currentStep / 5) * 100} />

            </div>

          </div>

          {currentStep === 1 && (
            <Form className="row pb-4">
  
              {/* <Form.Group className="col-12">
  
                <div style={{ margin: '10px' }}>
                  <div className="d-flex justify-content-center mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                      className="rounded-circle" alt="example placeholder" style={{ width: '150px', height: '100px' }} />
                  </div>
  
                  <div className="d-flex justify-content-center">
                    <div className="btn btn-primary btn-rounded">
                      <label className="form-label text-white m-1" htmlFor="customFile2">Choose file</label>
                      <input type="file" className="form-control d-none" name="file" onChange={e => settest(e.target.files[0])} id="customFile2" />
                    </div>
                  </div>
                </div>
              </Form.Group> */}
  
              <Form.Group className="col-5 signup_form_group">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" value={studentData.personalInfo.firstName} onChange={handleInputChange} />
              </Form.Group>
  
              <Form.Group className="col-5 signup_form_group">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" value={studentData.personalInfo.lastName} onChange={handleInputChange} />
              </Form.Group>
  
              <Form.Group className="col-5 signup_form_group">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" name="dob" value={studentData.personalInfo.dob} onChange={handleInputChange} />
              </Form.Group>
  
              <Form.Group className="col-5 signup_form_group">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" name="age" value={studentData.personalInfo.age} onChange={handleInputChange} />
              </Form.Group>
  
               <Form.Group className="col-5 signup_form_group">
                <Form.Label>Phone No.</Form.Label>
                <Form.Control type="phn" name="phone" value={studentData.personalInfo.phone} onChange={handleInputChange} />
              </Form.Group>
  
              <Form.Group className="col-5 signup_form_group">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={studentData.personalInfo.email} onChange={handleInputChange} />
              </Form.Group>
  
              <Form.Group className="col-5 signup_form_group">
                <Form.Label>Alternative Phone.no</Form.Label>
                <Form.Control type="phn" name="alternativeno" value={studentData.personalInfo.alternativeno} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="col-5 signup_form_group">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" name="gender" onChange={handleInputChange}>
                  <option value=""></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Control>
              </Form.Group>
  
              {/*
  
              <Form.Group className="col-3 signup_form_group">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" name="city" value={studentData.personalInfo.city} onChange={handleInputChange} />
              </Form.Group>
  
              <Form.Group className="col-3 signup_form_group">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" name="state" value={studentData.personalInfo.state} onChange={handleInputChange} />
              </Form.Group>
  
              <Form.Group className="col-3 signup_form_group">
                <Form.Label>Pin code</Form.Label>
                <Form.Control type="number" name="pincode" value={studentData.personalInfo.pincode} onChange={handleInputChange} />
              </Form.Group>
  
             <Form.Group className="col-11 signup_form_group">
                <Form.Label>Address</Form.Label>
                <Form.Control as='textarea' name="address" value={studentData.personalInfo.address} onChange={handleInputChange} />
  
              </Form.Group>   */}
  
              <Form.Group className="col-12 my-5" style={{ textAlign: 'center' }}>
                <Button className="mx-5 w-auto" style={{ width: '100px' }} onClick={handleNext}>Next Page</Button>
              </Form.Group>
            </Form>
          )}

           {currentStep === 2 && (
            <>

        <Form className="row">

   <Form.Group className="col-3 signup_form_group">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" name="city" value={studentData.personalInfo.city} onChange={handleInputChange} />
              </Form.Group>
  
              <Form.Group className="col-3 signup_form_group">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" name="state" value={studentData.personalInfo.state} onChange={handleInputChange} />
              </Form.Group>
  
              <Form.Group className="col-3 signup_form_group">
                <Form.Label>Pin code</Form.Label>
                <Form.Control type="number" name="pincode" value={studentData.personalInfo.pincode} onChange={handleInputChange} />
              </Form.Group>
  
             <Form.Group className="col-11 signup_form_group">
                <Form.Label>Address</Form.Label>
                <Form.Control as='textarea' name="address" value={studentData.personalInfo.address} onChange={handleInputChange} />
  
              </Form.Group>   
  
                 <Form.Group className="col-12 my-5 signup_form_group" style={{ textAlign: 'center' }}>
                <Button className="mx-5 w-auto" style={{ width: '100px' }} onClick={handlePrevious}>Previous</Button>
                <Button className="w-auto" onClick={handleNext}>Next Page</Button>
              </Form.Group>
            </Form>
            </>
          )}
   
          {currentStep === 3 && (
            <>
      {/* <h3>Perfossional Details</h3> */}

 <Form className="row">

     <Form.Group className="col-5 signup_form_group">
                <Form.Label>Earning Type</Form.Label>
                <Form.Control as="select" name="gender" onChange={handleInputChange}>
                  <option value="">Job</option>
                  <option value="">Business</option>
                  <option value="Male">Unemployment</option>
                </Form.Control>
              </Form.Group>

               <Form.Group className="col-5 signup_form_group">
                <Form.Label>Office Type</Form.Label>
                <Form.Control as="select" name="gender" onChange={handleInputChange}>
                  <option value="">Office</option>
                  <option value="">Shop</option>
                </Form.Control>
              </Form.Group>

             <Form.Group className="col-5 signup_form_group">
                <Form.Label>Sector</Form.Label>
                <Form.Control as="select" name="gender" onChange={handleInputChange}>
                  <option value="">Yes</option>
                  <option value="">No</option>
                </Form.Control>
              </Form.Group>

           <Form.Group className="col-5 signup_form_group">
              <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" name="mothername" value={studentData.personalInfo.mothername} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="col-11 signup_form_group">
                <Form.Label>Office Address</Form.Label>
                <Form.Control as='textarea' name="address" value={studentData.personalInfo.address} onChange={handleInputChange} />
              </Form.Group>
         
              <Form.Group className="col-5 signup_form_group">
                <Form.Label>Earning Monthaly</Form.Label>
                <Form.Control type="text" name="motheroccu" value={studentData.personalInfo.motheroccu} onChange={handleInputChange} />
              </Form.Group>

               <Form.Group className="col-5 signup_form_group">
                <Form.Label>Earning Monthaly</Form.Label>
                <Form.Control type="text" name="motheroccu" value={studentData.personalInfo.motheroccu} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="col-12 my-5 signup_form_group" style={{ textAlign: 'center' }}>
                <Button className="mx-5 w-auto" style={{ width: '100px' }} onClick={handlePrevious}>Previous</Button>
                <Button className="w-auto" onClick={handleNext}>Next Page</Button>
              </Form.Group>
            </Form>
            </>
          )}
  
          {currentStep === 4 && (
            <>
             {/* <h3> Family Details</h3> */}

 <Form className="row">

     <Form.Group className="col-5 signup_form_group">
                <Form.Label>Family Member</Form.Label>
                <Form.Control as="select" name="gender" onChange={handleInputChange}>
                  <option value="">0</option>
                  <option value="">1</option>
                  <option value="Male">2</option>
                  <option value="Female">3</option>
                   <option value="Female">4</option>
                </Form.Control>
              </Form.Group>

<Form.Group className="col-5 signup_form_group">
                <Form.Label>Are You Live With the Family</Form.Label>
                <Form.Control as="select" name="gender" onChange={handleInputChange}>
                  <option value="">Yes</option>
                  <option value="">No</option>
                </Form.Control>
              </Form.Group>

       <Form.Group className="col-5 signup_form_group">
 <Form.Label>Father Name</Form.Label>
                <Form.Control type="text" name="mothername" value={studentData.personalInfo.mothername} onChange={handleInputChange} />
              </Form.Group>


         
               
  
              <Form.Group className="col-5 signup_form_group">
                <Form.Label>Father Occupations</Form.Label>
                <Form.Control type="text" name="motheroccu" value={studentData.personalInfo.motheroccu} onChange={handleInputChange} />
              </Form.Group>


             <Form.Group className="col-5 signup_form_group">  
                <Form.Label>Mother Name</Form.Label>
                <Form.Control type="text" name="mothername" value={studentData.personalInfo.mothername} onChange={handleInputChange} />
              </Form.Group>
  
              <Form.Group className="col-5 signup_form_group">
                <Form.Label>Mother Occupations</Form.Label>
                <Form.Control type="text" name="motheroccu" value={studentData.personalInfo.motheroccu} onChange={handleInputChange} />
              </Form.Group>

             <Form.Group className="col-5 signup_form_group">
                <Form.Label>Brother</Form.Label>
                <Form.Control as="select" name="gender" onChange={handleInputChange}>
                  <option value="">0</option>
                  <option value="">1</option>
                  <option value="Male">2</option>
                  <option value="Female">3</option>
                   <option value="Female">4</option>
                </Form.Control>
              </Form.Group>

             <Form.Group className="col-5 signup_form_group">
                <Form.Label>Sister</Form.Label>
                <Form.Control as="select" name="gender" onChange={handleInputChange}>
                  <option value="">0</option>
                  <option value="">1</option>
                  <option value="Male">2</option>
                  <option value="Female">3</option>
                   <option value="Female">4</option>
                </Form.Control>
              </Form.Group>

             <Form.Group className="col-12 my-5" style={{ textAlign: 'center' }}>
                <Button className="mx-5 w-auto" style={{ width: '100px' }} onClick={handlePrevious}>Previous</Button>
                <Button className="w-auto" onClick={handleNext}>Next Page</Button>
              </Form.Group>
  
              
            </Form>
            </>
          )}

          {currentStep === 5 && (
            <>
   

              <Form className="row">
              <Form.Group className="col-11 signup_form_group">
                <Form.Label>Proof</Form.Label>
                <Form.Control as="select" name="section" onChange={(e) => setDocname(e.target.value)}>
                  <option value="">Select Enrollment Type</option>
                  <option value="10th">Aadhar Card</option>
                  <option value="12th">Job Identity Card</option>
                </Form.Control>
              </Form.Group>
  
              <Form.Group className="col-11 my-5 signup_form_group">
                <Form.Label>Upload Certificates</Form.Label>
                <div className="drag-drop-area" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
                  <p id="paradrag">Drag and drop files here or</p>
                  <Form.Control type="file" multiple name="file" onChange={handleFileSelect} className="file-input" id="inpdrag" />
                </div>
  
                <Row>
                  {selectedFiles.map((file, index) => (
                    <Col md={4} key={index}>
                      <Card className="file-card" id="imgupload">
                        <Card.Body>
                          <br></br>
                          <h1>{file.docuname}</h1>
                          <br></br>
                          docuname
                          <Card.Title>{file.file.name}</Card.Title>
                          <Button variant="danger" onClick={() => handleRemove(file)}>Remove</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Form.Group>
  
            <Form.Group className="col-12 my-5" style={{ textAlign: 'center' }}>
                <Button className="mx-5 w-auto" style={{ width: '100px' }} onClick={handlePrevious}>Previous</Button>
                <Button className="w-auto" type="submit" onClick={submit}>Submit</Button>
              </Form.Group>
            


            </Form>
            </>
          )}

        </div>
      </div>

    </div>

        </>
  )
}

export default Sign_up
