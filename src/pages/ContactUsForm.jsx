import React, { useState } from "react";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Lakukan sesuatu dengan data yang di-submit, seperti mengirim email atau menyimpan pesan ke database

    // Setelah data berhasil dikirim, reset nilai inputan
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="max-w-4xl mx-auto rounded p-1">
      <h2 className="text-2xl mb-4 text-center font-bold text-secondaryr">
        Contact Us
      </h2>
      <div className="mb-4">
        <label htmlFor="name" className="block font-semibold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-secondary rounded py-2 px-3"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-secondary rounded py-2 px-3"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-semibold">
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-secondary rounded py-2 px-3"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-primary text-third px-4 py-2 rounded hover:bg-secondary"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactUsForm;
