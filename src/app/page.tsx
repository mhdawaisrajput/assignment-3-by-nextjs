import Image from "next/image";
import image from "../../public/image.jpeg";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className="flex justify-between place-items-center mt-20 mx-32">
        {/* For text */}
        <div>
          <h1 className="text-[#03045E] text-4xl leading-normal">
            Hello, I&apos;m Muhammad Awais,
          </h1>
          <p className="text-[#03045E] text-6xl font-bold">
            Full Stack Web <br /> Developer
          </p>
          <h1 className="text-[#03045E] text-4xl leading-normal">
            Based in Pakistan.
          </h1>
        </div>

        {/* For Image */}
        <div>
          <Image
            src={image}
            alt="my pic"
            width={350}
            height={350}
            className="rounded-full shadow-lg shadow-[#03045E]"
          ></Image>
        </div>
      </section>

      {/* About section */}
      <section id="about">
        <h1 className="text-[#F7F197] text-7xl font-extrabold mt-36 mx-32">
          about.
        </h1>
        <div className="text-[#03045E] text-1.5xl leading-normal mt-12 mx-32">
          <p>
            Hi, I&apos;m Muhammad Awais 👋 I&apos;m currently expanding my skill set as
            part of the Applied GenAI Cloud Development Stack certification
            under the Governor of Sindh&apos;s I.T initiative. This program focuses
            on cutting-edge cloud technologies and AI integrations, equipping me
            with advanced development capabilities across:
            <br /> <br />
            Here&apos;s what I&apos;m working on:
          </p>

          <li>
            Frontend GUI Stack: Learning TypeScript, Next.js, React, Tailwind
            CSS, Shadcn UI, and Dev UI to create great user interfaces.
          </li>

          <li>
            Backend API Stack: Using Python, FastAPI, SQLModel, PostgreSQL, and
            Kafka to build powerful and efficient server-side systems.
          </li>

          <li>
            Backend Cloud Stack: Working with Docker, Kubernetes, Serverless,
            GitHub Actions, and Terraform to manage and deploy applications in
            the cloud.
          </li>

          <li>
            GenAI API Stack: Exploring OpenAI APIs, LangChain, Pinecone, and
            Transformers to integrate AI into applications.
          </li>

          <li>
            Custom GPT Stack: Learning to create custom AI models using OpenAI
            GPTs and OpenAPI.
          </li>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
      <h1 className="text-[#F7F197] text-7xl font-extrabold mt-36 mx-32">
        education.
      </h1>
      <div className="text-[#03045E] text-1.5xl mt-12 mx-32">
        <h1 className="text-2xl font-bold">University 🎓</h1>
        <br />
        <li>University: University of Sindh, Jamshoro.</li>
        <li>Degree: Bachelor&apos;s Degree.</li>
        <li>Field of Study: International Relation.</li>
        <li>Date: 2K22 to 2K25.</li>
      </div>

      <div className="text-[#03045E] text-1.5xl mt-12 mx-32">
        <h1 className="text-2xl font-bold">College 🏫</h1>
        <br />
        <li>College: Superior School and College Shahdadpur.</li>
        <li>Class: Intermediate.</li>
        <li>Field of Study: Pre-Medical.</li>
        <li>Date: 2K18 to 2K20.</li>
      </div>

      <div className="text-[#03045E] text-1.5xl mt-12 mx-32">
        <h1 className="text-2xl font-bold">School 📚</h1>
        <br />
        <li>School: Memon Academy Higher Secondary School, Shahdadpur.</li>
        <li>Class: Matriculation.</li>
        <li>Field of Study: Science.</li>
        <li>Date: 2K16 to 2K18.</li>
      </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h1 className="text-[#F7F197] text-7xl font-extrabold mt-36 mx-32">
          projects.
        </h1>
        <div className="text-[#03045E] text-1.5xl mt-12 mx-32">
          <li>
            <Link
              className="hover:border-b-2 border-[#03045E] font-bold"
              href="https://github.com/mhdawaisrajput/calculator-project"
              target="main"
            >
              Simple Calculator.
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-[#03045E] font-bold"
              href="https://github.com/mhdawaisrajput/number-guessing-game"
              target="main"
            >
              Number Guessing Game.
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-[#03045E] font-bold"
              href="https://github.com/mhdawaisrajput/Atm-Project"
              target="main"
            >
              ATM Machine.
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-[#03045E] font-bold"
              href="https://github.com/mhdawaisrajput/todos-list"
              target="main"
            >
              Todo List.
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-[#03045E] font-bold"
              href="https://github.com/mhdawaisrajput/currency-converter"
              target="main"
            >
              Currency Converter.
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-[#03045E] font-bold"
              href="https://github.com/mhdawaisrajput/word-counter"
              target="main"
            >
              Word Counter.
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-[#03045E] font-bold"
              href="https://github.com/mhdawaisrajput/typescript-45-questions"
              target="main"
              
            >
              TypeScript 45 Assignment.
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-[#03045E] font-bold"
              href="https://github.com/mhdawaisrajput/100-days-of-coding-challange"
              target="main"
            >
              100 Days of Coding Challange of TypeScript.
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-[#03045E] font-bold"
              href="https://github.com/mhdawaisrajput/hackathone-milestone-1-and-2"
              target="main"
            >
              Hackathone Milestone 1 and 2.
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-[#03045E] font-bold"
              href="https://github.com/mhdawaisrajput/hackathone-milestone-3"
              target="main"
            >
              Hackathone Milestone 3.
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-[#03045E] font-bold"
              href="https://github.com/mhdawaisrajput/hackathone-milestone-4"
              target="main"
            >
              Hackathone Milestone 4.
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-[#03045E] font-bold"
              href="https://github.com/mhdawaisrajput/hackathone-milestone-5"
              target="main"
            >
              Hackathone Milestone 5.
            </Link>
          </li>
        </div>
      </section>

      {/* Contact Saction */}
      <section id="contact">
        <h1 className="text-[#F7F197] text-7xl font-extrabold mt-36 mx-32 text-center">
          contact me!
        </h1>
        <div className="text-[#03045E] text-1.5xl mt-12 mx-auto max-w-md">
          <form action="action.php" className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7F197]"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7F197]"
                required
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone Number"
                name="number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7F197]"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email Subject"
                name="subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7F197]"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7F197] h-32"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#F7F197] text-[#03045E] font-bold py-3 rounded-lg hover:bg-[#FFD700] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}


