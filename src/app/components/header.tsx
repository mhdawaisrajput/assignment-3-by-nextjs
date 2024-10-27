import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-around pt-8">
      {/* Left Side for Logo */}
      <div>
        <h1 className="text-[#03045E] font-bold text-2xl">Muhammmad Awais.</h1>
      </div>

      {/* Center For Navbar  */}
      <nav className="text-[#03045E]">
        <ul className="flex gap-x-8 font-semibold">
          <li>
            <Link href="#hero" className="hover:border-b-2 border-[#03045E]">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:border-b-2 border-[#03045E]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#education"
              className="hover:border-b-2 border-[#03045E]"
            >
              Education
            </Link>
            </li>
            <li>
            <Link
              href="#projects"
              className="hover:border-b-2 border-[#03045E]"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:border-b-2 border-[#03045E]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right Side For Icons */}
      <div className="flex gap-x-8">
        {/* LinkedIn icon */}
        <Link
          href="https://www.linkedin.com/in/mhdawaisrajput/"
          target="_blank"
        >
          <FaLinkedin style={{ color: "#03045E", fontSize: "1.5rem" }} />
        </Link>

        {/* GitHub icon */}
        <Link href="https://github.com/mhdawaisrajput" target="_blank">
          <FaGithub style={{ color: "#03045E", fontSize: "1.5rem" }} />
        </Link>

        {/* Twitter icon */}
        <Link href="https://x.com/mhdawaisrajput" target="_blank">
          <FaTwitter style={{ color: "#03045E", fontSize: "1.5rem" }} />
        </Link>
      </div>
    </header>
  );
}
