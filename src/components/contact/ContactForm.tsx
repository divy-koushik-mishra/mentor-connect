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
  "university.ac.in": "University of Technology",
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
      setFormData((prevData) => ({
        ...prevData,
        college_name: allowedEmailDomains[emailDomain],
      }));
    } else {
      // Reset college_name if email domain is not recognized
      setFormData((prevData) => ({
        ...prevData,
        college_name: "",
      }));
    }
  }, [formData.email]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate the field in real-time
    validateField(name, value);
  };

  const validateField = (name: string, value: string): boolean => {
    let errorMessage = "";
    let isValid = true;

    if (name === "name") {
      const nameRegex = /^[a-zA-Z\s\-]{2,}$/;
      if (!value.trim() || !nameRegex.test(value)) {
        errorMessage = "Name must be at least 2 characters long and contain only letters, spaces, or hyphens.";
        isValid = false;
      }
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim() || !emailRegex.test(value)) {
        errorMessage = "Valid email is required.";
        isValid = false;
      }
    } else if (name === "phone_number") {
      const phoneRegex = /^\d{10}$/;
      if (!value.trim() || !phoneRegex.test(value)) {
        errorMessage = "Phone number must be exactly 10 digits long.";
        isValid = false;
      }
    } else if (name === "college_name") {
      if (!value.trim()) {
        errorMessage = "College name is required.";
        isValid = false;
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));

    return isValid;
  };

  const validateForm = (): boolean => {
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      if (!validateField(key, formData[key])) {
        isValid = false;
      }
    });

    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill out all required fields correctly.");
      return;
    }

    try {
      console.log("Form submitted:", formData);
      toast.success("Form submitted successfully!");
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
    <div className="md:w-3/4 mx-auto p-6 w-full bg-white shadow-md rounded-3xl">
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
              required
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
              maxLength={500}
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
