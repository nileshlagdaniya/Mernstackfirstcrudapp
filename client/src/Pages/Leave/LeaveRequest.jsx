import React from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const LeaveRequest = () => {
  return (
    <>
      <div className="main">
        <div className="pe-0 p-3 ms-4">
          <Card className="shadow w-50 mx-auto">
            <Card.Body>
              <Card.Title className="text-center">
                Employee Leave Request Form
              </Card.Title>
              <Row>
                <Form.Group className="col-6 mb-2">
                  <Form.Label>Name</Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      type="text"
                      className="col-4"
                      placeholder="First Name"
                    />
                    <Form.Control
                      type="text"
                      className="col-4 ms-4"
                      placeholder="Last Name"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Employee Email</Form.Label>
                  <Form.Control type="email" placeholder="Employee Email" />
                </Form.Group>
                <Form.Group className="mb-2 col-lg-6">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="tel"
                    maxLength={10}
                    placeholder="Employee mobile number"
                  />
                </Form.Group>
                <Form.Group className="mb-2 col-lg-6">
                  <Form.Label>Position</Form.Label>
                  <Form.Select name="position">
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
                <Card.Title className="my-2">Details of Leave</Card.Title>
                <Form.Group className="mb-2">
                  <Form.Label>Leave Request for how many days ?</Form.Label>
                  {/* <Tabs
                    defaultActiveKey="days"
                    id="justify-tab-example"
                    className=""
                    variant="pills"
                  >
                    <Tab eventKey="days" title="Days">
                      <Form.Group className="mb-2 col-lg-12">
                        <Form.Label>Leave Start </Form.Label>
                        <Form.Control type="date" name="leaveDate" />
                      </Form.Group>
                      <Form.Group className="mb-2 col-lg-12">
                        <Form.Label>Leave End </Form.Label>
                        <Form.Control type="date" name="leaveDate" />
                      </Form.Group>
                    </Tab>
                    <Tab eventKey="hours" title="Hours">
                      <Form.Group className="mb-2 col-lg-12">
                        <Form.Label>Leave Date </Form.Label>
                        <Form.Control type="date" name="leaveDate" />
                      </Form.Group>
                      <Form.Group className="mb-2 col-lg-12">
                        <Form.Label>Leave Time </Form.Label>
                        <div className="d-flex align-items-center">
                          <Form.Control
                            type="time"
                            name="leaveDate"
                            className="me-2"
                          />
                          <Form.Select>
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                          </Form.Select>
                          <span className="text-bold mx-2">Until</span>
                          <Form.Control
                            type="time"
                            name="leaveDate"
                            className="me-2"
                          />
                          <Form.Select>
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                          </Form.Select>
                        </div>
                      </Form.Group>
                    </Tab>
                  </Tabs> */}
                  <Form.Group className="mb-2 col-lg-12">
                    <Form.Label>Leave Start </Form.Label>
                    <Form.Control type="date" name="leaveDate" />
                  </Form.Group>
                  <Form.Group className="mb-2 col-lg-12">
                    <Form.Label>Leave End </Form.Label>
                    <Form.Control type="date" name="leaveDate" />
                  </Form.Group>
                </Form.Group>
                {/* <Form.Group className="mb-2 col-lg-12">
                  <Form.Label>Leave date </Form.Label>
                  <div className="headerSearchItem">
                    <span
                      onClick={() => setOpenDate(!openDate)}
                      className="headerSearchText"
                    >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                      date[0].endDate,
                      "MM/dd/yyyy"
                    )}`}</span>
                    {openDate && (
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date()}
                        className="date"
                      />
                    )}
                  </div>
                </Form.Group> */}
                <Form.Group className="mb-2 row">
                  <Form.Label>Reason for Leave </Form.Label>
                  <Form.Check
                    type="radio"
                    name="leaveType"
                    className="col-3 ps-5 "
                    value="Vacation"
                    label="Vacation"
                    id="Vacation"
                  />
                  <Form.Check
                    type="radio"
                    name="leaveType"
                    className="col-3 ps-5 "
                    value="Sick"
                    label="Sick"
                    id="Sick"
                  />
                  <Form.Check
                    type="radio"
                    name="leaveType"
                    className="col-3 ps-5 "
                    value="Quitting"
                    label="Quitting"
                    id="Quitting"
                  />
                  <Form.Check
                    type="radio"
                    name="leaveType"
                    className="col-3 ps-5 "
                    value="Other"
                    label="Other"
                    id="Other"
                  />
                </Form.Group>
                <div className="text-center mt-2">
                  <Button variant="success">Request for Leave</Button>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LeaveRequest;
