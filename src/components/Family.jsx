import React from 'react'

const Family = () => {
  return (
    <section className="family mt-5">
  <div className="container">
    <div
      className="row align-items-center"
      data-aos="zoom-in-right"
      data-aos-duration={2000}
      data-aos-easing="ease-out-cubic"
    >
      <div className="col-lg-6">
        <img
          src="https://plus.unsplash.com/premium_photo-1663040115012-e95508a57692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="img-fluid"
          style={{ borderRadius: 10 }}
        />
      </div>
      <div
        className="col-lg-6 text-center ps-lg-5 mt-4 "
        data-aos="zoom-in-left"
        data-aos-duration={2000}
        data-aos-easing="ease-out-cubic"
      >
        <h2 id="welcome">Welcome to a Family</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          inventore ullam velit porro laborum neque quisquam eligendi voluptas
          minima eaque! Animi consectetur vitae modi architecto quibusdam
          placeat, quod et a.
        </p>
        <div className="card ">
          <div className="row p-5">
            <div className="col-md-6 mt-3">
              <h4>500+</h4>
              Happy Patients
            </div>
            <div className="col-md-6 mt-3">
              <h4>88+</h4>
              Qualified Doctors
            </div>
          </div>
          <hr />
          <div className="verticalLine" />
          <div className="row p-5">
            <div className="col-md-6 mt-3">
              <h4>25+</h4>
              Years Experience
            </div>
            <div className="col-md-6 mt-3">
              <h4>55+</h4>
              Best Surgeon Awards
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Family