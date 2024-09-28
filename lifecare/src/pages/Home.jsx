import React, { useState } from "react";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import doctorLogo from "../doctorhome.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './AppointmentForm.css'; // Assuming you have a CSS file

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Details:', formData);
    // You can send formData to an API or process it further
  };

  return (
    <div className="appointment-form-container">
      <h2><button className="btn btn-light" onClick={()=>{
        localStorage.setItem("view","home page");
        window.location.reload();
      }}><ArrowBackIcon/></button>Make an Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Appointment Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Appointment Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

function Header() {
  const navigateToForm = () => {
    localStorage.setItem("view", "appointment form");
    window.location.reload(); // Forces the component to re-render based on updated view
  };

  return (
    <header>
      <div className="row d-flex align-items-center" style={{ padding: 30 }}>
        <div className="col-xl-3">
          <h3 style={{ color: "black", fontWeight: "bold" }}>Life <span style={{ color: "#22d3ee" }}>Care</span></h3>
        </div>
        <div className="col-xl-6 d-flex" style={{ color: "#e7e5e4", fontWeight: "bold" }}>
          <div className="col">
            <a href="#" style={{ textDecoration: "none", color: "#e7e5e4" }}>Home</a>
          </div>
          <div className="col">
            <a href="#" style={{ textDecoration: "none", color: "#e7e5e4" }}>Department</a>
          </div>
          <div className="col">
            <a href="#" style={{ textDecoration: "none", color: "#e7e5e4" }}>Doctors</a>
          </div>
          <div className="col">
            <a href="#" style={{ textDecoration: "none", color: "#e7e5e4" }}>Contact</a>
          </div>
        </div>
        <div className="col-xl-2">
          <button className="btn" style={{ backgroundColor: "#22d3ee", color: "white" }} onClick={navigateToForm}>
            Make an Appointment
          </button>
        </div>
      </div>
    </header>
  );
}

function Announce() {
  return (
    <div className="row" style={{ padding: 30 }}>
      <div className="col-xl-10">
      <div className="row">
        <h1 style={{ fontSize: "100px" }}>Health Care</h1>
        <h2 style={{ fontSize: "100px", fontWeight: "lighter" }}>For whole family</h2>
        <h5 style={{ fontWeight: "lighter" }}>
          In health care sector, service quality is the facility of the hospital as healthcare service provider to consistently.
        </h5>
      </div>
      <div className="row justify-content-end mt-3">
        <div className="col-xl-5">
          <button className="btn" style={{ backgroundColor: "#22d3ee" }}>Check out services</button>
        </div>
      </div>
      </div>
      <div className="col-xl-2">
        <img src={doctorLogo} alt="" style={{
          height:"50vh"
        }}/>
      </div>
    </div>
  );
}
function FAQs() {
  const [isOpen, setIsOpen] = useState(null);

  const toggleFAQ = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const faqs = [
    { question: "How can I make an appointment?", answer: "You can make an appointment through our website or by calling our office." },
    { question: "What insurance plans do you accept?", answer: "We accept a variety of insurance plans. Please contact us for more details." },
  ];

  return (
    <div className="row mt-5 mb-5">
      <div className="col">
        <h3>FAQs</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question} <ExpandMoreIcon />
            </div>
            {isOpen === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
function Services() {
  return (
    <div className="row mt-4 mb-4">
      <div className="col" style={{ backgroundColor: "#cffafe", padding: 20 }}>
        <VaccinesIcon />
        <h4>Hospitality</h4>
        <p>Clinical excellence must be the priority for any health care service provider</p>
      </div>
      <div className="col" style={{ backgroundColor: "#22d3ee", padding: 20 }}>
        <AddIcCallIcon />
        <h4>Emergency Care</h4>
        <p>Clinical excellence must be the priority for any health care service provider</p>
      </div>
      <div className="col" style={{ backgroundColor: "#cffafe", padding: 20 }}>
        <LocalHospitalIcon />
        <h4>Chamber Service</h4>
        <p>Clinical excellence must be the priority for any health care service provider</p>
      </div>
    </div>
  );
}
function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Life Care provided excellent treatment during my emergency surgery. The staff was very caring and professional."
    },
    {
      name: "Jane Smith",
      feedback: "The doctors at Life Care are top-notch! They helped my family during a difficult time with exceptional care."
    },
  ];

  return (
    <div className="row mt-5 mb-5">
      <div className="col">
        <h3>Testimonials</h3>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p><strong>{testimonial.name}</strong>: {testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="row" style={{
      marginTop:100
    }}>
      <div className="col">
        <FacebookIcon />
        <LinkedInIcon />
        <GoogleIcon />
      </div>
      <div className="col">
        <p>&copy; {new Date().getFullYear()} LifeCare. All rights reserved.</p>
      </div>
      <div className="col">
        <PhoneForwardedIcon />: +212 509090909
        <MailOutlineIcon />: lifecare.support@gmail.com
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="row" style={{
      height:"100vh",
      padding:20
    }}>
      <Header />
      <Announce />
      <Services />
      <Testimonials/>
      <FAQs/>
      <Footer />
    </div>
  );
}

export function Home() {
  const views = [
    { id: 1, name: "home page", view: <HomePage /> },
    { id: 2, name: "appointment form", view: <AppointmentForm /> }
  ];

  const currentView = localStorage.getItem("view") || "home page"; // Default to "home page" if no view is selected

  return (
    <div className="row">
      {views.map((view) => (
        view.name === currentView ? view.view : null
      ))}
    </div>
  );
}
