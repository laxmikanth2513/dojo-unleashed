import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const locations = [
  {
    name: "Downtown Dojo",
    address: "123 Main Street, Downtown District",
    timings: "Mon-Fri: 6AM-9PM | Sat: 8AM-6PM",
  },
  {
    name: "Westside Training Center",
    address: "456 West Boulevard, Westside",
    timings: "Mon-Fri: 7AM-10PM | Sat-Sun: 9AM-5PM",
  },
  {
    name: "Elite Fight Academy",
    address: "789 Champion Ave, Sports Complex",
    timings: "Mon-Sat: 6AM-10PM | Sun: 10AM-4PM",
  },
];

const LocationsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">Find Us</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase">
            Our <span className="text-primary">Locations</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 hover-glow hover-scale"
            >
              <h3 className="font-heading text-xl font-bold uppercase mb-4 text-primary">{loc.name}</h3>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-muted-foreground text-sm">{loc.address}</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-muted-foreground text-sm">{loc.timings}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
