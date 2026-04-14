import { motion } from "framer-motion";
import masterPhoto from "@/assets/master-photo.png";

const MasterSection = () => {
  return (
    <section id="master" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-secondary to-background p-4 sm:p-8">
              <img
                src={masterPhoto}
                alt="Master Instructor"
                className="w-full max-w-sm mx-auto object-contain"
                loading="lazy"
                width={800}
                height={1024}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary rounded-lg" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">
              Head Instructor
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6">
              Master <span className="text-primary">Sensei</span>
            </h2>
            <div className="w-16 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over 20 years of martial arts mastery and multiple international championship titles, 
              our head instructor brings world-class expertise to every session. Trained under legendary 
              grandmasters across Asia, his teaching philosophy combines traditional discipline with 
              modern combat science.
            </p>
            <div className="space-y-3">
              {["5th Degree Black Belt", "International Champion", "Certified Combat Instructor", "20+ Years Experience"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MasterSection;
