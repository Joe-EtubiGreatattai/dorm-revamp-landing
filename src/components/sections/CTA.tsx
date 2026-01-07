import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Subtle solid background */}
      <div className="absolute inset-0 bg-accent/5" />

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
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-[#FF4500] flex items-center justify-center shadow-lg shadow-[#FF4500]/20"
          >
            <ArrowRight className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your{" "}
            <span className="text-[#FF4500]">
              Campus Life?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of students already using Dorm Revamp. Get started today and experience the future of campus living.
          </p>

          <div className="flex justify-center">
            <Button size="lg" className="rounded-full px-10 py-7 h-auto text-xl bg-[#FF4500] text-white hover:bg-[#FF4500]/90 group shadow-xl shadow-[#FF4500]/20 transition-all">
              Join for Free
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
