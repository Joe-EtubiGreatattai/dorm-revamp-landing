import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Heart, Home, MessageSquare, ShoppingBag, Star, Users, Vote } from "lucide-react";

export const Hero = () => {
  const highlights = [
    { icon: Home, text: "Smart Housing", sub: "Book & manage" },
    { icon: ShoppingBag, text: "Marketplace", sub: "Trade with peers" },
    { icon: Vote, text: "Secure Voting", sub: "Digital elections" },
  ];

  const floatingIcons = [
    { Icon: MessageSquare, color: "text-primary", top: "15%", left: "10%", delay: 0 },
    { Icon: Heart, color: "text-pink-500", top: "25%", right: "12%", delay: 0.5 },
    { Icon: Star, color: "text-amber-500", bottom: "35%", left: "15%", delay: 1 },
    { Icon: Coffee, color: "text-primary", bottom: "40%", right: "18%", delay: 1.5 },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-start overflow-hidden pt-32 pb-0 px-4">
      {/* Animated background gradients & floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-radial from-primary/30 via-transparent to-transparent"
        />

        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.1, 1],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
            className="absolute hidden md:block"
            style={{ top: item.top, bottom: item.bottom, left: item.left, right: item.right }}
          >
            <item.Icon className={`w-8 h-8 ${item.color} opacity-40`} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        {/* Social Proof Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          Join 50,000+ Students Nationwide
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]"
        >
          The All-in-One App,
          <br />
          <span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">
            Built for Campus Life.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From booking your next dorm to trading essentials and voting in
          digital elections — Dorm is your ultimate campus companion.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button size="lg" className="rounded-full px-8 py-6 h-auto text-lg bg-foreground text-background hover:bg-foreground/90 group transition-all">
            Join for Free
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <button className="flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-accent/10 transition-all group">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-primary">
              <Users className="w-4 h-4" />
            </div>
            <span className="font-medium">Explore Communities</span>
          </button>
        </motion.div>

        {/* Quick Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8 border-t border-border/50 pt-12"
        >
          {highlights.map((item, i) => (
            <div key={i} className="flex flex-col items-center p-4 rounded-2xl bg-accent/5 border border-border/50 hover:bg-accent/10 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">{item.text}</h3>
              <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
