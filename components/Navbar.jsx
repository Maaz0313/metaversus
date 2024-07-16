'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "#about" },
  { title: "Services", link: "/services" },
  { title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.xPaddings} py-8 relative`}
      >
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8 relative z-10`}
        >
          <motion.img
            src="/search.svg"
            alt="search"
            className="size-[24px] object-contain cursor-pointer"
            onClick={toggleSearch}
            whileTap={{ scale: 0.9 }}
          />
          <h2 className="font-extrabold text-[24px] leading-[30px] text-white uppercase">
            Metaversus
          </h2>
          <motion.img
            src="/menu.svg"
            alt="menu"
            className="size-[24px] object-contain cursor-pointer"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <div className="absolute w-[50%] inset-0 gradient-01 z-0" />
      </motion.nav>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center pr-20 bg-black bg-opacity-90"
          >
            <div className="w-full max-w-4xl px-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-6 py-4 text-xl text-white placeholder-gray-300 bg-white rounded-lg outline-none bg-opacity-20"
                  autoFocus
                />
                <div className="absolute transform -translate-y-1/2 -right-20 top-7">
                  <motion.button
                    onClick={toggleSearch}
                    className="text-gray-400 text-7xl"
                    whileTap={{ scale: 1.7 }}
                    style={{ transformOrigin: "center" }}
                  >
                    &#10006;
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          >
            <motion.button
              className="absolute text-4xl text-white transition-colors top-8 right-8 hover:text-gray-300"
              onClick={toggleMenu}
              whileTap={{ scale: 1.7 }}
            >
              &#10006;
            </motion.button>
            <motion.ul
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="text-center"
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={menuItemVariants}
                  className="mb-6"
                >
                  <motion.a
                    href={item.link}
                    className="text-4xl font-bold text-white transition-colors hover:text-gray-300"
                    onClick={toggleMenu}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.title}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;