const Footer = () => {
  return (
    <footer className="bg-[var(--primary-color)] text-gray-300">
      <div className="grid grid-cols-1 content-center max-w-6xl mx-auto px-6 py-12 border-t border-[var(--border-black)]">
        {/* Bottom Bar */}
        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-[var(--accent)]">codewithjelo</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
