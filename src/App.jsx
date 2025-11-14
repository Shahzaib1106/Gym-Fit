// Full working React landing page with hover effects on trainers, dark mode toggle, mobile menu animation, FAQ arrow animations

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const trainers = [
    { name: "Coach Ali", exp: "10 Years", img: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg" },
    { name: "Coach Hamza", exp: "7 Years", img: "https://images.pexels.com/photos/3837756/pexels-photo-3837756.jpeg" },
    { name: "Coach Bilal", exp: "5 Years", img: "https://images.pexels.com/photos/3253498/pexels-photo-3253498.jpeg" }
  ];

  const faqs = [
    { q: "What is the fee?", a: "Yes, details will be provided at the reception." },
    { q: "Do you offer personal training?", a: "Yes, details will be provided at the reception." },
    { q: "Is there a trial week?", a: "Yes, details will be provided at the reception." }
  ];

  return (
    <div className={`${dark ? "dark" : ""} transition-colors duration-500`}>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen">

        {/* Navbar */}
        <nav className="flex justify-between items-center p-4 shadow-md fixed top-0 w-full bg-white dark:bg-gray-800 z-50 transition-colors duration-500">
          <h1 className="text-2xl font-bold">GymFit</h1>
          <div className="hidden md:flex gap-6 text-lg">
            {['Home','Trainers','Reviews','FAQ','Contact'].map((item) => (
              <motion.button key={item} whileHover={{ scale: 1.1 }} onClick={() => scrollTo(item.toLowerCase())}>{item}</motion.button>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="mr-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
            onClick={() => setDark(!dark)}
          >
            {dark ? "Light" : "Dark"}
          </motion.button>

          {/* Mobile Menu */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>

        {/* Mobile Menu Drawer */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: open ? 0 : 200, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden fixed right-0 top-16 bg-white dark:bg-gray-800 w-56 p-4 shadow-lg rounded-l-2xl ${open ? '' : 'hidden'}`}
        >
          <div className="flex flex-col gap-4 text-lg">
            {['Home','Trainers','Reviews','FAQ','Contact'].map((item) => (
              <motion.button key={item} whileHover={{ scale: 1.05 }} onClick={() => scrollTo(item.toLowerCase())}>{item}</motion.button>
            ))}
          </div>
        </motion.div>

        {/* Hero Section */}
        <section id="home" className="pt-24 flex flex-col md:flex-row items-center p-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1">
            <motion.h1 initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="text-5xl font-bold mb-4">Transform Your Body</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-lg mb-6">Join Pakistan's most premium gym with expert trainers and top-class equipment.</motion.p>
            <motion.button whileHover={{ scale: 1.05 }} className="px-6 py-3 bg-blue-600 text-white rounded-xl">Join Now</motion.button>
          </motion.div>
          <motion.img initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg" className="w-full md:w-1/2 rounded-2xl shadow-xl mt-6 md:mt-0" />
        </section>

        {/* Trainers Section with hover effect */}
        <section id="trainers" className="p-10 bg-gray-100 dark:bg-gray-700">
          <h2 className="text-4xl font-bold text-center mb-8">Meet Our Trainers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.05 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i*0.2 }} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center cursor-pointer">
                <img src={t.img} className="w-full h-60 object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-105" />
                <h3 className="text-2xl font-semibold">{t.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">Experience: {t.exp}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="p-10">
          <h2 className="text-4xl font-bold text-center mb-8">What Members Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Best gym experience!', 'Amazing trainers.', 'Loved the environment.'].map((txt, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i*0.2 }} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
                <p className="text-lg">"{txt}"</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="p-10 bg-gray-100 dark:bg-gray-700">
          <h2 className="text-4xl font-bold text-center mb-6">FAQ</h2>
          <div className="max-w-2xl mx-auto">
            {faqs.map((f, i) => (
              <details key={i} className="mb-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow group">
                <summary className="text-xl font-semibold cursor-pointer flex justify-between items-center">
                  {f.q}
                  <motion.span className="transition-transform duration-300 group-open:rotate-180"><ChevronDown size={20} /></motion.span>
                </summary>
                <p className="mt-2">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="p-10">
          <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
          <form className="max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col gap-4">
            <motion.input whileFocus={{ scale: 1.02 }} className="p-3 rounded-lg" placeholder="Your Name" />
            <motion.input whileFocus={{ scale: 1.02 }} className="p-3 rounded-lg" placeholder="Your Email" />
            <motion.textarea whileFocus={{ scale: 1.02 }} className="p-3 rounded-lg" rows="4" placeholder="Your Message"></motion.textarea>
            <motion.button whileHover={{ scale: 1.05 }} className="px-6 py-3 bg-blue-600 text-white rounded-xl">Send Message</motion.button>
          </form>
        </section>

        {/* Footer */}
        <footer className="p-6 text-center bg-gray-900 text-white mt-10">
          © 2025 GymFit. Developed by Shahzaib Ahmad. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}