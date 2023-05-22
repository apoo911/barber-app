import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Welcome Page", src: "home", path: "/" },
    { title: "Schedule", src: "schedule", path: "/schedule" },
    { title: "Customer", src: "users", gap: true, path: "/customer" },
    { title: "Barber-Man ", src: "barber", path: "/barberman" },
    { title: "Inventory", src: "ballot", path: "/inventory" },
    { title: "Report", src: "chart-line-up", path: "/report" },
    { title: "Contact Us ", src: "envelope", gap: true, path: "/contact" },
  ];
  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-primary h-screen p-5  pt-8 relative duration-300 text-third`}
    >
      <img
        src="./src/assets/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-primary
        border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="./src/assets/barber-shop.png"
          className={`cursor-pointer w-10 h-10 duration-1000 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Barber App
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <NavLink
            key={index}
            to={Menu.path}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
          >
            <img src={`./src/assets/${Menu.src}.png`} className="w-6 h-6" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
