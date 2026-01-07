import { motion } from "framer-motion";
import { Apple, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent-pink/10" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-accent-pink flex items-center justify-center"
          >
            <ArrowRight className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-primary via-accent-pink to-accent-amber bg-clip-text text-transparent">
              Campus Life?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of students already using Dorm Revamp. Download now and experience the future of campus living.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              <Apple className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download for iOS
            </Button>
            <Button variant="heroOutline" size="lg" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform fill-current" />
              Get it on Android
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Free to download • No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
};
