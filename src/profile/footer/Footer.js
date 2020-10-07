import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import { GrYoutube } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <h5 className="title">
          <strong>Check our social medias </strong>
        </h5>
        <br />

        <ul className="lista">
          <li className="list-unstyled">
            <a href="#!">
              <FaTwitter size="5rem" />
            </a>
          </li>
          <li className="list-unstyled">
            <a href="#!">
              {" "}
              <GrYoutube color="red" size="5rem" />
            </a>
          </li>
          <li className="list-unstyled">
            <a href="#!">
              <FaFacebookSquare size="5rem" />
            </a>
          </li>
        </ul>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid className="copyright">
          &copy; {new Date().getFullYear()} Copyright: Cryandie
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};
