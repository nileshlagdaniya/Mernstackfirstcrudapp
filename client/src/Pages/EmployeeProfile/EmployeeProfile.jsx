import React, { useState } from "react";
import moment from "moment";
import { Helmet } from "react-helmet";
import { MdEmail, MdLocationOn, MdDateRange } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { TbLocation } from "react-icons/tb";
import { FcLeft, FcPositiveDynamic } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";
import { GiPerson } from "react-icons/gi";
import { Card, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { singleEmployeeFunction } from "../../Services/Apis";
import { useEffect } from "react";
import { BASE_URL } from "../../Services/Helper";
import { FaBirthdayCake } from "react-icons/fa";
import LoadingAnimation from "../../Components/LoadAnimation/LoadingAnimation";
const EmployeeProfile = () => {
  const { id } = useParams("");
  const [employeeProfile, setEmployeeProfile] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  const singleEmployee = async () => {
    const response = await singleEmployeeFunction(id);
    console.log(response);
    if (response.status === 200) {
      setEmployeeProfile(response.data);
    }
  };

  useEffect(() => {
    singleEmployee();
    setTimeout(() => {
      setShowLoader(false);
    }, 1200);
  }, [id]);
  return (
    <>
      <Helmet>
        <title>Profile | Employee</title>
      </Helmet>
      {showLoader ? (
        <LoadingAnimation />
      ) : (
        <div className="container pt-5">
          <Card className="card-profile shadow col-lg-4 mx-auto mt-5">
            <Card.Body>
              {/* <div className="text-end me-auto">
                <Link to={"/"}>
                  <ImCross />
                </Link>
              </div> */}
              <Row>
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center">
                    <img
                      src={`${BASE_URL}/uploads/${employeeProfile.profile}`}
                      alt=""
                    />
                  </div>
                </div>
              </Row>
              <div className="text-start">
                <h3>
                  {employeeProfile.firstName + "  " + employeeProfile.lastName}
                </h3>
                <h6>
                  <MdEmail className="email text-primary" /> Email :-{" "}
                  <span>{employeeProfile.email}</span>
                </h6>
                <h6>
                  <BsFillPhoneFill className="email text-success" />
                  Mobile :- <span>{employeeProfile.mobile}</span>
                </h6>
                <h6>
                  <GiPerson className="text-danger" />
                  Gender :- <span>{employeeProfile.gender}</span>
                </h6>
                <h6>
                  <MdLocationOn className="location text-info" />
                  Location :- <span>{employeeProfile.address}</span>
                </h6>
                <h6>
                  <MdLocationOn className="location text-info" />
                  City :- <span>{employeeProfile.city}</span>
                </h6>
                <h6>
                  <MdLocationOn className="location text-info" />
                  State :- <span>{employeeProfile.state}</span>
                </h6>
                <h6>
                  <MdLocationOn className="location text-info" />
                  Zipcode :- <span>{employeeProfile.zip}</span>
                </h6>
                <h6>
                  <MdLocationOn className="location text-info" />
                  Country :- <span>{employeeProfile.country}</span>
                </h6>
                <h6>
                  <FaBirthdayCake className="text-primary" /> Date Of Birth :-{" "}
                  <span>
                    {moment(employeeProfile.dob).format("DD-MM-YYYY")}
                  </span>
                </h6>
                <h6>
                  <FcPositiveDynamic /> Position :-{" "}
                  <span>{employeeProfile.position}</span>
                </h6>
                <h6>
                  <TbLocation className="text-warning" /> Relocate :-{" "}
                  <span>{employeeProfile.relocate}</span>
                </h6>
                <h6>
                  <MdDateRange className="calender text-primary" /> Date Created
                  :-{" "}
                  <span>
                    {moment(employeeProfile.dateCreated).format("DD-MM-YYYY")}
                  </span>
                </h6>
                <h6>
                  <MdDateRange className="calender text-info" /> Date Updated{" "}
                  <GrUpdate /> :-{" "}
                  <span>
                    {moment(employeeProfile.dateUpdated).format("DD-MM-YYYY")}
                  </span>
                </h6>
              </div>
              <div className="cancleBtn text-end">
                <Link
                  className="text-decoration-none border border-primary p-2 rounded"
                  to={"/"}
                >
                  {" "}
                  <FcLeft /> Back to Home
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default EmployeeProfile;
