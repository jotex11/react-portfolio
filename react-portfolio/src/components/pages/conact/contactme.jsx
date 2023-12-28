import React from 'react';

function Contact() {
  const email = 'jomill0723@gmail.com'; // Your email

  return (
    <div>
      <h1>Contact Me</h1>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
    </div>
  );
}

export default Contact;
