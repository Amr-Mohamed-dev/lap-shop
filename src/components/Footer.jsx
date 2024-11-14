import { motion } from "framer-motion";
import useInView from "./UseInView";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const [ref, isVisible] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="dark:bg-gray-900 bg-white py-6 " dir="ltr" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-center space-x-4"
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}>
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            className="dark:text-white text-black text-2xl">
            <FaFacebookF />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            className="dark:text-white text-black text-2xl">
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            className="dark:text-white text-black text-2xl">
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            className="dark:text-white text-black text-2xl">
            <FaTiktok />
          </motion.a>
        </motion.div>
        <div className="mt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Syntax-Flow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
