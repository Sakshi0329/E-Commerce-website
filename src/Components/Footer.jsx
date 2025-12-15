// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

// export const Footer = () => {
//   return (
//     <footer style={{ backgroundColor: '#0d6efd' }} className="text-white pt-5 pb-3 mt-5">
//       <Container>
//         <Row className="mb-4">
//           {/* Company Info */}
//           <Col md={3} sm={6} className="mb-3">
//             <h5 className="fw-bold">ShopCart</h5>
//             <p style={{ fontSize: "14px" }}>
//               Your one-stop shop for fashion, electronics, home, and more. Trusted by 10,000+ happy shoppers.
//             </p>
//           </Col>

//           {/* Useful Links */}
//           <Col md={3} sm={6} className="mb-3">
//             <h6 className="fw-bold">Useful Links</h6>
//             <ul className="list-unstyled">
//               <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
//               <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
//               <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
//               <li><a href="#" className="text-white text-decoration-none">Terms & Conditions</a></li>
//             </ul>
//           </Col>

//           {/* Customer Support */}
//           <Col md={3} sm={6} className="mb-3">
//             <h6 className="fw-bold">Customer Care</h6>
//             <ul className="list-unstyled">
//               <li><a href="#" className="text-white text-decoration-none">Help Center</a></li>
//               <li><a href="#" className="text-white text-decoration-none">Returns</a></li>
//               <li><a href="#" className="text-white text-decoration-none">Track Order</a></li>
//               <li><a href="#" className="text-white text-decoration-none">Shipping Info</a></li>
//             </ul>
//           </Col>

//           {/* Social Media */}
//           <Col md={3} sm={6} className="mb-3">
//             <h6 className="fw-bold">Follow Us</h6>
//             <div className="d-flex gap-3 justify-content-start">
//               <a href="#" className="text-white fs-5"><FaFacebookF /></a>
//               <a href="#" className="text-white fs-5"><FaInstagram /></a>
//               <a href="#" className="text-white fs-5"><FaTwitter /></a>
//               <a href="#" className="text-white fs-5"><FaYoutube /></a>
//             </div>
//           </Col>
//         </Row>

//         <hr className="border-light" />
//         <p className="text-center mb-0">&copy; 2025 ShopCart. All rights reserved.</p>
//       </Container>
//     </footer>
//   );
// };
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer style={{ background: "linear-gradient(90deg, #f107a3, #7b2ff7)" }} className="text-white pt-5 pb-3 mt-5">
      <Container>
        <Row className="mb-4">
          <Col md={3}>
            <h5 className="fw-bold">Trendify</h5>
            <p className="small">Discover trending fashion, gadgets & lifestyle at unbeatable prices.</p>
          </Col>
          <Col md={3}>
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
              <li><a href="#" className="text-white">Privacy</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="fw-bold">Help</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white">Track Order</a></li>
              <li><a href="#" className="text-white">Returns</a></li>
              <li><a href="#" className="text-white">Support</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="fw-bold">Follow Us</h6>
            <div className="d-flex gap-3">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
            </div>
          </Col>
        </Row>
        <hr />
        <p className="text-center small">© 2025 Trendify. All rights reserved.</p>
      </Container>
    </footer>
  );
};
