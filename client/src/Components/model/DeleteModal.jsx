// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// const DeleteModal = ({ deleteEmployee, element }) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => {
//     setShow(false);
//   };
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch static backdrop modal
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           I will not close if you click outside me. Don't even try to press
//           escape key.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={() => deleteEmployee(element._id)}>
//             Understood
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };
// export default DeleteModal;
