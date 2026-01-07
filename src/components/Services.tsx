import { motion } from "framer-motion";
import { Utensils } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.services.label}</span>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl text-foreground">
            {t.services.title}
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/70">
            {t.services.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="absolute -left-3 top-6 h-12 w-12 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors" />
              <Utensils className="h-6 w-6 text-accent mb-4 relative z-10" />
              <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
