// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import axios from "axios";
// // import "./login.css";
// // import { BASE_URL } from "../../Services/Helper";
// // const Login = () => {
// //   const [data, setData] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   const [error, setError] = useState("");

// //   const handleChange = ({ currentTarget: input }) => {
// //     setData({ ...data, [input.name]: input.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const url = `${BASE_URL}/employee/login`;
// //       const { data: res } = await axios.post(url, data);
// //       localStorage.setItem("token", res.data);
// //       window.location = "/";
// //       console.log(res.message);
// //     } catch (error) {
// //       if (
// //         error.response &&
// //         error.response.status >= 400 &&
// //         error.response.status <= 500
// //       ) {
// //         setError(error.response.data.message);
// //       }
// //     }
// //   };

// //   return (
// //     <div className="login_container">
// //       <div className="login_form_container">
// //         <div className="left">
// //           <form className="form_container" onSubmit={handleSubmit}>
// //             <h1>Login to Your Account</h1>

// //             <input
// //               type="email"
// //               placeholder="Email"
// //               name="email"
// //               value={data.email}
// //               onChange={handleChange}
// //               required
// //               className="input"
// //             />
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               name="password"
// //               value={data.password}
// //               onChange={handleChange}
// //               required
// //               className="input"
// //             />
// //             {error && <div className="error_msg">{error}</div>}

// //             <button type="submit" className="green_btn">
// //               Sign Up
// //             </button>
// //           </form>
// //         </div>
// //         <div className="right">
// //           <h1>New Here ?</h1>
// //           <Link to={"/register"}>
// //             <button type="button" className="white_btn">
// //               Sign Up
// //             </button>
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState, useEffect } from "react";
// import { Helmet } from "react-helmet";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Card, Row, Form, Button } from "react-bootstrap";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import LoadingAnimation from "../../Components/LoadAnimation/LoadingAnimation";
// import { employeeLoginFunction } from "../../Services/Apis";
// import { useContext } from "react";
// import { addEmpData } from "../../Components/context/ContextProvider";

// const Login = () => {
//   const navigate = useNavigate();
//   const [passShow, setPassShow] = useState(false);
//   const [loadAnimation, setLoadAnimation] = useState(true);
//   const { addData, setData } = useContext(addEmpData);

//   const [inputData, setInputData] = useState({
//     email: "",
//     password: "",
//   });

//   const inputDataValues = (e) => {
//     const { name, value } = e.target;
//     setInputData({
//       ...inputData,
//       [name]: value,
//     });
//   };

//   const submitEmployeeData = async (e) => {
//     e.preventDefault();

//     const { email, password } = inputData;

//     if (email === "") {
//       toast.error("Email is required");
//     } else if (!email.includes("@")) {
//       toast.error("Enter Valid email");
//     } else if (password === "") {
//       toast.error("Password required");
//     } else {
//       const data = new FormData();
//       data.append("email", email);
//       data.append("password", password);

//       const response = await employeeLoginFunction(data);
//       console.log(response);
//       if (response.status === 200) {
//         setInputData({
//           ...inputData,
//           email: "",
//           password: "",
//         });
//         setData(response.data);
//         navigate("/");
//       } else {
//         console.log("error while Login");
//       }
//     }
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       setLoadAnimation(false);
//     }, 1200);
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>Login | Employee</title>
//       </Helmet>
//       {loadAnimation ? (
//         <LoadingAnimation />
//       ) : (
//         <div className="container custom-width">
//           <Card className="shadow mt-3 px-5 py-3">
//             <h4 className="text-center mb-2">Login Form</h4>

//             <Form>
//               <Row>
//                 <Form.Group className="mb-2 ">
//                   <Form.Label className="fw-semibold">Email </Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter Email"
//                     name="email"
//                     value={inputData.email}
//                     onChange={inputDataValues}
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-2  pass">
//                   <Form.Label className="fw-semibold">Password </Form.Label>
//                   <Form.Control
//                     type={!passShow ? "password" : "text"}
//                     placeholder="Enter Password"
//                     name="password"
//                     value={inputData.password}
//                     onChange={inputDataValues}
//                   />
//                   <div
//                     className="showpass"
//                     onClick={() => setPassShow(!passShow)}
//                   >
//                     {!passShow ? <FaEye /> : <FaEyeSlash />}
//                   </div>
//                 </Form.Group>

//                 <div className="text-center my-2 ">
//                   <Button type="submit" onClick={submitEmployeeData}>
//                     Submit
//                   </Button>
//                 </div>
//                 <Link to={"/register"}>
//                   Already Account? Register
//                   {/* <Button variant="secondary" className="ms-3">
//                     </Button> */}
//                 </Link>
//               </Row>
//             </Form>
//           </Card>
//           <ToastContainer />
//         </div>
//       )}
//     </>
//   );
// };

// export default Login;
