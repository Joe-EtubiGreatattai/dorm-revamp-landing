import { motion } from "framer-motion";
import { Rocket, Smartphone, UserPlus } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    description: "Sign up with your university credentials and verify your student status in seconds.",
  },
  {
    icon: Smartphone,
    step: "02",
    title: "Verify Your Identity",
    description: "Access all secure campus features instantly after a quick .edu email verification.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Start Living Smarter",
    description: "Book dorms, order food, connect with peers, and manage payments—all from one place.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 relative bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Get Started in{" "}
            <span className="text-[#FF4500]">
              3 Easy Steps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who've already transformed their campus experience.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-[#FF4500]/20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center relative"
            >
              {/* Step number badge */}
              <div className="relative inline-block mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 rounded-2xl bg-[#FF4500] flex items-center justify-center mx-auto shadow-lg shadow-[#FF4500]/20"
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-[#FF4500] text-[#FF4500] text-sm font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
