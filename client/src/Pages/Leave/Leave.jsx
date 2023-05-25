import React from "react";
import { Badge, Card, Dropdown, Table } from "react-bootstrap";
import { TiArrowSortedDown } from "react-icons/ti";

const Leave = ({ employeeData }) => {
  return (
    <>
      <div className="main p-5 ms-5">
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
                    <th>Position</th>
                    <th>mobile</th>
                    <th>Leave Timing</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 1</td>
                    <td>Nilesh Lagdaniya</td>
                    <td>nileshlagdaniya@gmail.com</td>
                    <td>Frontend Developer</td>
                    <td>7622017757</td>
                    <td>5 days</td>
                    <td className="d-flex align-items-center">
                      <Dropdown className="text-center">
                        <Dropdown.Toggle className="dropdown_btn">
                          <Badge bg="primary">
                            Approve <TiArrowSortedDown />
                          </Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>Approve</Dropdown.Item>
                          <Dropdown.Item>Reject</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leave;
