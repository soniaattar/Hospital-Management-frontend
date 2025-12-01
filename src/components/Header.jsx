import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  let user = localStorage.getItem("user");
  let logout = () => {
    localStorage.removeItem("user");
    alert("You have been Logged Out.");
    window.location.reload();
    navigate("/");
  };
  return (
    <div>
      <header className="header_wrapper">
        <nav className="navbar navbar-expand-lg fixed-top  bg-white">
          <div className="container">
            <a className="navbar-brand align-items-center" href="/#home">
              <img src="https://cdn-icons-png.flaticon.com/512/4377/4377612.png" alt="" className="img-fluid" height="50px" width="50px" />
            </a>
            <h4 className=" d-inline-block pt-2 brand-name">Your Clinic </h4>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#servicess">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                    Team
                  </a>
                </li>

                {user ? (
                  <li className="nav-item ">
                    <Link to="/" onClick={logout} className="nav-link">
                      Logout
                    </Link>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">
                        Contact
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
