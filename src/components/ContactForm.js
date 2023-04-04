import React, { useState } from 'react';
import './css/Contact.css';
import Testimonials from './Testimonials'; 

// Found a tutorial and followed it on how to manage different useStates for a contact form, but I couldn't manage to get it to work exactly how I wanted
// This current form is just a concept atm, will change later 


function ContactForm() {  //Bunch of state variables to store values entered in the given field 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // state variables to indicate if a field has an error and to update the state to false if it does 
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (!message) {
      setMessageError(true);
    }
    if (name && email && message) {
      
      setSuccessMessage(true);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setNameError(!value);
        break;
      case 'email':
        setEmailError(!value);
        break;
      case 'message':
        setMessageError(!value);
        break;
      default:
        break;
    }
  };

  return (
  <div className="card bg-dark text-light my-4 mx-auto mb-4 col-6">
  <div className="card-body">
    <h2 className="text-center mb-4">Contact Me</h2>
    <h6 className="text-center text-muted mb-4">Interested in discussing something you saw in this portfolio (or one of my other projects)?</h6>
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group mb-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
          id="message"
          rows={3}
          placeholder="Hey! This form doesn't work just yet, there's no backend to handle any requests, and since I'm short on time, I figured I would set up the card and add functionality later. For now, use the link in the footer to contact me!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</div>
  );
};



export default ContactForm;
