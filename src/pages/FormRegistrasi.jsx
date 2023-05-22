import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

const FormRegistrasi = () => {
  const [nama, setNama] = useState("");
  const [nomorHandphone, setNomorHandphone] = useState("");
  const [email, setEmail] = useState("");
  const [jenisLayanan, setJenisLayanan] = useState("");
  const [barberMan, setbarberMan] = useState("");
  const [jadwal, setJadwal] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan aksi setelah formulir disubmit
    console.log("Data Formulir:", {
      nama,
      nomorHandphone,
      email,
      jenisLayanan,
    });
  };

  return (
    <form className="max-w-2xl mx-auto rounded p-1">
      <h2 className="text-2xl mb-4 text-center font-bold text-secondary">
        Registrasi Customer Barbershop
      </h2>
      <div className="mb-4">
        <label
          htmlFor="nama"
          className="block text-secondary font-semibold mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="nama"
          className="w-full border border-secondary rounded py-2 px-3"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="nomorHandphone"
          className="block text-secondary font-semibold mb-2"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="nomorHandphone"
          className="w-full border border-secondary rounded py-2 px-3"
          value={nomorHandphone}
          onChange={(e) => setNomorHandphone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-secondary font-semibold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full border border-secondary rounded py-2 px-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="jenisLayanan"
          className="block text-secondary font-semibold mb-2"
        >
          Services
        </label>
        <select
          id="jenisLayanan"
          className="w-full border border-secondary rounded py-2 px-3"
          value={jenisLayanan}
          onChange={(e) => setJenisLayanan(e.target.value)}
        >
          <option value="">Select Services</option>
          <option value="Potong Rambut">Haircut</option>
          <option value="Cukur Jenggot">Bredcut</option>
          <option value="Pangkas Kumis">Hairstyle</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="barberMan"
          className="block text-secondary font-semibold mb-2"
        >
          Barber-Man
        </label>
        <select
          id="barberMan"
          className="w-full border border-secondary rounded py-2 px-3"
          value={barberMan}
          onChange={(e) => setbarberMan(e.target.value)}
        >
          <option value="">Select Barber-Man</option>
          <option value="Potong Rambut">Andhika</option>
          <option value="Cukur Jenggot">Dwi</option>
          <option value="Pangkas Kumis">Pamungkas</option>
        </select>
      </div>
      <label
        htmlFor="jadwal"
        className="block text-secondary font-semibold mb-2"
      >
        Booking On
      </label>
      <DatePicker
        id="jadwal"
        className="w-full border border-secondary rounded py-2 px-3"
        selected={jadwal}
        onChange={(date) => setJadwal(date)}
        dateFormat="dd/MM/yyyy HH:mm"
        placeholderText="Select date and time"
        showMonthDropdown
        showYearDropdown
        showTimeSelect
        dropdownMode="select"
        minDate={new Date()}
        maxDate={addDays(new Date(), 7)}
      />
      <div className="text-center mt-2">
        <button
          type="submit"
          className="bg-secondary text-third py-2 px-4 rounded hover:bg-primary focus:bg-secondary"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default FormRegistrasi;
