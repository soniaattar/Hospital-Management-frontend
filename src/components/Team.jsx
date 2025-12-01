import React from 'react'

const Team = () => {
  return (
    <section id="team" className="team-section mt-5">
  <div className="container">
    <div className="col-12">
      <h2
        className="text-center text-black p-2"
        style={{ textShadow: "rgb(0 0 0 / 35%) 0px 5px 15px" }}
      >
        Our Team
      </h2>
    </div>
    <div className="row">
      <div
        className="col-lg-4"
        data-aos="flip-up"
        data-aos-duration={1000}
        data-aos-easing="ease-out-cubic"
      >
        <div className="card mt-3">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="img-fluid"
            alt="..."
            style={{ borderRadius: 10 }}
          />
          <div className="card-body">
            <h4 className="card-title text-black">Charles Stephen</h4>
            <p className="card-text">
              She is a great expert Surgeon having more than 20 years of
              Experience.
            </p>
            <a
              href="#"
              className="btn btn-warning text-white pt-2 pb-2 ps-4 pe-4"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div
          className="card mt-3"
          data-aos="flip-up"
          data-aos-duration={1000}
          data-aos-easing="ease-out-cubic"
        >
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="img-fluid"
            alt="..."
            style={{ borderRadius: 10 }}
          />
          <div className="card-body">
            <h4 className="card-title text-black">John D Wich</h4>
            <p className="card-text">
              He is a great expert Dentist having more than 20 years of
              Experience.
            </p>
            <a
              href="#"
              className="btn btn-warning text-white pt-2 pb-2 ps-4 pe-4"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div
          className="card mt-3"
          data-aos="flip-up"
          data-aos-duration={1000}
          data-aos-easing="ease-out-cubic"
        >
          <img
            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="img-fluid"
            alt="..."
            style={{ borderRadius: 10 }}
          />
          <div className="card-body">
            <h4 className="card-title text-black">Justin Luther</h4>
            <p className="card-text">
              He is a great Skincare expert having more than 20 years of
              Experience.
            </p>
            <a
              href="#"
              className="btn btn-warning text-white pt-2 pb-2 ps-4 pe-4"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Team