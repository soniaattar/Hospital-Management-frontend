import "../css/contact.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    alert("Your appointment has been booked.");

    if (data.email) {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } else alert("Please Enter Valid Details.");
    setButtonDisabled(true);
  };

  return (
    <>
      <div className="inner-layer" id="contact">
        <div className="container">
          <div className="row no-margin">
            <div className="col-sm-7">
              <div className="content">
                <h1>Book You Slot Now and Save your time</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis at lacus at rhoncus. Integer pharetra lacus vitae sapien blandit eleifend. </p>
                <h2>For Help Call : +189-123-453</h2>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-data">
                <div className="form-head">
                  <h2>Book Appointemnt</h2>
                </div>
                <form action="" onSubmit={handleSubmit}>
                  <div className="form-body">
                    <div className="row form-row">
                      <input type="text" name="fullname" placeholder="Enter Full name" className="form-control" onChange={handleForm} required />
                    </div>
                    <div className="row form-row">
                      <input type="number" name="mobilenumber" placeholder="Enter Mobile Number" className="form-control" onChange={handleForm} required />
                    </div>
                    <div className="row form-row">
                      <input type="text" name="email" placeholder="Enter Email Adreess" className="form-control" onChange={handleForm} required />
                    </div>
                    <div className="row form-row">
                      <input id="dat" type="text" name="appointmentdate" placeholder="Appointment Date" className="form-control" onChange={handleForm} required />
                    </div>
                    <h6>Address Details</h6>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" name="area" placeholder="Enter Area" className="form-control" onChange={handleForm} required />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" name="city" placeholder="Enter City" className="form-control" onChange={handleForm} required />
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" name="state" placeholder="Enter State" className="form-control" onChange={handleForm} required />
                      </div>
                      <div className="col-sm-6">
                        <input type="number" name="postalcode" placeholder="Postal Code" className="form-control" onChange={handleForm} required />
                      </div>
                    </div>
                    <div className="row form-row">
                      <button disabled={buttonDisabled} type="submit" className="btn btn-success btn-appointment ">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
