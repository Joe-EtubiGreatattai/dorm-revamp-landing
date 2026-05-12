export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent-pink flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-xl text-foreground">Dorm</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Your Campus. One App.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Dorm. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="/terms-of-use" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="/support" className="hover:text-foreground transition-colors">Support</a>
            <a href="/delete-account" className="hover:text-foreground transition-colors">Delete Account</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
