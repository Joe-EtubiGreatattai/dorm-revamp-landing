import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { motion } from "framer-motion";
import { Activity, FileText, Fingerprint, UserCheck } from "lucide-react";

const Elections = () => {
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Secure <span className="text-[#FF4500]">Elections</span></h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Transforming student governance with transparent, accessible, and tamper-proof digital voting.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-12 mb-24">
                        {[
                            {
                                icon: UserCheck,
                                title: "Register",
                                desc: "Verify your student credentials and get whitelisted for upcoming campus-wide or departmental elections."
                            },
                            {
                                icon: FileText,
                                title: "Review",
                                desc: "Explore candidate profiles, download manifestos, and watch campaign videos directly within the app."
                            },
                            {
                                icon: Fingerprint,
                                title: "Secure Vote",
                                desc: "Cast your ballot using biometric verification. Your vote is anonymized, encrypted, and instantly recorded."
                            }
                        ].map((step, i) => (
                            <div key={i} className="relative group">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 rounded-[2.5rem] bg-card border border-white/5 text-center relative z-10"
                                >
                                    <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-[#FF4500] flex items-center justify-center shadow-lg shadow-[#FF4500]/20 group-hover:scale-110 transition-transform">
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                                </motion.div>
                                {i < 2 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-[#FF4500]/20 z-0" />
                                )}
                            </div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="p-12 rounded-[2.5rem] bg-gradient-to-br from-[#FF4500]/5 to-transparent border border-[#FF4500]/10 text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4500]/10 text-[#FF4500] text-sm font-bold mb-8">
                            <Activity className="w-4 h-4" />
                            Live Verification
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Digital Democracy in Action</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our blockchain-inspired ledger ensures every vote is counted accurately and can be verified by anyone in real-time, without compromising voter privacy.
                        </p>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Elections;
