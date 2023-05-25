import React, { useState, useEffect } from "react";
import { Alert, Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
// icons
import { BiSort } from "react-icons/bi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { RiUserSearchLine } from "react-icons/ri";
import { MdOutlineShareLocation } from "react-icons/md";
import { GiPerson } from "react-icons/gi";
import { FcLeave } from "react-icons/fc";
// components
import Tables from "../../Components/Tables/Tables";
import LoadingAnimation from "../../Components/LoadAnimation/LoadingAnimation";
// toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// apis
import {
  deleteEmployeeFunction,
  getEmployeeFunction,
} from "../../Services/Apis";
// context provider
import { useContext } from "react";
import {
  addEmpData,
  deleteEmpData,
  updateEmpData,
} from "../../Components/context/ContextProvider";
import Swal from "sweetalert2";
// import "sweetalert2/src/sweetalert2.scss";

const Home = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [loadAnimation, setLoadAnimation] = useState(true);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("All");
  const [relocate, setRelocate] = useState("All");
  const [position, setPosition] = useState("All");
  const [sort, setSort] = useState("new");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  // context
  const { addData, setData } = useContext(addEmpData);
  const { updateData, setUpdateData } = useContext(updateEmpData);
  const { deleteData, setDeleteData } = useContext(deleteEmpData);
  // get all employee
  const getEmployees = async () => {
    const response = await getEmployeeFunction(
      search,
      gender,
      relocate,
      position,
      sort,
      page
    );
    if (response.status === 200) {
      setEmployeeData(response.data.getEmployeeData);
      setPageCount(response.data.Pagination.pageCount);
    }
  };

  // delete employee
  const deleteEmployee = async (id) => {
    const response = await deleteEmployeeFunction(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (response.status === 200) {
          toast.error("Employee deleted successfully", {
            position: "top-center",
            autoClose: 500,
          });
          getEmployees();
          setDeleteData(response.data);
        }
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  // pagination
  const prevPage = () => {
    setPage(() => {
      if (page === 1) return page;
      return page - 1;
    });
  };
  const nextPage = () => {
    setPage(() => {
      if (page === pageCount) return page;
      return page + 1;
    });
  };

  useEffect(() => {
    getEmployees();
    setTimeout(() => {
      setLoadAnimation(false);
      setData(false);
      setUpdateData(false);
      // setDeleteData(false);
    }, 1200);
  }, [search, gender, relocate, position, sort, page]);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <Helmet>
        <title>Home | Employee</title>
      </Helmet>

      <ToastContainer />
      <div className="container">
        <div className="main">
          {/* search and add button */}
          <div className="search-add mt-4 d-flex justify-content-between">
            <div className="search col-5">
              <Form className="d-flex text-light ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="info d-flex align-items-center">
                  <RiUserSearchLine className="me-2" />
                  Search
                </Button>
              </Form>
            </div>
            {/* alerts */}
            {addData ? (
              <>
                <div className="w-25 text-center col-5">
                  <Alert
                    className="my-0 py-2"
                    variant="success"
                    onClose={() => setData("")}
                  >
                    {addData.firstName.toUpperCase()} SuccessFully Added
                  </Alert>
                </div>
              </>
            ) : (
              ""
            )}
            {updateData ? (
              <>
                <div className="w-25 text-center col-5">
                  <Alert
                    className="my-0 py-2"
                    variant="info"
                    onClose={() => setUpdateData("")}
                  >
                    {updateData.firstName.toUpperCase()} SuccessFully Updated
                  </Alert>
                </div>
              </>
            ) : (
              ""
            )}
            {/* {deleteData ? (
              <>
                <div className="w-25 text-center col-5">
                  <Alert
                    className="my-0 py-2"
                    variant="danger"
                    onClose={() => setDeleteData("")}
                  >
                    {deleteData.firstName.toUpperCase()} SuccessFully Deleted
                  </Alert>
                </div>
              </>
            ) : (
              ""
            )} */}
            {/* end alerts */}
            <div className="add-btn ">
              <NavLink to={"/add-employee"}>
                <Button className=" d-flex align-items-center">
                  <BsFillPersonPlusFill className="me-2" />
                  Add Employee
                </Button>
              </NavLink>
            </div>
          </div>
          {/* Advance properties filter sorting */}
          <div className="filter_div mt-5 d-flex justify-content-between align-items-center flex-wrap">
            {/* sort */}
            <div className="sort">
              <h4>Sort Value</h4>
              <Dropdown className="text-center">
                <Dropdown.Toggle className="dropdown_btn">
                  <BiSort />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSort("new")}>
                    Latest Added
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setSort("old")}>
                    Old Added
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* gender */}
            <div className="filter-gender">
              <h4>
                Filter with Gender <GiPerson />
              </h4>
              <div className="gender d-flex justify-content-around">
                <Form.Check
                  type="radio"
                  name="gender"
                  defaultChecked
                  value={"All"}
                  id="All"
                  label="All"
                  onChange={(e) => setGender(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  name="gender"
                  value={"Male"}
                  id="Male"
                  label="Male"
                  onChange={(e) => setGender(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  name="gender"
                  value={"Female"}
                  id="Female"
                  label="Female"
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>

            {/* position */}
            <div className="ddd">
              <DropdownButton
                title="Employee's Positions"
                id="dropdown-basic-button"
                variant="inherit"
              >
                <Dropdown.Item href="#/action-1">
                  <Form.Check
                    type="radio"
                    name="position"
                    defaultChecked
                    value="All"
                    label="All positions"
                    id="All positions"
                    onClick={(e) => setPosition(e.target.value)}
                  />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Form.Check
                    type="radio"
                    name="position"
                    value="Graphic Designer"
                    id="Graphic Designer"
                    label="Graphic Designer"
                    onClick={(e) => setPosition(e.target.value)}
                  />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Form.Check
                    type="radio"
                    name="position"
                    value="Web Designer"
                    id="Web Designer"
                    label="Web Designer"
                    onClick={(e) => setPosition(e.target.value)}
                  />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Form.Check
                    type="radio"
                    name="position"
                    value="Backend Developer"
                    id="Backend Developer"
                    label="Backend Developer"
                    onClick={(e) => setPosition(e.target.value)}
                  />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Form.Check
                    type="radio"
                    name="position"
                    value="Frontend Developer"
                    id="Frontend Developer"
                    label="Frontend Developer"
                    onClick={(e) => setPosition(e.target.value)}
                  />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Form.Check
                    type="radio"
                    name="position"
                    value="FullStack Developer"
                    id="FullStack Developer"
                    label="FullStack Developer"
                    onClick={(e) => setPosition(e.target.value)}
                  />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-4">
                  <Form.Check
                    type="radio"
                    name="position"
                    value="App Developer"
                    id="App Developer"
                    label="App Developer"
                    onClick={(e) => setPosition(e.target.value)}
                  />
                </Dropdown.Item>
              </DropdownButton>
            </div>
            {/* relocate */}
            <div className="filter-relocate">
              <h4>
                Filter with Relocate <MdOutlineShareLocation />
              </h4>
              <div className="relocate d-flex justify-content-around">
                <Form.Check
                  type="radio"
                  name="relocate"
                  defaultChecked
                  value="All"
                  label="All"
                  onChange={(e) => setRelocate(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  name="relocate"
                  value="Yes"
                  id="Yes"
                  label="Yes"
                  onChange={(e) => setRelocate(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  name="relocate"
                  value="No"
                  id="No"
                  label="No"
                  onChange={(e) => setRelocate(e.target.value)}
                />
              </div>
            </div>

            <div className="leave-request">
              <Link
                to={"/leave/leave-request"}
                className="text-decoration-none"
              >
                <Button variant="success d-flex align-items-center">
                  <FcLeave className="me-2" />
                  Request For Leave
                </Button>
              </Link>
            </div>
          </div>

          {loadAnimation ? (
            <LoadingAnimation />
          ) : (
            <Tables
              employeeData={employeeData}
              deleteEmployee={deleteEmployee}
              page={page}
              setPage={setPage}
              pageCount={pageCount}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
