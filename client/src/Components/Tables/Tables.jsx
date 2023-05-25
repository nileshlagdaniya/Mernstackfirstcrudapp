import React from "react";
import moment from "moment";
import { Card, Dropdown, Table } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "../../Services/Helper";
import Paginations from "./../Pagination/Paginations";

const Tables = ({
  employeeData,
  deleteEmployee,
  page,
  setPage,
  pageCount,
  nextPage,
  prevPage,
}) => {
  return (
    <div>
      <div className="">
        <div className="col mt-2">
          <Card className="shadow ">
            <Table
              striped
              bordered
              hover
              className="text-center"
              responsive="sm"
            >
              <thead className="thead-primary">
                <tr className="table-primary">
                  <th>Id</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Profile</th>
                  <th>Position</th>
                  <th>Date of Birth</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.length > 0 ? (
                  employeeData.map((element, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1 + (page - 1) * 5}</td>
                        <td>{element.firstName + " " + element.lastName}</td>
                        <td>{element.email}</td>
                        <td>{element.gender === "Male" ? "Male" : "Female"}</td>
                        <td className="profile_div_table">
                          <img
                            src={`${BASE_URL}/uploads/${element.profile}`}
                            alt=""
                          />
                        </td>
                        <td>{element.position}</td>
                        <td>{moment(element.dob).format("DD/MM/YYYY")}</td>
                        <td>
                          <Dropdown className="text-center">
                            <Dropdown.Toggle className="action" variant="light">
                              <BsThreeDotsVertical />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item>
                                <NavLink
                                  className="text-decoration-none"
                                  to={`/employee-profile/${element._id}`}
                                >
                                  <FaEye style={{ color: "green" }} />{" "}
                                  <span>View</span>{" "}
                                </NavLink>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <NavLink
                                  className="text-decoration-none"
                                  to={`/edit-employee/${element._id}`}
                                >
                                  <FaEdit style={{ color: "blue" }} />{" "}
                                  <span>Edit</span>{" "}
                                </NavLink>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <div
                                  onClick={() => deleteEmployee(element._id)}
                                >
                                  <FaTrash style={{ color: "red" }} />{" "}
                                  <span>Delete</span>{" "}
                                </div>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <>
                    <div className="text-bold">No Employee Found</div>
                  </>
                )}
              </tbody>
            </Table>
            <Paginations
              page={page}
              setPage={setPage}
              pageCount={pageCount}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tables;
