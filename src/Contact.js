import React, { useState } from "react";
import Socials from "./Socials";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <section name="contact" className="my-8">
      <h2 className="my-4 text-2xl font-bold leading-tight text-gray-900">
        Contact me
      </h2>
      <div className="flex flex-col">
        <Socials />
        <form onSubmit={handleSubmit} className="max-w-lg">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 font-bold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 font-bold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
