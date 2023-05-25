import React, { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Card, Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  singleEmployeeFunction,
  updateEmployeeFunction,
} from "../../Services/Apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../Services/Helper";
import LoadingAnimation from "../../Components/LoadAnimation/LoadingAnimation";
import { useContext } from "react";
import { updateEmpData } from "../../Components/context/ContextProvider";
const EditEmployee = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState("");
  const [imgData, setImgData] = useState("");
  const [loadAnimation, setLoadAnimation] = useState(true);
  const { id } = useParams("");
  const { updateData, setUpdateData } = useContext(updateEmpData);

  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
    relocate: "",
    position: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const inputDataValues = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const setProfile = (e) => {
    setImage(e.target.files[0]);
  };

  const singleEmployee = async () => {
    const response = await singleEmployeeFunction(id);
    console.log(response);
    if (response.status === 200) {
      setInputData(response.data);
      setImgData(response.data.profile);
    }
  };

  const updateEmployeeData = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      password,
      mobile,
      gender,
      relocate,
      position,
      dob,
      address,
      city,
      state,
      zip,
      country,
    } = inputData;

    if (firstName === "") {
      toast.error("First name is required");
    } else if (lastName === "") {
      toast.error("Last name is required");
    } else if (email === "") {
      toast.error("Email is required");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid email");
    } else if (mobile === "") {
      toast.error("Mobile required");
    } else if (mobile <= 10) {
      toast.error("valid Mobile required");
    } else if (gender === "") {
      toast.error("Gender required");
    } else if (relocate === "") {
      toast.error("Relocate required");
    } else if (position === "") {
      toast.error("position required");
    } else if (dob === "") {
      toast.error("dob required");
    } else if (address === "") {
      toast.error("Address required");
    } else if (city === "") {
      toast.error("City required");
    } else if (state === "") {
      toast.error("State required");
    } else if (zip === "") {
      toast.error("Zipcode required");
    } else if (country === "") {
      toast.error("Country required");
    } else {
      const data = new FormData();
      data.append("firstName", firstName);
      data.append("lastName", lastName);
      data.append("email", email);
      data.append("password", password);
      data.append("mobile", mobile);
      data.append("gender", gender);
      data.append("relocate", relocate);
      data.append("position", position);
      data.append("dob", dob);
      data.append("address", address);
      data.append("city", city);
      data.append("state", state);
      data.append("zip", zip);
      data.append("country", address);
      data.append("employee_profile", image);

      const config = {
        "Content-Type": "multipart/form-data",
      };
      const response = await updateEmployeeFunction(id, data, config);
      console.log(response);
      if (response.status === 200) {
        navigate("/");
        setUpdateData(response.data);
      } else {
        console.log("error while updating");
      }
    }
  };

  useEffect(() => {
    singleEmployee();
  }, []);

  useEffect(() => {
    if (image) {
      setImgData("");
      setPreview(URL.createObjectURL(image));
    }
    setTimeout(() => {
      setLoadAnimation(false);
    }, 1200);
  }, [image]);

  return (
    <>
      <Helmet>
        <title>Update | Employee</title>
      </Helmet>
      {loadAnimation ? (
        <LoadingAnimation />
      ) : (
        <div className="container custom-width pt-5">
          <Card className="shadow mt-3 px-5 py-2">
            {/* <div className="text-end">
              <Link to={"/"} className="">
                <ImCross />
              </Link>
            </div> */}
            <h5 className="text-center mb-2">Employee Update Form</h5>
            <div className="profile_div text-center">
              <img
                src={image ? preview : `${BASE_URL}/uploads/${imgData}`}
                alt="profile"
              />
            </div>
            <Form>
              <Row>
                <Form.Group className="mb-2">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    value={inputData.firstName}
                    onChange={inputDataValues}
                  />
                </Form.Group>
                {/* <div className="wrapper">
                  <input
                    type="text"
                    className="control"
                    name="firstName"
                    value={inputData.firstName}
                    onChange={inputDataValues}
                    required
                    autoFocus
                  />
                  <span>FirstName</span>
                </div> */}
                <Form.Group className="mb-2">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    value={inputData.lastName}
                    onChange={inputDataValues}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={inputData.email}
                    onChange={inputDataValues}
                  />
                </Form.Group>
                {/* <Form.Group className="mb-2 pass">
                <Form.Label>Password </Form.Label>
                <Form.Control
                  type={!passShow ? "password" : "text"}
                  placeholder="Enter Password"
                  name="password"
                  value={inputData.password}
                  onChange={inputDataValues}
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? <FaEye /> : <FaEyeSlash />}
                </div>
              </Form.Group> */}
                <Form.Group className="mb-2">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="tel"
                    maxLength={10}
                    placeholder="Enter Mobile"
                    name="mobile"
                    value={inputData.mobile}
                    onChange={inputDataValues}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Select your Gender</Form.Label>
                  <div className="d-flex">
                    <Form.Check
                      type="radio"
                      label={"Male"}
                      name={"gender"}
                      value={"Male"}
                      id={"Male"}
                      onChange={inputDataValues}
                      checked={inputData.gender === "Male" ? true : false}
                      className="me-4"
                    />
                    <Form.Check
                      type="radio"
                      label={"Female"}
                      name={"gender"}
                      value={"Female"}
                      id={"Female"}
                      onChange={inputDataValues}
                      checked={inputData.gender === "Female" ? true : false}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Are you willing to relocate?</Form.Label>
                  <div className="d-flex">
                    <Form.Check
                      type="radio"
                      label={"Yes"}
                      name={"relocate"}
                      value={"Yes"}
                      id={"Yes"}
                      onChange={inputDataValues}
                      checked={inputData.relocate === "Yes" ? true : false}
                      className="me-4"
                    />
                    <Form.Check
                      type="radio"
                      label={"No"}
                      name={"relocate"}
                      value={"No"}
                      id={"No"}
                      onChange={inputDataValues}
                      checked={inputData.relocate === "No" ? true : false}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Position you are applying for</Form.Label>
                  <Form.Select
                    name="position"
                    value={inputData.position}
                    onChange={inputDataValues}
                  >
                    <option disabled value="">
                      Select Position
                    </option>
                    <option value="Frontend Developer">
                      Frontend Developer
                    </option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="FullStack Developer">
                      FullStack Developer
                    </option>
                    <option value="Web Designer">Web Designer</option>
                    <option value="Graphic Designer">Graphic Designer</option>
                    <option value="App Developer">App Developer</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    value={inputData.dob}
                    onChange={inputDataValues}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Upload Photo</Form.Label>
                  <Form.Control
                    type="file"
                    name="employee_profile"
                    onChange={setProfile}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Address"
                    name="address"
                    value={inputData.address}
                    onChange={inputDataValues}
                  />
                </Form.Group>
                <Form.Group className="mb-2 ">
                  <Form.Label className="fw-semibold">City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={inputData.city}
                    onChange={inputDataValues}
                    placeholder="Enter City"
                  />
                </Form.Group>

                <Form.Group className="mb-2 ">
                  <Form.Label className="fw-semibold">State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={inputData.state}
                    onChange={inputDataValues}
                    placeholder="Enter State"
                  />
                </Form.Group>
                <Form.Group className="mb-2 ">
                  <Form.Label className="fw-semibold">Zipcode</Form.Label>
                  <Form.Control
                    type="number"
                    maxLength={6}
                    name="zip"
                    value={inputData.zip}
                    onChange={inputDataValues}
                    placeholder="Enter Zipcode"
                  />
                </Form.Group>
                <Form.Group className="mb-2 ">
                  <Form.Label className="fw-semibold">Country</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    value={inputData.country}
                    onChange={inputDataValues}
                    placeholder="Enter Country"
                  />
                </Form.Group>
                <div className="text-center my-2">
                  <Button type="submit" onClick={updateEmployeeData}>
                    Update Employee
                  </Button>
                  <Link to={"/"}>
                    <Button variant="secondary" className="ms-3">
                      cancel
                    </Button>
                  </Link>
                </div>
              </Row>
            </Form>
          </Card>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default EditEmployee;
