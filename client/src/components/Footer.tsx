import { motion } from "framer-motion";

export function Footer() {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-portfolio-neutral-dark dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            className="font-bold text-xl font-mono mb-4 text-portfolio-primary dark:text-blue-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            &lt;nhuthuynh /&gt;
          </motion.div>

          <p className="text-gray-400 dark:text-gray-500 mb-6">
            Building the future, one line of code at a time.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="border-t border-gray-800 dark:border-gray-800 pt-8">
            <p className="text-gray-400 dark:text-gray-500">
              © 2024 Alex Chen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
