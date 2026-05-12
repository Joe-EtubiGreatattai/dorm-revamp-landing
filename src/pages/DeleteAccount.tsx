import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { useState } from "react";

const DeleteAccount = () => {
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://dorm-revamp-backend.onrender.com/api/auth/request-data-deletion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, reason }),
            });

            const data = await response.json();

            if (response.ok) {
                toast({
                    title: "Request Submitted",
                    description: data.message,
                });
                setEmail("");
                setReason("");
            } else {
                toast({
                    title: "Error",
                    description: data.message || "Something went wrong. Please try again.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Could not connect to the server. Please check your internet connection.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background overflow-x-hidden text-foreground">
            <Navbar />
            <main className="pt-24 pb-20">
                <div className="container mx-auto max-w-4xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Delete <span className="text-primary">Account</span></h1>
                        <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold mb-8">Data Deletion Request Port</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8 text-muted-foreground"
                        >
                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">What happens after my request?</h2>
                                <p className="leading-relaxed">
                                    When you request to delete your account, we will initiate a 30-day "grace period." During this time, your profile will be deactivated, and your data will be hidden from other users. You can cancel your request at any time during this period by contacting support.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">What data is deleted?</h2>
                                <p className="leading-relaxed mb-4">
                                    Once processed, the following data will be permanently removed from our active servers:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Personal profile information (name, bio, university).</li>
                                    <li>Your posts, comments, and marketplace listings.</li>
                                    <li>Direct messages sent to other users.</li>
                                    <li>Associated media files and documents.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
                                <p className="leading-relaxed">
                                    Certain data, such as transaction logs for financial audits or legal compliance, may be retained for a longer period as required by law. This data will be anonymized and disconnected from your personal identity.
                                </p>
                            </section>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-accent/30 p-8 rounded-2xl border border-border/50"
                        >
                            <h3 className="text-xl font-bold mb-6">Submit Deletion Request</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Account Email Address</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your registered email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="bg-background/50 border-border"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="reason" className="block text-sm font-medium mb-2">Reason for leaving (Optional)</label>
                                    <Textarea
                                        id="reason"
                                        placeholder="Help us improve Dorm"
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                        rows={4}
                                        className="bg-background/50 border-border resize-none"
                                    />
                                </div>
                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        className="w-full h-12 text-lg font-semibold"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Submitting..." : "Request Data Deletion"}
                                    </Button>
                                    <p className="text-xs text-muted-foreground mt-4 text-center">
                                        By clicking the button above, you confirm that you want to delete your account and all associated data. This action is irreversible after 30 days.
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DeleteAccount;
