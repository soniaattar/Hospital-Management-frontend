import React from 'react'

const Features = () => {
  return (
    <section className="features mt-4" id="about">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-4 mt-3 "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration={1500}
        >
          <div className="card text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3437/3437359.png"
              className="m-auto img-fluid"
              width="120px"
              height="120px"
            />
            <div className="card-body text-center">
              <h4 className="card-title">Easy Appointment</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-3">
          {" "}
          <div
            className="card text-center"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={1500}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/6976/6976264.png"
              className="m-auto img-fluid"
              width="120px"
              height="120px"
            />
            <div className="card-body text-center">
              <h4 className="card-title">Emergency Service</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 mt-3"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration={1500}
        >
          {" "}
          <div className="card text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3002/3002435.png"
              className="m-auto img-fluid"
              width="120px"
              height="120px"
            />
            <div className="card-body text-center">
              <h4 className="card-title">24/7 Service</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Features