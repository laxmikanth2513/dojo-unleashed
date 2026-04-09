import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star } from "lucide-react";

const achievements = [
  { icon: Trophy, year: "2024", title: "National Championship", desc: "1st Place - Open Division" },
  { icon: Medal, year: "2023", title: "International Open", desc: "Gold Medal - Heavyweight" },
  { icon: Award, year: "2022", title: "State Championship", desc: "Team Gold - 5 Medals" },
  { icon: Star, year: "2021", title: "Grand Master Certification", desc: "5th Degree Black Belt" },
  { icon: Trophy, year: "2020", title: "Pan-Asian Games", desc: "Silver Medal - Sparring" },
  { icon: Medal, year: "2019", title: "World Karate League", desc: "Bronze Medal - Kata" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">Our Record</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase">
            <span className="text-primary">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 flex items-start gap-4 hover-glow hover-scale"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-primary text-sm font-heading font-bold">{item.year}</span>
                <h3 className="font-heading text-lg font-bold uppercase">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
