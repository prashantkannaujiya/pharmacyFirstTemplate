import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer-end">
      <div
        className="row justify-content-center mt-5 w-100 p-5 "
        style={{ marginTop: "15vh",width:'fit-content' }}
      >
        <div className="col-sm-2 me-5 text-start">
          <p className="footer-detail text-start p-0" >Quick Links</p>
          <ul style={{ listStyle: "none" }} className=" p-0">
            <li>
              <Link style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "white" }}>
                About Us
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "white" }}>
                Blog
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "white" }}>
                Companies
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "white" }}>
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-4 ms-5 text-start">
          <p className="footer-detail">Subscribe to News Letters</p>
          <p style={{ color: "white" }}>
            We'll send you some latest updates daily to help you stay updated
          </p>
          <div className="input-group">
            <input type="text" className="form-control" />{" "}
            <button className="btn btn-success text-white">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
