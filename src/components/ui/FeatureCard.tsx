import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: "primary" | "pink" | "amber";
  delay?: number;
}

const gradientClasses = {
  primary: "from-primary/20 to-primary/5 hover:from-primary/30 hover:to-primary/10",
  pink: "from-accent-pink/20 to-accent-pink/5 hover:from-accent-pink/30 hover:to-accent-pink/10",
  amber: "from-accent-amber/20 to-accent-amber/5 hover:from-accent-amber/30 hover:to-accent-amber/10",
};

const iconBgClasses = {
  primary: "bg-primary/20 text-primary",
  pink: "bg-accent-pink/20 text-accent-pink",
  amber: "bg-accent-amber/20 text-accent-amber",
};

export const FeatureCard = ({ icon: Icon, title, description, gradient, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative group p-6 rounded-2xl bg-gradient-to-br ${gradientClasses[gradient]} border border-white/10 backdrop-blur-sm transition-all duration-300`}
    >
      <div className={`w-12 h-12 rounded-xl ${iconBgClasses[gradient]} flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
};
