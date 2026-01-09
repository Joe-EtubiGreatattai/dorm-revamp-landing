import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { motion } from "framer-motion";
import { Eye, Heart, Rocket, Target } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">About <span className="text-[#FF4500]">Dorm</span></h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            We're on a mission to redefine the African campus experience through innovation, community, and secure technology.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {[
                            {
                                icon: Target,
                                title: "Our Mission",
                                desc: "To consolidate fragmented campus services into a single, secure, and beautiful ecosystem that empowers every student."
                            },
                            {
                                icon: Eye,
                                title: "Our Vision",
                                desc: "To become the digital backbone of every tertiary institution across the continent, bridging the gap between students and services."
                            },
                            {
                                icon: Heart,
                                title: "Our Values",
                                desc: "Security, Transparency, and Student-First Innovation drive every line of code we write and every feature we build."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-card border border-white/5 text-center group"
                            >
                                <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-[#FF4500]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-[#FF4500]" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="p-12 rounded-[2.5rem] bg-[#FF4500]/5 border border-[#FF4500]/10 text-center"
                    >
                        <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-[#FF4500] flex items-center justify-center shadow-lg shadow-[#FF4500]/20">
                            <Rocket className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold mb-6">The Journey to Better Campus Life</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Dorm was born out of a simple observation: campus life is fragmented. We've built the one tool to fix it, ensuring you spend less time on logistics and more time on what matters—your growth.
                        </p>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
