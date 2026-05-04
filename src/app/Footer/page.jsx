import Link from "next/link";
import Image from "next/image";
import foot from "../../../assets/3263.jpg"

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-gray-100 dark:border-white/5 bg-white dark:bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={foot}
                alt="pixgen logo"
                width={32}
                height={32}
                className="rounded-lg shadow-sm"
              />
              <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
               Summer.
              </h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
              Create production-ready AI visuals in seconds. Built for speed and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-row gap-16 md:justify-center">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-5">
                Platform
              </h3>
              <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                <li><Link href="/generate" className="hover:text-indigo-500 transition-colors">Generate</Link></li>
                <li><Link href="/all-photos" className="hover:text-indigo-500 transition-colors">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-5">
                Company
              </h3>
              <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                <li><Link href="/about" className="hover:text-indigo-500 transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-indigo-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Legal Links (Desktop: Right aligned) */}
          <div className="flex flex-col md:items-end gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-2">
              Legal
            </h3>
            <div className="flex flex-col md:items-end gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
              <Link href="/privacy" className="hover:text-indigo-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-indigo-500 transition-colors">Terms of Service</Link>
            </div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </nav>
</footer>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-px w-full bg-gray-100 dark:bg-white/5 mb-8" />

        {/* Bottom Section - Clean & Centered */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            Built by Creators <span className="h-1 w-1 rounded-full bg-indigo-500" />
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-400">
            @2026 Summer. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;