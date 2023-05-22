import React from "react";

const ScheduleTable = () => {
  return (
    <div>
      <h1 className="text-6xl mb-2 text-center text-secondary font-semibold">
        Schedule Barber
      </h1>
      <table className="w-full border mt-4">
        <thead className="bg-secondary text-third">
          <tr>
            <th className="py-2 px-4">Tanggal dan Waktu</th>
            <th className="py-2 px-4">Nama Pelanggan</th>
            <th className="py-2 px-4">No Handphone</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Jenis Layanan</th>
            <th className="py-2 px-4">Barber-Man</th>
            <th className="py-2 px-4">Total</th>
          </tr>
        </thead>
        <tbody className="text-secondary">
          <tr>
            <td className="py-2 px-4">2023-05-22 10:00 AM</td>
            <td className="py-2 px-4">John Doe</td>
            <td className="py-2 px-4">+1 123-456-7890</td>
            <td className="py-2 px-4">john.doe@example.com</td>
            <td className="py-2 px-4">Haircut</td>
            <td className="py-2 px-4">Jane Smith</td>
            <td className="py-2 px-4">$20</td>
          </tr>
          <tr>
            <td className="py-2 px-4">2023-05-22 11:30 AM</td>
            <td className="py-2 px-4">Jane Smith</td>
            <td className="py-2 px-4">+1 987-654-3210</td>
            <td className="py-2 px-4">jane.smith@example.com</td>
            <td className="py-2 px-4">Beard Trim</td>
            <td className="py-2 px-4">John Doe</td>
            <td className="py-2 px-4">$15</td>
          </tr>
          {/* Tambahkan baris jadwal lainnya sesuai kebutuhan */}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
