import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in <span className="text-[#FF4500]">Touch</span></h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Have questions or feedback? Connect with us on social media.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { icon: Twitter, name: "Twitter / X", label: "@dorm", href: "#", color: "text-blue-400" },
                            { icon: Instagram, name: "Instagram", label: "@dorm", href: "#", color: "text-pink-500" },
                            { icon: Linkedin, name: "LinkedIn", label: "Dorm", href: "#", color: "text-blue-600" },
                            { icon: MessageCircle, name: "Community", label: "Join Discord", href: "#", color: "text-indigo-500" },
                            { icon: Mail, name: "Email", label: "hello@dorm.com", href: "mailto:hello@dorm.com", color: "text-[#FF4500]" },
                        ].map((social, i) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-3xl bg-card border border-white/5 hover:border-[#FF4500]/50 transition-all text-center"
                            >
                                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <social.icon className={`w-8 h-8 ${social.color}`} />
                                </div>
                                <h3 className="text-lg font-bold mb-1">{social.name}</h3>
                                <p className="text-muted-foreground text-sm">{social.label}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
