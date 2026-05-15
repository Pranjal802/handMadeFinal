import { useState } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  Heart,
  Sparkles,
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Collections", href: "#collections" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E8DDD0] bg-[#F5F1E8]/90 backdrop-blur-md shadow-sm">
      
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6B8E7F] to-[#8AA89A] shadow-md transition-transform duration-300 group-hover:scale-105">
            <Sparkles size={20} className="text-white" />
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#3A3A3A] leading-none">
              Handmade
            </h2>

            <span className="text-[11px] uppercase tracking-[4px] text-[#6B8E7F]">
              Creations
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-[#5A5A5A] transition-colors duration-300 hover:text-[#6B8E7F] group"
            >
              {link.name}

              {/* Underline Hover */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#6B8E7F] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Search */}
          <button className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#E8DDD0] hover:scale-105">
            <Search size={19} className="text-[#6B8E7F]" />
          </button>

          {/* Wishlist */}
          <button className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#E8DDD0] hover:scale-105">
            <Heart size={19} className="text-[#6B8E7F]" />
          </button>

          {/* Cart */}
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#E8DDD0] hover:scale-105">
            <ShoppingCart size={19} className="text-[#6B8E7F]" />

            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#9D6B7F] text-[10px] font-bold text-white">
              0
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#E8DDD0]"
          >
            {isOpen ? (
              <X size={24} className="text-[#6B8E7F]" />
            ) : (
              <Menu size={24} className="text-[#6B8E7F]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 border-t border-[#E8DDD0]" : "max-h-0"
        }`}
      >
        <div className="bg-[#F5F1E8] px-6 py-5 flex flex-col gap-5">

          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group relative w-fit text-[#5A5A5A] text-sm font-medium transition-colors duration-300 hover:text-[#6B8E7F]"
            >
              {link.name}

              {/* Underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#6B8E7F] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}