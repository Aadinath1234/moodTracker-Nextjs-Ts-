import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function NavigationMenuDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-black text-white p-4  gap-8">
      {/* Mobile header (only on small screens) */}
      <div className="flex justify-between items-center md:hidden">
        <h1 className="text-xl font-bold   ">MoodTracker</h1>
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop header (only visible on md and up) */}
      <div className="hidden md:flex justify-center items-center mb-4">
        <h1 className="text-2xl font-bold ml-4 border-2 rounded-2xl p-4">
          MoodTracker
        </h1>
      </div>

      {/* Navigation links */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:justify-center md:gap-8 mt-4 md:mt-0`}
      >
        {[
          { href: "/Homepage", label: "Home" },
          { href: "/About", label: "About Us" },
          { href: "/Contact", label: "Contact Us" },
          { href: "/login", label: "Login" },
        ].map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <div className="p-3 m-1 border-2 border-white rounded-2xl text-center hover:bg-white hover:text-black transition">
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavigationMenuDemo;
