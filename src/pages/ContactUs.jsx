import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
} from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import { useState, useEffect } from "react";
import useInView from "../components/UseInView";
import Branches from "../components/Branches";

const ContactUs = () => {
  const { translate } = useTranslation();
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
    <div
      className="pt-24 px-4 pb-11 bg-secondary dark:bg-primary h-full"
      ref={ref}>
      <h1 className="text-4xl pb-7 font-bold text-center text-primary dark:text-secondary">
        {translate("ContactUsPage.contactus")}
      </h1>
      <div className="grid sm:grid-cols-2 items-start gap-14 p-5  mx-auto max-w-4xl bg-secondary dark:bg-primary shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] dark:shadow-[0_2px_10px_-3px_rgba(255,255,255,0.3)] rounded-md font-[sans-serif]">
        <div>
          <h1 className="text-primary dark:text-secondary text-2xl font-extrabold">
            {" "}
            {translate("ContactUsPage.title")}
          </h1>
          <p className="text-sm text-third mt-4">
            {translate("ContactUsPage.description")}
          </p>
          {/* <div className="mt-5">
            <h2 className="text-primary dark:text-secondary text-base font-bold">
              {translate("ContactUsPage.Phone")}
            </h2>
            <ul className="mt-1">
              <li className="flex items-center">
                <div className="bg-iconsBg h-10 w-10 rounded-full text-third flex items-center justify-center shrink-0">
                  <FaPhoneAlt />
                </div>
                <a
                  href="javascript:void(0)"
                  className="text-third text-sm ml-4">
                  <strong>0123456789</strong>
                </a>
              </li>
            </ul>
          </div> */}
          {/* Branches */}
          <Branches />

          <div className="mt-5">
            <h2 className="text-primary dark:text-secondary text-base font-bold">
              {translate("ContactUsPage.Email")}
            </h2>
            <ul className="mt-1">
              <li className="flex items-center">
                <div className="bg-iconsBg h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 479.058 479.058">
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <a
                  href="javascript:void(0)"
                  className="text-third text-sm ml-4">
                  <strong>info@example.com</strong>
                </a>
              </li>
            </ul>
          </div>
          {/* socials  */}
          <div className="mt-7">
            <h2 className="text-primary dark:text-secondary text-base font-bold">
              {translate("ContactUsPage.Socials")}
            </h2>

            <motion.div
              className="flex gap-4 mt-2"
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
                className="dark:text-white text-black  text-2xl">
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
          </div>
        </div>

        {/* Form */}
        <form className="ml-auo space-y-4">
          <input
            type="text"
            placeholder={translate("ContactUsPage.form.name")}
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-third"
          />
          <input
            type="email"
            placeholder={translate("ContactUsPage.form.phone")}
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-third"
          />
          <input
            type="text"
            placeholder={translate("ContactUsPage.form.email")}
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-third"
          />
          <textarea
            placeholder={translate("ContactUsPage.form.message")}
            rows={6}
            className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-third"
            defaultValue={""}
          />
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-third rounded-md text-sm px-4 py-3 w-full !mt-6">
            {translate("ContactUsPage.form.btn")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
