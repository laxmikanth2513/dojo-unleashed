import { motion } from "framer-motion";
import { Shield, Swords, Users, Trophy } from "lucide-react";

const programs = [
  {
    icon: Users,
    title: "Kids Training",
    description: "Building confidence, discipline, and coordination in young warriors ages 5-14.",
  },
  {
    icon: Swords,
    title: "Adults Training",
    description: "Complete martial arts training for all skill levels. Build strength, flexibility, and fighting technique.",
  },
  {
    icon: Shield,
    title: "Self Defense",
    description: "Practical self-defense techniques for real-world situations. Stay safe, stay prepared.",
  },
  {
    icon: Trophy,
    title: "Competition Training",
    description: "Elite-level training for tournament fighters. Push your limits and claim victory.",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">What We Offer</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase">
            Our <span className="text-primary">Programs</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-card border border-border rounded-lg p-8 hover-glow hover-scale cursor-pointer"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <program.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-3">{program.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
