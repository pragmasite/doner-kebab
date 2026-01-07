import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

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
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl text-foreground">
            {t.contact.title1} <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/70">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.a
              variants={itemVariants}
              href="tel:+41324225656"
              className="group flex items-start gap-4 p-6 rounded-xl bg-background shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
            >
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {t.contact.phone}
                </h3>
                <p className="text-foreground/70">+41 32 422 56 56</p>
              </div>
            </motion.a>

            <motion.a
              variants={itemVariants}
              href="mailto:contact@kebab.ch"
              className="group flex items-start gap-4 p-6 rounded-xl bg-background shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
            >
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {t.contact.email}
                </h3>
                <p className="text-foreground/70">contact@kebab.ch</p>
              </div>
            </motion.a>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 p-6 rounded-xl bg-background shadow-soft"
            >
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-foreground mb-1">
                  {t.contact.address}
                </h3>
                <p className="text-foreground/70">
                  Rue Pierre-Péquignat 4<br />
                  2800 Delémont<br />
                  Switzerland
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                <a href="tel:+41324225656">{t.contact.callNow}</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-medium h-96"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.6734340667556!2d7.344593!3d47.365253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e1e7f5e5e5e5d%3A0x6b6b6b6b6b6b6b6b!2sRue%20Pierre-P%C3%A9quignat%204%2C%202800%20Del%C3%A9mont!5e0!3m2!1sfr!2sch!4v1234567890"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
