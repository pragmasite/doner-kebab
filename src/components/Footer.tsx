import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12"
        >
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-lg font-bold mb-4">Dylan Döner Kebab</h3>
            <p className="text-sm text-primary-foreground/70">
              {t.footer.description}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-serif font-bold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-serif font-bold mb-4">{t.nav.contact}</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>+41 32 422 56 56</p>
              <p>Rue Pierre-Péquignat 4</p>
              <p>2800 Delémont, Switzerland</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70"
        >
          <p>
            © {currentYear} Dylan Döner Kebab. {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
