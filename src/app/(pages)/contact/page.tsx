'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { newInitialContact, newContactValidationSchema } from '@/validation/Index';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    status,
    setStatus,
    resetForm,
    setSubmitting
  } = useFormik({
    initialValues: newInitialContact,
    validationSchema: toFormikValidationSchema(newContactValidationSchema),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await fetch('/api/newContactUs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        if (res.ok) {
          setStatus({ success: 'Your message has been sent. Thank you!' });
          resetForm();
        } else {
          setStatus({ error: 'Something went wrong. Please try again.' });
        }
      } catch (error) {
        setStatus({ error: 'Network error. Please try later.' });
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
    },
  });

  return (
    <section id="contact" className="py-16 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12" data-aos="fade-up">
          <h2 className="flex items-end text-3xl font-bold text-[#040677]">
            Contact <hr className="w-32 h-1 ml-2 mt-2 bg-[#040677]" />
          </h2>
          <p className="text-lg text-gray-600">
            <span>Check Our </span>
            <span className="text-[#040677] font-semibold">Contact</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10" data-aos="fade" data-aos-delay="100">
          {/* Info Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="200">
              <FaMapMarkerAlt className="text-indigo-600 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">C-245, 1st Floor, Defence Colony, New Delhi 110024</p>
              </div>
            </div>
            <div className="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="300">
              <FaPhoneAlt className="text-indigo-600 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600">+011-35688106</p>
              </div>
            </div>
            <div className="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="400">
              <FaEnvelope className="text-indigo-600 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                <p className="text-gray-600">info@example.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={`w-full p-3 border ${
                      touched.name && errors.name ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  />
                  {touched.name && errors.name && (
                    <div className="text-sm text-red-500 mt-1">{errors.name}</div>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={`w-full p-3 border ${
                      touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  />
                  {touched.email && errors.email && (
                    <div className="text-sm text-red-500 mt-1">{errors.email}</div>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                  className={`w-full p-3 border ${
                    touched.subject && errors.subject ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
                {touched.subject && errors.subject && (
                  <div className="text-sm text-red-500 mt-1">{errors.subject}</div>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  className={`w-full p-3 border ${
                    touched.message && errors.message ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                ></textarea>
                {touched.message && errors.message && (
                  <div className="text-sm text-red-500 mt-1">{errors.message}</div>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || loading}
                  className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                  {loading ? <BeatLoader size={8} color="#fff" /> : 'Send Message'}
                </button>
              </div>

              {status?.success && (
                <p className="text-green-500 text-center mt-2">{status.success}</p>
              )}
              {status?.error && (
                <p className="text-red-500 text-center mt-2">{status.error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
