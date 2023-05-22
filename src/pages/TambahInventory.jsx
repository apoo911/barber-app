import React, { useState } from "react";

const TambahInventory = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Lakukan sesuatu dengan data yang di-submit, seperti menyimpannya ke database atau mengirim ke server

    // Setelah data berhasil ditambahkan, reset nilai inputan
    setProductName("");
    setQuantity("");
    setPrice("");
  };

  return (
    <div>
      <h1 className="text-6xl mb-2 text-center text-secondary font-semibold">
        Inventory Add Form
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="text-secondary max-w-4xl mx-auto rounded p-1"
      >
        <div className="mb-4">
          <label htmlFor="productName" className="block font-semibold">
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full border border-secondary rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block  font-semibold">
            Qty:
          </label>
          <input
            type="number"
            id="quantity"
            min={0}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full border border-secondary rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-semibold">
            Price:
          </label>
          <input
            type="number"
            id="price"
            min={0}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-secondary rounded py-2 px-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-third px-4 py-2 rounded hover:bg-secondary"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TambahInventory;
