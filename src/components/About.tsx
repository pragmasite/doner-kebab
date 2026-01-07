import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
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
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl text-foreground">
            {t.about.title1} <br />
            <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-6 text-lg text-foreground/80">{t.about.p1}</p>
            <p className="text-lg text-foreground/80">{t.about.p2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 sm:grid-cols-2"
          >
            <div className="bg-background rounded-xl p-6 shadow-soft">
              <div className="text-3xl font-serif font-bold text-primary mb-2">10+</div>
              <p className="text-sm text-foreground/70">{t.about.stat1}</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-soft">
              <div className="text-3xl font-serif font-bold text-primary mb-2">5★</div>
              <p className="text-sm text-foreground/70">{t.about.stat3}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {t.about.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background rounded-xl p-6 shadow-soft flex gap-4"
            >
              <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
