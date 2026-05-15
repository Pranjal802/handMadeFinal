import { motion } from "framer-motion";
import greenBangles from "../assets/green_bangles.jpeg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[#6B8E7F] via-[#7A9B8C] to-[#8AA89A] py-24 md:py-32 relative overflow-hidden"
    >
      {/* Soft Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <img
          src={greenBangles}
          alt="Background Decoration"
          className="w-full h-full object-cover rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm tracking-[4px] uppercase text-white/80 mb-5 font-light">
              ✿ Handmade Elegance
            </span>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Handcrafted Beauty <br />
              For Your Everyday Style
            </h1>

            <p className="text-lg text-white/90 leading-relaxed max-w-xl mb-8 font-light">
              Explore our beautifully handmade collections including bangles,
              baskets, purses, toys, and unique craft items designed with love,
              creativity, and traditional artistry.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-white text-[#6B8E7F] rounded-full font-semibold hover:bg-[#F5F1E8] transition-all duration-300 shadow-md">
                Explore Collection
              </button>

              <button className="px-8 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-all duration-300">
                View Crafts
              </button>
            </div>

            {/* Small Stats */}
            <div className="flex gap-10 mt-12 text-white">
              <div>
                <h3 className="text-3xl font-semibold">100+</h3>
                <p className="text-white/80 text-sm">Handmade Products</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">50+</h3>
                <p className="text-white/80 text-sm">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">100%</h3>
                <p className="text-white/80 text-sm">Handcrafted</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Main Image */}
            <div className="relative">
              <img
                src={greenBangles}
                alt="Handmade Green Bangles"
                className="w-full max-w-lg h-[550px] object-cover rounded-[40px] shadow-2xl border border-white/20"
              />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 -left-6 bg-[#DCCFC0] backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl"
              >
                <p className="text-[#6B8E7F] font-semibold text-lg">
                  ✨ Premium Handmade
                </p>
                <p className="text-sm text-gray-600">
                  Crafted with Love & Care
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}