import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { motion } from "framer-motion";
import { Home, Library, ShoppingBag, Utensils, Vote, Zap } from "lucide-react";

const Features = () => {
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore Our <span className="text-[#FF4500]">Features</span></h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Powerful modules built specifically for the modern student. Everything you need to navigate campus life simplified into one app.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Home, title: "Smart Housing", desc: "Easily book rooms, track inspections, and manage your student accommodation in real-time." },
                            { icon: ShoppingBag, title: "Campus Marketplace", desc: "The safest way to buy and sell textbooks, electronics, and dorm essentials within your school." },
                            { icon: Utensils, title: "Food Delivery", desc: "Order from your favorite campus vendors and local restaurants with integrated student-only discounts." },
                            { icon: Zap, title: "Social Hub", desc: "Stay connected with real-time school feeds, announcements, and specialized student communities." },
                            { icon: Vote, title: "Secure Elections", desc: "Participate in transparent and secure student union voting with our verified digital ballot system." },
                            { icon: Library, title: "Digital Library", desc: "Access a shared repository of study materials, past questions, and academic resources filtered by school." }
                        ].map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group p-10 rounded-[2.5rem] bg-card border border-white/5 hover:border-[#FF4500]/50 transition-all"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#FF4500]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <f.icon className="w-7 h-7 text-[#FF4500]" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {f.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Features;
