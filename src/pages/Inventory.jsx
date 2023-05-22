import React from "react";
import { Link } from "react-router-dom";

const Inventory = () => {
  return (
    <div>
      <h1 className="text-6xl mb-2 text-center text-secondary font-semibold">
        Inventory Barber Shop
      </h1>
      <Link to="/tambah-inventory">
        <button className="bg-secondary text-third px-4 py-2 rounded hover:bg-primary mb-4">
          Add
        </button>
      </Link>
      <table className="w-full border">
        <thead className="bg-secondary text-third">
          <tr>
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Product Name</th>
            <th className="py-2 px-4">Qty</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody className="text-secondary text-center">
          <tr>
            <td className="py-2 px-4">1</td>
            <td className="py-2 px-4">Shampoo</td>
            <td className="py-2 px-4">10</td>
            <td className="py-2 px-4">$15</td>
            <td className="py-2 px-4">
              <button className="bg-primary text-third px-2 py-1 rounded">
                Edit
              </button>
              <button className="bg-red-500 text-third px-2 py-1 rounded ml-2">
                Del
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4">2</td>
            <td className="py-2 px-4">Gunting</td>
            <td className="py-2 px-4">5</td>
            <td className="py-2 px-4">$10</td>
            <td className="py-2 px-4">
              <button className="bg-primary text-third px-2 py-1 rounded">
                Edit
              </button>
              <button className="bg-red-500 text-third px-2 py-1 rounded ml-2">
                Del
              </button>
            </td>
          </tr>
          {/* Tambahkan baris inventory lainnya sesuai kebutuhan */}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
