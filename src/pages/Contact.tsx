import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle, Loader2, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const CONTACT_URL = "https://dorm-revamp-backend.onrender.com/api/support/contact";

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(4, "Subject must be at least 4 characters"),
    message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: FormData) => {
        try {
            const res = await fetch(CONTACT_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const body = await res.json();
            if (!res.ok) throw new Error(body.message || "Failed to send");
            setSubmitted(true);
            reset();
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : "Something went wrong";
            toast.error(`${msg}. You can also email us at hello@dorm.com.ng`);
        }
    };

    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="container mx-auto max-w-5xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Get in <span className="text-[#FF4500]">Touch</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Have a question, need support, or want to give feedback? Fill in the form and we'll get back to you.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-5 gap-10">
                        {/* Contact info sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-2 flex flex-col gap-6"
                        >
                            <div className="p-8 rounded-3xl bg-card border border-white/5">
                                <h2 className="text-xl font-bold mb-6">Contact Info</h2>
                                <div className="flex flex-col gap-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#FF4500]/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Mail className="w-5 h-5 text-[#FF4500]" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-foreground">Email Support</p>
                                            <a
                                                href="mailto:hello@dorm.com.ng"
                                                className="text-sm text-muted-foreground hover:text-[#FF4500] transition-colors break-all"
                                            >
                                                hello@dorm.com.ng
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-[#FF4500]/5 border border-[#FF4500]/10">
                                <h3 className="font-semibold mb-2">Response Time</h3>
                                <p className="text-sm text-muted-foreground">
                                    We typically respond within <strong className="text-foreground">24–48 hours</strong> on business days.
                                </p>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 }}
                            className="md:col-span-3"
                        >
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center p-12 rounded-3xl bg-card border border-white/5 gap-6"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                                        <CheckCircle className="w-10 h-10 text-green-500" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                                        <p className="text-muted-foreground">
                                            Thanks for reaching out. We'll get back to you within 24–48 hours.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-sm text-[#FF4500] hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="p-8 rounded-3xl bg-card border border-white/5 flex flex-col gap-5"
                                >
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-foreground">
                                                Full Name <span className="text-[#FF4500]">*</span>
                                            </label>
                                            <input
                                                {...register("name")}
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#FF4500]/50 transition-colors text-sm"
                                            />
                                            {errors.name && (
                                                <p className="text-xs text-red-400">{errors.name.message}</p>
                                            )}
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-foreground">
                                                Email Address <span className="text-[#FF4500]">*</span>
                                            </label>
                                            <input
                                                {...register("email")}
                                                type="email"
                                                placeholder="you@example.com"
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#FF4500]/50 transition-colors text-sm"
                                            />
                                            {errors.email && (
                                                <p className="text-xs text-red-400">{errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-foreground">
                                            Subject <span className="text-[#FF4500]">*</span>
                                        </label>
                                        <input
                                            {...register("subject")}
                                            placeholder="e.g. App support, Partnership, Bug report"
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#FF4500]/50 transition-colors text-sm"
                                        />
                                        {errors.subject && (
                                            <p className="text-xs text-red-400">{errors.subject.message}</p>
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-foreground">
                                            Message <span className="text-[#FF4500]">*</span>
                                        </label>
                                        <textarea
                                            {...register("message")}
                                            rows={5}
                                            placeholder="Describe your question or issue in detail..."
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#FF4500]/50 transition-colors text-sm resize-none"
                                        />
                                        {errors.message && (
                                            <p className="text-xs text-red-400">{errors.message.message}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="mt-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF4500] hover:bg-[#FF4500]/90 text-white font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Sending…
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
