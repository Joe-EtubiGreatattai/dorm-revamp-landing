import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { motion } from "framer-motion";
import { Calendar, Megaphone, Share2, Users } from "lucide-react";

const Community = () => {
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Student <span className="text-[#FF4500]">Community</span></h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            The heartbeat of your campus. Connect, share, and grow with thousands of students in one secured ecosystem.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Campus Feeds",
                                desc: "Stay updated with real-time news and discussions from your specific school."
                            },
                            {
                                icon: Share2,
                                title: "Resource Hub",
                                desc: "Share notes, textbooks, and campus hacks with your community."
                            },
                            {
                                icon: Megaphone,
                                title: "Announcements",
                                desc: "Get direct updates from student unions and campus authorities instantly."
                            },
                            {
                                icon: Calendar,
                                title: "Live Events",
                                desc: "Never miss a campus event, webinar, or social gathering again."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-card border border-white/5 hover:border-[#FF4500]/50 transition-all text-center group"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#FF4500]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-8 h-8 text-[#FF4500]" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-24 p-12 rounded-[2.5rem] bg-gradient-to-br from-[#FF4500]/5 to-transparent border border-[#FF4500]/10 text-center"
                    >
                        <h2 className="text-3xl font-bold mb-6">Built for Every Student</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                            Dorm Revamp isn't just an app—it's a digital campus experience designed to make your student life more connected and productive.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {["School Specific", "Vetted Users", "Instant Updates", "Safe & Secure"].map((tag) => (
                                <span key={tag} className="px-6 py-2 rounded-full bg-background/50 border border-white/10 text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Community;
