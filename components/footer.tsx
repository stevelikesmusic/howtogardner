import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-800 py-12 text-white" id="contact">
      <div className="container mx-auto px-5">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="mb-4 text-3xl font-bold">
              Ready to Strengthen Your Engineering Team?
            </h3>
            <p className="mb-8 text-lg opacity-80">
              Let&apos;s start with a conversation about your current
              challenges. No sales pitch—just genuine curiosity about how I can
              help.
            </p>
            <Link
              className="inline-block rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700"
              href="mailto:steve@howtogardner.com"
            >
              Schedule a Free Assessment
            </Link>
          </div>
          <p className="text-sm opacity-60">
            &copy; 2025 Steve Gardner | howtogardner.com. Building better teams
            through service-oriented leadership.
          </p>
        </div>
      </div>
    </footer>
    // <footer className="bg-indigo-950 text-white">
    //   <div className="container mx-auto px-4 py-12">
    //     <div className="grid gap-8 md:grid-cols-3">
    //       {/* Company Info */}
    //       <div className="md:col-span-2">
    //         <div className="mb-4 flex items-center space-x-2">
    //           <span className="text-xl font-bold">Stephen Gardner</span>
    //         </div>
    //         <p className="mb-6 max-w-md text-slate-300">
    //           Fractional CTO and engineering consultant helping companies scale
    //           their technology and build high-performing teams.
    //         </p>
    //         <div className="flex space-x-4">
    //           <Link
    //             className="text-slate-400 transition-colors hover:text-white"
    //             href="https://linkedin.com/in/gardnersj"
    //             target="_blank"
    //           >
    //             <Linkedin className="h-5 w-5" />
    //           </Link>
    //           <Link
    //             className="text-slate-400 transition-colors hover:text-white"
    //             href="https://github.com/stevelikesmusic"
    //             target="_blank"
    //           >
    //             <Github className="h-5 w-5" />
    //           </Link>
    //         </div>
    //       </div>

    //       {/* Quick Links */}
    //       <div>
    //         <h3 className="mb-4 font-semibold">Quick Links</h3>
    //         <ul className="space-y-2">
    //           <li>
    //             <Link
    //               className="text-slate-300 transition-colors hover:text-white"
    //               href="/about"
    //             >
    //               About
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               className="text-slate-300 transition-colors hover:text-white"
    //               href="/blog"
    //             >
    //               Blog
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               className="text-slate-300 transition-colors hover:text-white"
    //               href="/contact"
    //             >
    //               Contact
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-600 pt-8 md:flex-row">
    //       <p className="text-sm text-slate-400">
    //         ©{new Date().getFullYear()} Stephen Gardner. All rights reserved.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
  );
}
