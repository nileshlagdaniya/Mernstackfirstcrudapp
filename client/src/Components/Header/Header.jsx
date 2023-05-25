import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsBuilding } from "react-icons/bs";

function Header() {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Navbar bg="primary" variant="dark" className="fixed_nav">
      <Navbar.Brand href="#home" className=" d-flex align-items-center">
        <BsBuilding className="mx-2 ms-4 " />
        Employee CRUD
      </Navbar.Brand>
      <Nav className="ms-auto pe-5">
        {/* <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Features</Nav.Link>
        <Nav.Link href="#">Pricing</Nav.Link> */}
        <button onClick={handleLogout} className="logoutBtn">
          Logout
        </button>
      </Nav>
    </Navbar>
  );
}

export default Header;
