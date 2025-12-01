import React from 'react'

const HeroSection = () => {
  return (
    <section id="home" className="home">
  <div className="banner_wrapper wrapper">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-1 order-2 text-box ">
          <h3>Better Life Through</h3>
          <h1>Better Dentistry</h1>
          <p>
            Join us to a fun and friendly dental environment. Our professionals
            are working so hard to see smile on your face that you deserve! We
            are dedicated about our duties.
          </p>
          <a href="#" className=" secondary_btn mt-1">
            Appointment
          </a>
          <a href="#" className="primary-btn  mt-1 ms-3">
            Learn More
          </a>
        </div>
        <div className="col-lg-6 order-lg-2 order-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt=""
            className="img-fluid image-set"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default HeroSection