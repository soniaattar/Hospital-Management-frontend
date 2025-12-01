import React from 'react'

const Features = () => {
  return (
    <section className="features mt-4" id="about">
      <div className="container">
        <div className="row">

          {/* Card 1 */}
          <div
            className="col-lg-4 mt-3"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={1500}
          >
            <div className="card text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3437/3437359.png"
                alt="Easy appointment icon"
                className="m-auto img-fluid"
                width="120"
                height="120"
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

          {/* Card 2 */}
          <div className="col-lg-4 mt-3">
            <div
              className="card text-center"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={1500}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/6976/6976264.png"
                alt="Emergency service icon"
                className="m-auto img-fluid"
                width="120"
                height="120"
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

          {/* Card 3 */}
          <div
            className="col-lg-4 mt-3"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={1500}
          >
            <div className="card text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3002/3002435.png"
                alt="24/7 service icon"
                className="m-auto img-fluid"
                width="120"
                height="120"
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
