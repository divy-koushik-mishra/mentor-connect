"use client"
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type AllowedEmailDomains = {
  [key: string]: string;
};

const allowedEmailDomains: AllowedEmailDomains = {
  "example.edu": "Example University",
  "college.edu": "College of Education",
  "university.ac.in": "University of Technology"
};

interface FormData {
  name: string;
  email: string;
  phone_number: string;
  college_name: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  phone_number: string;
  college_name: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone_number: "",
    college_name: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone_number: "",
    college_name: "",
  });

  useEffect(() => {
    const emailDomain = formData.email.split('@')[1];
    if (emailDomain && allowedEmailDomains[emailDomain]) {
      setFormData(prevData => ({
        ...prevData,
        college_name: allowedEmailDomains[emailDomain]
      }));
    }
  }, [formData.email]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: "",
      email: "",
      phone_number: "",
      college_name: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }

    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone number is required";
      isValid = false;
    }

    const emailDomain = formData.email.split('@')[1];
    if (!allowedEmailDomains[emailDomain] && !formData.college_name.trim()) {
      newErrors.college_name = "College name is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill out all required fields correctly.");
      return;
    }

    try {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
      toast.success("Form submitted successfully!");
      // Reset the form
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        college_name: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="md:w-3/4 mx-auto p-6 bg-white shadow-2xl rounded-3xl">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-base font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 outline-none p-4"
              required
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-base">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 outline-none p-4"
              required
              placeholder="johndoe@example.com"
            />
            {errors.email && <p className="text-red-500 text-base">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 outline-none p-4"
              required
              placeholder="1234567890"
            />
            {errors.phone_number && <p className="text-red-500 text-base">{errors.phone_number}</p>}
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">College Name</label>
            <input
              type="text"
              name="college_name"
              value={formData.college_name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 outline-none p-4"
              required={!allowedEmailDomains[formData.email.split('@')[1]]}
              placeholder="Your College Name"
              readOnly={!!allowedEmailDomains[formData.email.split('@')[1]]}
            />
            {errors.college_name && <p className="text-red-500 text-base">{errors.college_name}</p>}
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 outline-none p-4"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md shadow-sm hover:shadow-2xl transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;