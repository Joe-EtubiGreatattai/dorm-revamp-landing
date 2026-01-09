import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Navbar />
            <main className="pt-24 pb-20">
                <div className="container mx-auto max-w-4xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy <span className="text-primary">Policy</span></h1>
                        <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold mb-8">Effective Date: January 9, 2026</p>
                    </motion.div>

                    <div className="prose prose-invert max-w-none space-y-12 text-muted-foreground leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                            <p>
                                At Dorm, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                            <p>
                                We collect information you provide directly to us when you create an account, such as your name, email address, university affiliation, and profile information. We also collect data related to your transactions in the marketplace and your participation in campus elections.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                            <p>
                                Your information is used to:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Provide and maintain our services.</li>
                                <li>Verify your student status for secure participation.</li>
                                <li>Process marketplace transactions and secure payments.</li>
                                <li>Facilitate transparent and secure campus elections.</li>
                                <li>Communicate with you about platform updates and community news.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your data. This includes encryption of sensitive information and secure escrow systems for marketplace transactions. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Services</h2>
                            <p>
                                We may use third-party service providers to facilitate our platform, such as payment processors. These third parties have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">6. Changes to This Policy</h2>
                            <p>
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@dorm.com" className="text-primary hover:underline">privacy@dorm.com</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
