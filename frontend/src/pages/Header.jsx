import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import taskLogo from "../img/Task-Logo-fullcol.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    {
      name: "Features",
      content: [
        { label: "Overview", path: "/software/jira/features" },
        { label: "Integrations", path: "/integrations" },
        { label: "Automation", path: "/automation" },
      ],
    },
    {
      name: "Solutions",
      mega: true,
    },
    {
      name: "Guide",
      content: [
        { label: "Docs", path: "/docs" },
        { label: "Tutorials", path: "/tutorials" },
        { label: "Community", path: "/community" },
      ],
    },
    {
      name: "Templates",
      content: [
        { label: "Marketing", path: "/marketing" },
        { label: "Engineering", path: "/engineering" },
        { label: "Design", path: "/design" },
      ],
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
  ];

  return (
    <>
      {/* 🌫 Background Blur */}
      {openMenu && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 transition-all duration-300"></div>
      )}

      <nav className="bg-white shadow-md px-10 font-mono py-4 flex justify-between items-center sticky top-0 z-50">

        {/* Logo */}
       <div className="flex items-center gap-3 cursor-pointer group">
        <Link to="/">
          <img
            src={taskLogo}
            alt="Logo"
            className="w-12 h-10 rounded-md  p-1"
          />
        </Link>
         <Link to="/">
          <h1 className="text-lg md:text-xl font-bold text-black group-hover:text-blue-600 transition duration-300">
            AI Task Manager
          </h1>
        </Link>
      </div>

        {/* Menu */}
        <ul className="flex gap-8 items-center text-black font-medium">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.name)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {/* Main Link */}
              <Link
                to={item.path || "#"}
                className="flex items-center gap-1 hover:text-blue-600 transition duration-300"
              >
                {item.name}

                {(item.content || item.mega) && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      openMenu === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Small Dropdown */}
              {item.content && openMenu === item.name && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="bg-white shadow-lg rounded-lg py-3 w-52 border">

                    {item.content.map((sub, i) => (
                      <Link
                        to={sub.path}
                        key={i}
                        className="block px-4 py-2 text-sm transition-all duration-300 
                        hover:bg-gray-100 hover:text-blue-600 hover:pl-6"
                      >
                        {sub.label}
                      </Link>
                    ))}

                  </div>
                </div>
              )}

              {/* Mega Menu */}
              {item.mega && openMenu === item.name && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="w-[700px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-6 border">

                    <div>
                      <h3 className="text-gray-500 font-semibold mb-3 text-sm">
                        TEAMS
                      </h3>
                      {["Marketing", "Engineering", "Design", "Operations", "IT"].map((text, i) => (
                        <Link
                          key={i}
                          to={`/${text.toLowerCase()}`}
                          className="block py-1 text-sm hover:text-blue-600 hover:translate-x-2 transition"
                        >
                          {text}
                        </Link>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-gray-500 font-semibold mb-3 text-sm">
                        USE CASES
                      </h3>
                      {[
                        "Getting started",
                        "Planning",
                        "Campaign Management",
                        "Agile Project Management",
                        "Program Management",
                      ].map((text, i) => (
                        <Link
                          key={i}
                          to={`/${text.toLowerCase().replace(/ /g, "-")}`}
                          className="block py-1 text-sm hover:text-blue-600 hover:translate-x-2 transition"
                        >
                          {text}
                        </Link>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-gray-500 font-semibold mb-3 text-sm">
                        COMPANY SIZE
                      </h3>
                      <Link
                        to="/enterprise"
                        className="block py-1 text-sm hover:text-blue-600 hover:translate-x-2 transition"
                      >
                        Enterprise
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-5 py-2 rounded-full 
            hover:bg-blue-700 transition hover:scale-105 shadow-md"
          >
            Get it free
          </Link>

          <Link
            to="/login"
            className="hover:text-blue-600 transition text-sm"
          >
            Sign in
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;