import React from "react";
import { Link } from "react-router-dom";

const Customer = () => {
  return (
    <div>
      <h1 className="text-6xl mb-2 text-center text-secondary font-semibold">
        List Customer
      </h1>
      <Link to="/form-registrasi">
        <button className="bg-secondary text-third px-4 py-2 rounded hover:bg-primary mb-4">
          Add Customer
        </button>
      </Link>
      <table className="w-full border">
        <thead className="h-6">
          <tr className="bg-primary text-third">
            <th className="py-2 px-4">No</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Phone Number</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Sevices</th>
            <th className="py-2 px-4">Barber</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          <th className="py-2 px-4">1</th>
          <th className="py-2 px-4">Jaka</th>
          <th className="py-2 px-4">08983373739</th>
          <th className="py-2 px-4">jaka@gmail.com</th>
          <th className="py-2 px-4">Cukur Rambut</th>
          <th className="py-2 px-4">Andhika</th>
          <th className="py-2 px-4">
            <button class="bg-ubah text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2">
              Edit
            </button>
            <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:bg-red-600">
              Del
            </button>
          </th>
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
