import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  const schedule = [
    { hours: "10:45 - 14:00 / 17:30 - 22:00" },
    { hours: "10:45 - 14:00 / 17:30 - 22:00" },
    { hours: "10:45 - 14:00 / 17:30 - 22:00" },
    { hours: "10:45 - 14:00 / 17:30 - 22:00" },
    { hours: "10:45 - 14:00 / 17:30 - 22:00" },
    { hours: "10:45 - 14:00 / 17:30 - 22:00" },
    { hours: t.hours.closed },
  ];

  const todayIndex = new Date().getDay();
  const adjustedIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="hours" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl"
        >
          <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-bold text-foreground">{t.hours.header}</span>
            </div>
            <div className="divide-y divide-border">
              {schedule.map((item, i) => {
                const isToday = i === adjustedIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.05 }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      )}
                      <span
                        className={`${
                          isToday ? "font-bold text-primary" : "text-foreground"
                        }`}
                      >
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-sm ${
                        isClosed ? "text-muted-foreground" : "font-medium"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
