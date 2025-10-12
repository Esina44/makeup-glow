"use client";
import React, { useState } from "react";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Printing here");
    console.log(formData);
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="bg-gray-50">
        <h1 className="pl-[41%] mb-5 pt-4 text-4xl">Contact Us:</h1>
        <div className="ml-20">
          <div className="p-3 pl-60 flex gap-8 flex items-center">
            <h1 className="text-2xl text-gray-500">Name:</h1>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              id=""
              className="rounded-full ml-7 text-sm h-11 w-[50%] bg-gray-200  text-center"
            />
          </div>
          <div className="p-3 pl-60 flex gap-8 flex items-center">
            <h1 className="text-2xl text-gray-500">Email:</h1>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              id=""
              className="rounded-full ml-7 text-sm h-11 w-[50%] bg-gray-200  text-center"
            />
          </div>
          <div className="p-3 pl-60 flex gap-8 flex items-center">
            <h1 className="text-2xl text-gray-500">Message:</h1>
            <input
              type="text"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              id=""
              className="rounded-2xl  text-sm h-50 w-[50%] bg-gray-200  text-center"
            />
          </div>
          <div className="ml-[43%] p-5">
            <button className=" bg-gray-600 text-white hover:text-black hover:bg-gray-300 transition-all h-10 w-30 rounded-xl cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
