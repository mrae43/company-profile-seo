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
        <title>聯繫我們 | Clinical Architect</title>
        <meta name="description" content="Request a consultation with Clinical Architect." />
      </Helmet>
      
      <div className="bg-surface py-24 sm:py-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold text-primary mb-8">聯繫我們</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            有任何問題或合作意向？請隨時與我們聯繫。
          </p>
        </div>
      </div>
    </>
  );
}
