import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
const Styles = styled.div`
  .social-box .box {
    background: #ffff;
    border-color: #73c2fb;
    border-style: solid;
    border-radius: 10px;
    padding: 40px 10px;
    margin: 20px 0px;
    cursor: pointer;
    transition: all 0.5s ease-out;
  }

  .social-box .box:hover {
    box-shadow: 0 0 6px #4183d7;
  }

  .social-box .box .box-text {
    margin: 20px 0px;
    font-size: 15px;
    line-height: 30px;
  }

  .social-box .box .box-btn a {
    text-decoration: none;
    color: #4183d7;
    font-size: 16px;
  }

  .fa {
    color: #4183d7;
  }
`;
const Login = () => {
  return (
    <Styles>
      <div className="social-box">
        <div className="container">
          <div className="row justify-content-center">
            {/* <div className="col-lg-4 center col-md-12 ">
              <div className="box">
                <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                <div className="box-title">
                  <h3>Github</h3>
                </div>
                <div className="box-text">
                  <span>
                    Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.
                    Assum decore te sed. Elitr scripta ocurreret qui ad.
                  </span>
                </div>
                <div className="box-btn">
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div> */}
            <div className="col-lg-4 center col-md-12 ">
              <div className="box">
                <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                <div className="box-title">
                <h6 class="card-subtitle mb-2 ">Step-1</h6>
                  <h3>LinkedIn</h3>
                </div>
                <div className="box-text">
                  <span>
                    Connect Your LinkedIn Profile.
                  </span>
                </div>
                <div className="box-btn">
                  <SocialIcon url="https://www.linkedin.com/in/ahmadbilal07/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};
export default Login;
