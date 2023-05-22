import React from "react";

const ProfileBarberMan = () => {
  return (
    <div className="flex space-x-4">
      <div className="bg-secondary text-third p-8 rounded-lg">
        <div className="flex items-center justify-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-primary"
            src="path_to_image"
            alt="Barber-Man"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-lg">Master Barber</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">About Me</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="mt-2">
            <li>Email: john.doe@example.com</li>
            <li>Phone: +1 123-456-7890</li>
          </ul>
        </div>
      </div>

      <div className="bg-secondary text-third p-8 rounded-lg">
        <div className="flex items-center justify-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-primary"
            src="path_to_image"
            alt="Barber-Man"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Jane Smith</h2>
          <p className="text-lg">Senior Barber</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">About Me</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="mt-2">
            <li>Email: jane.smith@example.com</li>
            <li>Phone: +1 987-654-3210</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileBarberMan;
