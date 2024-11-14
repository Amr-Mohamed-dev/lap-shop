import { useEffect, useState } from "react";
import { HiArrowSmUp } from "react-icons/hi";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
 
  
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <motion.button
          className="fixed bottom-5 right-5  text-md bg-gray-900 dark:bg-white text-gray-100 dark:text-gray-900 p-4 rounded-full z-50 hover:bg-fourth hover:text-black transition-all duration-300"
          onClick={handleScrollTop}
          initial={{ y: 0 }}
          animate={{ y: ["0px", "-10px", "0px"] }}
          transition={{
            y: {
              duration: 0.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
            scale: { duration: 0.3, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} // Slight scale effect on hover
        >
          <motion.div
            animate={{ y: ["0px", "-5px", "0px"] }}
            transition={{
              y: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
          >
            <HiArrowSmUp />
          </motion.div>
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTop;
