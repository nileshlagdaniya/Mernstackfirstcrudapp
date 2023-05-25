// import React, { useState, useEffect } from "react";
// // import { employeeRegisterFunction, registerfunc } from "../../services/Apis";
// import { employeeRegisterFunction, registerfunc } from "../../Services/Apis";
// import { Card, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Select from "react-select";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// const Register = () => {
//   const [inputdata, setInputData] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     mobile: "",
//     gender: "",
//     location: "",
//   });
//   const [status, setStatus] = useState("Active");
//   const [image, setImage] = useState("");
//   const [preview, setPreview] = useState("");

//   const navigate = useNavigate();
//   // status options
//   const options = [
//     { value: "Active", label: "Active" },
//     { value: "InActive", label: "InActive" },
//   ];

//   // status set
//   const setStatusValue = (e) => {
//     setStatus(e.value);
//   };
//   // set input values
//   const setInputValue = (e) => {
//     const { name, value } = e.target;
//     setInputData({ ...inputdata, [name]: value });
//   };

//   // profile set
//   const setProfile = (e) => {
//     setImage(e.target.files[0]);
//   };

//   useEffect(() => {
//     if (image) {
//       setPreview(URL.createObjectURL(image));
//     }
//   }, [image]);

//   const submitUserData = async (e) => {
//     e.preventDefault();

//     const { fname, lname, email, mobile, gender, location } = inputdata;

//     if (fname === "") {
//       toast.error("First name is Required !");
//     } else if (lname === "") {
//       toast.error("Last name is Required !");
//     } else if (email === "") {
//       toast.error("Email is Required !");
//     } else if (!email.includes("@")) {
//       toast.error("Enter Valid Email !");
//     } else if (mobile === "") {
//       toast.error("Mobile is Required !");
//     } else if (mobile.length > 10) {
//       toast.error("Enter Valid Mobile!f");
//     } else if (gender === "") {
//       toast.error("Gender is Required !");
//     } else if (status === "") {
//       toast.error("Status is Required !");
//       // } else if (image === "") {
//       //   toast.error("Profile is Required !");
//     } else if (location === "") {
//       toast.error("location is Required !");
//     } else {
//       const data = new FormData();
//       data.append("fname", fname);
//       data.append("lname", lname);
//       data.append("email", email);
//       data.append("mobile", mobile);
//       data.append("gender", gender);
//       data.append("status", status);
//       //   data.append("user_profile", image);
//       data.append("location", location);

//       const config = {
//         "Content-Type": "multipart/form-data",
//       };

//       const response = await registerfunc(data, config);

//       if (response.status === 200) {
//         setInputData({
//           ...inputdata,
//           fname: "",
//           lname: "",
//           email: "",
//           mobile: "",
//           gender: "",
//           location: "",
//         });
//         setStatus("");
//         setImage("");
//         navigate("/");
//       } else {
//         toast.error("Error!");
//       }
//     }
//   };
//   return (
//     <>
//       <>
//         <ToastContainer />
//         <div className="container">
//           <h2 className="text-center mt-1">Register Your Details</h2>
//           <Card className="mt-3 shadow p-3">
//             <div className="profile_div text-center">
//               <img
//                 src={
//                   preview
//                     ? preview
//                     : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4dcYWVFHFsz8M3Rsjpy2Hg6gQAmgbCIwWA&usqp=CAU"
//                 }
//                 alt="profile"
//               />
//             </div>
//             <Form>
//               <Row>
//                 <Form.Group className="mb-3 col-lg-6">
//                   <Form.Label>First Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="fname"
//                     placeholder="Enter First Name"
//                     onChange={setInputValue}
//                     value={inputdata.fname}
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3 col-lg-6">
//                   <Form.Label>LastName</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="lname"
//                     placeholder="Enter Last Name"
//                     onChange={setInputValue}
//                     value={inputdata.lname}
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3 col-lg-6">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     placeholder="Enter Email"
//                     onChange={setInputValue}
//                     value={inputdata.email}
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3 col-lg-6">
//                   <Form.Label>Mobile</Form.Label>
//                   <Form.Control
//                     type="number"
//                     name="mobile"
//                     placeholder="Enter Mobile"
//                     value={inputdata.mobile}
//                     onChange={setInputValue}
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3 col-lg-6">
//                   <Form.Label>Select your Gender</Form.Label>
//                   <Form.Check
//                     type="radio"
//                     label={"Male"}
//                     name={"gender"}
//                     value={"Male"}
//                     onChange={setInputValue}
//                   />
//                   <Form.Check
//                     type="radio"
//                     label={"Female"}
//                     name={"gender"}
//                     value={"Female"}
//                     onChange={setInputValue}
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3 col-lg-6">
//                   <Form.Label>Select your Status</Form.Label>
//                   <Select options={options} onChange={setStatusValue} />
//                 </Form.Group>
//                 {/* <Form.Group className="mb-3 col-lg-6">
//                   <Form.Label>Choose Your Profile</Form.Label>
//                   <Form.Control
//                     type="file"
//                     name="user_profile"
//                     onChange={setProfile}
//                   />
//                 </Form.Group> */}
//                 <Form.Group className="mb-3 col-lg-6">
//                   <Form.Label>Location</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter Your Location"
//                     name="location"
//                     value={inputdata.location}
//                     onChange={setInputValue}
//                   />
//                 </Form.Group>
//                 <Button
//                   variant="primary"
//                   type="submit"
//                   onClick={submitUserData}
//                 >
//                   Register
//                 </Button>
//               </Row>
//             </Form>
//           </Card>
//         </div>
//       </>
//     </>
//   );
// };

// export default Register;
