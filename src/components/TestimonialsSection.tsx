import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "David Chen",
    text: "This academy completely transformed my confidence and fitness. The master's teaching style is unmatched — disciplined yet encouraging.",
    role: "Adult Student, 3 Years",
  },
  {
    name: "Sarah Mitchell",
    text: "My son started at age 7 and the progress has been incredible. He's more focused at school and has real self-discipline now.",
    role: "Parent",
  },
  {
    name: "Marcus Rivera",
    text: "I've trained at gyms worldwide, but the level of technique and dedication here is on another level. Truly elite coaching.",
    role: "Competition Fighter",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">What They Say</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase">
            <span className="text-primary">Testimonials</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 hover-glow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-heading font-bold uppercase">{t.name}</p>
                <p className="text-primary text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
