import { motion } from "framer-motion";
import { Home, ShoppingBag, UtensilsCrossed, Users, Vote, Wallet } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";

const features = [
  {
    icon: Home,
    title: "Dorm & Housing",
    description: "Browse available rooms, book instantly, and schedule inspections. Your perfect living space is just a tap away.",
    gradient: "primary" as const,
  },
  {
    icon: ShoppingBag,
    title: "Student Marketplace",
    description: "Buy and sell textbooks, electronics, furniture, and more. Secure transactions with fellow students.",
    gradient: "pink" as const,
  },
  {
    icon: UtensilsCrossed,
    title: "Campus Food Delivery",
    description: "Order from campus cafeterias and local favorites. Get hot meals delivered right to your dorm.",
    gradient: "amber" as const,
  },
  {
    icon: Users,
    title: "Community Feed",
    description: "Stay connected with school-specific updates, events, and clubs. Never miss what's happening on campus.",
    gradient: "primary" as const,
  },
  {
    icon: Vote,
    title: "Digital Voting",
    description: "Participate in student elections securely. Your voice matters — vote from anywhere on campus.",
    gradient: "pink" as const,
  },
  {
    icon: Wallet,
    title: "Integrated Wallet",
    description: "Pay for everything campus-related in one place. Add funds, split bills, and track spending effortlessly.",
    gradient: "amber" as const,
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Everything You Need,{" "}
            <span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">
              One Place
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From housing to hangouts, Dorm Revamp handles it all so you can focus on what matters — your education and experiences.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
