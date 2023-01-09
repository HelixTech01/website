import Cookies from "js-cookie";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../loginModal/LoginModal";
import "./header.css";
import swal from "sweetalert";

const Header = () => {
  const navigate = useNavigate();

  const signOut = () => {
    Cookies.remove("jemail");
    navigate("/helix/Job_seekers");
    swal("logout successfully", "", "success");
    // window.location.reload();
  };

  return (
    <>
      {/* Desktop Header */}
      <LoginModal />
      <div className="hdhdh desktopHeader">
        <header className="header header-style-1 theme-color transparent-header megamenu-container sticky-header">
          <div className="container d-none d-lg-block">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-inner">
                  <div className="logo">
                    <a href="/helix">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                        alt="logo secondary dark"
                      />
                    </a>
                  </div>
                  <nav className="menu">
                    <ul>
                      <li>
                        <Link to="/helix/">Home</Link>
                      </li>
                      <li>
                        <Link to="/helix/About_us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/helix/Employers">Employers</Link>
                      </li>
                      <li>
                        <Link to="/helix/IT_Training">Consultant</Link>
                      </li>

                      {/* {!Cookies.get("jemail") ? (
                        <li>
                          <Link to="/helix/Employers">Employers</Link>
                        </li>
                      ) : (
                        ""
                      )} */}
                      {/* <li className="cr-dropdown">
                       <a href="#">Employers</a>
                       <ul>
                          <li>
                             <a href="javascript:;">Overview</a>
                          </li>
                          <li>
                             <Link to="/Place_Job_Order">Place Job Order</Link>
                          </li>
                          <li>
                             <Link to="/Testi">Testimonials</Link>
                          </li>
                       </ul>
                    </li> */}
                      <li>
                        <Link to="/helix/Job_seekers">Job seekers</Link>
                      </li>
                      <li>
                        <Link to="/helix/Staff_Augmentation">services</Link>
                      </li>
                      {/* <li className="cr-dropdown">
                                <a href="javascript:;">services</a>
                                <ul>
                                    <li className="cr-sub-dropdown">
                                        <Link to="/Staff_Augmentation">Employers</Link>
                                        <ul>
                                            <li>
                                                <Link to="/Staff_Augmentation">Staff Augmentation</Link>
                                            </li>
                                            <li>
                                                <Link to="/Software_Development">Software Development</Link>
                                            </li>
                                            <li>
                                                <Link to="/IT_Staffing">IT Staffing</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="cr-sub-dropdown">
                                        <Link to="/IT_Training">Consultant</Link>
                                        <ul>
                                            <li>
                                            <Link to="/IT_Training">IT Training & Development</Link>
                                            </li>
                                            <li>
                                                <Link to="/Professional">Professional Resume  Cover Letter Writing</Link>
                                            </li>
                                            <li>
                                                <a to="javascript:;">Benefits for Jobseekers</a>
                                            </li>
                                            <li>
                                                <Link to="/A_service">A service for lifetime</Link>
                                            </li>
                                            <li>
                                                <Link to="/Alumn">Alumni</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    </ul>
                                </li> */}
                      <li>
                        <Link to="/helix/Fa">Faq</Link>
                      </li>
                      <li>
                        <Link to="/helix/CONTACT_US">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>

                  <a
                    href="#login"
                    data-bs-toggle="modal"
                    className="cr-btn cr-btn-sm"
                  >
                    <span>Sign in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mobile-menu-wrapper">
        <div className="container d-block d-lg-none">
            <div className="mobile-menu clearfix">
                <a className="mobile-logo" href="index.html">
                    <img src="images/logo/logo.png" alt="mobile logo"/>
                </a>
                <a href="contact-us.html" className="cr-btn cr-btn-sm">
<span>Get A Quote</span>
</a>
            </div>
        </div>
    </div> */}
        </header>
      </div>
      {/* Mobile Header */}

      <div className="hsshshsh mobileHeader">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/helix/">
              <img
                src={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                alt=""
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/helix/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/helix/About_us">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/helix/Employers">
                    Employers
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/helix/IT_Training">
                    Consultant
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/helix/Job_seekers">
                    Job seekers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/helix/Staff_Augmentation">
                    Service
                  </Link>
                </li>
                {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Servivce
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li> <Link to="/Staff_Augmentation">Employers</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li> <Link to="/IT_Training">Consultant</Link></li>
          </ul>
        </li> */}
                <li>{/* <Link to="/Employerss">Employers</Link> */}</li>
                <li>
                  <Link className="nav-link" to="/helix/Fa">
                    Faq
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/helix/CONTACT_US">
                    Contact Us
                  </Link>
                </li>

                <li>
                {Cookies.get("email") ||
                    Cookies.get("jemail") ||
                    Cookies.get("admin") ? (
                      <a
                        data-bs-toggle="modal"
                        onClick={() => signOut()}
                        class="cr-btn cr-btn-round"
                      >
                        Logout
                      </a>
                    ) : (
                      <a
                        href="#login"
                        data-bs-toggle="modal"
                        class="cr-btn cr-btn-round"
                      >
                        <span>Log In</span>
                      </a>
                    )}
                </li>

                {/* <li className="nav-item">
          <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
              </ul>
              {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
