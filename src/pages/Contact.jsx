import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit logic
    console.log('Submitted', formData);
    alert("Message captured securely.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact | Clinical Architect</title>
        <meta name="description" content="Request a consultation with Clinical Architect." />
      </Helmet>
      
      <div className="bg-surface py-24 sm:py-32 flex-grow">
        This is Contact Page
      </div>
    </>
  );
}
