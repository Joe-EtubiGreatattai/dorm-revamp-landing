import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { motion } from "framer-motion";
import { CreditCard, MapPin, ShieldCheck } from "lucide-react";

const Marketplace = () => {
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Campus <span className="text-[#FF4500]">Marketplace</span></h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            The safest peer-to-peer trading ecosystem designed exclusively for your campus. Buy and sell with total peace of mind.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            { icon: ShieldCheck, title: "Verified Trading", desc: "Every user is a verified student from your institution, ensuring a trusted environment for every transaction." },
                            { icon: CreditCard, title: "Secure Escrow", desc: "Our integrated wallet keeps funds safe until you confirm the item is received and exactly as described." },
                            { icon: MapPin, title: "Local Pickups", desc: "Coordinate safe meeting spots on campus. No shipping costs, no strangers, just campus convenience." }
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
                        <h2 className="text-3xl font-bold mb-6">Experience Frictionless Trading</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Whether you're clearing out your dorm or looking for an upgrade, Dorm Revamp makes campus commerce fast, safe, and incredibly simple.
                        </p>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Marketplace;
