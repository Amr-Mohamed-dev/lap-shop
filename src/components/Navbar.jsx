import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toggleLanguage, language, translate } = useTranslation();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-black/50 text-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 italic text-3xl cursor-pointer">
          Lap Shop
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-current">
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Navbar Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          {Object.keys(translate("navbar")).map((key) => {
            const item = translate("navbar")[key];
            return (
              <motion.a
                key={key}
                href={item.href}
                className="text-sm font-semibold leading-6 hover:text-accent dark:hover:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                {item.text}
              </motion.a>
            );
          })}
        </div>

        {/* Language & Dark Mode Toggle Buttons */}
        <div className="hidden lg:flex lg:items-center lg:gap-6 mx-5 px-5 py-1 rounded-2xl">
          <button
            onClick={toggleLanguage}
            className="text-sm font-semibold leading-6 flex items-center">
            {language === "en" ? "AR" : "EN"}
          </button>
          <button onClick={toggleDarkMode} className="p-2 rounded-md">
            {isDarkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            className="lg:hidden">
            <motion.div
              className="fixed inset-0 z-50 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <DialogPanel
              as={motion.div}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-400 dark:bg-gray-800 px-6 py-6 sm:max-w-sm text-primary dark:text-white">
              <div className="flex items-center justify-between">
                <XMarkIcon
                  width={20}
                  height={20}
                  onClick={() => setMobileMenuOpen(false)}
                />
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {Object.keys(translate("navbar")).map((key) => {
                      const item = translate("navbar")[key];
                      return (
                        <motion.a
                          key={key}
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent dark:hover:bg-gray-700"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}>
                          {item.text}
                        </motion.a>
                      );
                    })}
                  </div>
                  <div className="py-6 space-y-4">
                    {/* Language Toggle Button */}
                    <motion.button
                      onClick={toggleLanguage}
                      className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-accent dark:hover:bg-gray-700"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}>
                      {language === "en" ? "AR" : "EN"}
                    </motion.button>

                    {/* Dark Mode Toggle Button */}
                    <motion.button
                      onClick={toggleDarkMode}
                      className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-accent dark:hover:bg-gray-700"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}>
                      {isDarkMode ? (
                        <FaSun className="text-yellow-400" />
                      ) : (
                        <FaMoon className="text-gray-800 dark:text-gray-300" />
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
