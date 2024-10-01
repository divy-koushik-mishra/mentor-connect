"use client";
import React, { useState } from "react";
// import { createContactDocument } from "../../utils/appwrite-utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    college_name: "",
    coding_club: false,
    message: "",
    session_topics: [] as string[],
  });

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    college_name: "",
    message: "",
    session_topics: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevData) => ({
        ...prevData,
        session_topics: checked
          ? [...prevData.session_topics, value]
          : prevData.session_topics.filter((topic) => topic !== value),
      }));
    } else if (type === "radio") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevData) => ({
        ...prevData,
        coding_club: checked && value === "true",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const formErrors = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      college_name: "",
      message: "",
      session_topics: "",
    };
    let isValid = true;

    if (!formData.first_name.trim()) {
      formErrors.first_name = "First name is required";
      isValid = false;
    }

    if (!formData.last_name.trim()) {
      formErrors.last_name = "Last name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      formErrors.email = "Valid email is required";
      isValid = false;
    }

    if (!formData.phone_number.trim()) {
      formErrors.phone_number = "Phone number is required";
      isValid = false;
    }

    if (!formData.college_name.trim()) {
      formErrors.college_name = "College name is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
      isValid = false;
    }

    if (formData.session_topics.length === 0) {
      formErrors.session_topics = "At least one session topic must be selected";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill out all required fields correctly.");
      return;
    }

    // const formattedData = {
    //   ...formData,
    //   session_topics: formData.session_topics.join(', '), // Convert the array to a comma-separated string
    // };

    try {
      // await createContactDocument(formattedData);
      toast.success("Request recieved successfully!");
      // Optionally, reset the form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        college_name: "",
        coding_club: false,
        message: "",
        session_topics: [],
      });
      setErrors({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        college_name: "",
        message: "",
        session_topics: "",
      });
    } catch (error) {
      console.error("Error creating contact:", error);
      toast.error("Failed to send your message. Please try again.");
    }
  };

  return (
    <div className="md:w-3/4 mx-auto p-6 bg-white shadow-2xl rounded-3xl">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-base font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300  outline-none p-4"
                required
                placeholder="John"
              />
              {errors.first_name && <p className="text-red-500 text-base">{errors.first_name}</p>}
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300  outline-none p-4 "
                required
                placeholder="Doe"
              />
              {errors.last_name && <p className="text-red-500 text-base">{errors.last_name}</p>}
            </div>
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300  outline-none p-4 "
              required
              placeholder="abc@yourinstitite.in"
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
              className="mt-1 block w-full border border-gray-300  outline-none p-4 "
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
              className="mt-1 block w-full border border-gray-300  outline-none p-4 "
              required
              placeholder="Your College Name"
            />
            {errors.college_name && <p className="text-red-500 text-base">{errors.college_name}</p>}
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">Does your college have a coding club or community?</label>
            <div className="mt-2 space-x-2 flex items-center">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="coding_club"
                  value="true"
                  checked={formData.coding_club === true}
                  onChange={handleChange}
                  className="form-radio text-indigo-600"
                  required

                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="coding_club"
                  value="false"
                  checked={formData.coding_club === false}
                  onChange={handleChange}
                  className="form-radio text-indigo-600"
                  required
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300  outline-none p-4 "
              required
            ></textarea>
            {errors.message && <p className="text-red-500 text-base">{errors.message}</p>}
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">Topics of Interest</label>
            <div className="mt-2 space-y-2 flex flex-col">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="session_topics"
                  value="AI"
                  checked={formData.session_topics.includes("AI")}
                  onChange={handleChange}
                  className="form-checkbox text-indigo-600"
                />
                <span className="ml-2">Artificial Intelligence</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="session_topics"
                  value="ML"
                  checked={formData.session_topics.includes("ML")}
                  onChange={handleChange}
                  className="form-checkbox text-indigo-600"
                />
                <span className="ml-2">Machine Learning</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="session_topics"
                  value="DL"
                  checked={formData.session_topics.includes("DL")}
                  onChange={handleChange}
                  className="form-checkbox text-indigo-600"
                />
                <span className="ml-2">Deep Learning</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="session_topics"
                  value="DS"
                  checked={formData.session_topics.includes("DS")}
                  onChange={handleChange}
                  className="form-checkbox text-indigo-600"
                />
                <span className="ml-2">Data Science</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="session_topics"
                  value="NLP"
                  checked={formData.session_topics.includes("NLP")}
                  onChange={handleChange}
                  className="form-checkbox text-indigo-600"
                />
                <span className="ml-2">Natural Language Processing</span>
              </label>
            </div>
            {errors.session_topics && <p className="text-red-500 text-base">{errors.session_topics}</p>}
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
