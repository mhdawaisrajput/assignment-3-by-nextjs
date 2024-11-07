// Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    // Footer Section
    <footer className="text[#03045E] bg-[#F7F197] py-6 mt-36 font-semibold max-w-screen-2xl mx-auto">
      <div className="mx-4 md:mx-32 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Muhammad Awais. All rights reserved.
        </div>
        <div className="hidden md:block space-x-6">
          <Link href="https://github.com/mhdawaisrajput" target="_blank">
            <span className="hover:underline">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mhdawaisrajput/"
            target="_blank"
          >
            <span className="hover:underline">LinkedIn</span>
          </Link>
          <Link href="https://twitter.com/mhdawaisrajput" target="_blank">
            <span className="hover:underline">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
