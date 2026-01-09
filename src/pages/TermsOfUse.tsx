import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { motion } from "framer-motion";

const TermsOfUse = () => {
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of <span className="text-primary">Use</span></h1>
                        <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold mb-8">Last Updated: January 9, 2026</p>
                    </motion.div>

                    <div className="prose prose-invert max-w-none space-y-12 text-muted-foreground leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                            <p>
                                By accessing or using the Dorm platform, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to all of these terms, do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Eligibility</h2>
                            <p>
                                Our services are intended primarily for students, faculty, and staff of recognized tertiary institutions. By creating an account, you represent and warrant that you meet our eligibility requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts</h2>
                            <p>
                                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Platform Rules & Conduct</h2>
                            <p>
                                When using Dorm, you agree not to:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Violate any local, state, or national laws.</li>
                                <li>Post false, misleading, or fraudulent marketplace listings.</li>
                                <li>Interfere with the security or integrity of campus elections.</li>
                                <li>Harass, abuse, or harm other users.</li>
                                <li>Attempt to bypass our secure escrow or payment systems.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Marketplace Transactions</h2>
                            <p>
                                Dorm provides a platform for student-to-student commerce. While we facilitate secure transactions through our escrow system, users are responsible for verifying the quality and condition of items traded.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
                            <p>
                                The Dorm platform, including its logo, design, and content, is protected by intellectual property laws. You are granted a limited, non-exclusive license to use the platform for personal, non-commercial purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                            <p>
                                Dorm is provided "as is" without any warranties. To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">8. Termination</h2>
                            <p>
                                We reserve the right to suspend or terminate your account at our sole discretion if we believe you have violated these Terms of Use or engaged in conduct harmful to the community.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact</h2>
                            <p>
                                For any questions regarding these Terms, please contact us at <a href="mailto:support@dorm.com" className="text-primary hover:underline">support@dorm.com</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfUse;
