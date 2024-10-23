import Navbar from "@/components/Navbar";
import { contactEmail, siteName } from "@/data/server-data";

export default function () {
  return (
    <div>
      <Navbar hideAbout={true} />
      <div
        className="container mx-auto p-6 border  my-10"
        style={{
          backgroundColor: "#C4E1F6",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to <span className="font-bold">{siteName}! </span>
          <br />
          <br />
          At <span className="font-bold">{siteName}</span>, we are passionate
          about all things technology. Our mission is to empower readers with
          in-depth, easy-to-understand technical blogs that demystify complex
          concepts and keep you up to date with the latest trends in the tech
          world. Whether you’re a seasoned developer, a curious beginner, or
          someone interested in the ever-evolving landscape of technology,
          you’ll find valuable insights and practical advice here.
        </p>
        <p className="text-lg mb-6">
          Our team of tech enthusiasts aims to demystify complex concepts and
          keep you informed about the latest trends in the tech world.
        </p>
        <h2 className="text-2xl font-semibold mt-6">What We Cover</h2>
        <ul className="list-disc ml-6 mt-2">
          <li className="my-1">
            <span className="font-semibold">Programming Languages:</span> From
            Python to JavaScript, we provide tutorials, best practices, and tips
            for mastering coding.
          </li>
          <li className="my-1">
            <span className="font-semibold"> Web Development: </span> Explore
            articles on front-end and back-end technologies, frameworks, and
            tools to help you build stunning websites.
          </li>
          <li className="my-1">
            <span className="font-semibold">Software Development:</span> Gain
            insights into software design, methodologies, and the tools that
            drive innovation in the industry
          </li>
          <li className="my-1">
            <span className="font-semibold"> Emerging Technologies:</span> Stay
            informed about AI, machine learning, blockchain, and other
            cutting-edge technologies shaping our future.
          </li>
          <li className="my-1">
            <span className="font-semibold">
              {" "}
              Tips & Tricks Discover productivity hacks:
            </span>{" "}
            software recommendations, and resources to enhance your tech skills.
          </li>

          <li className="my-1">
            <span className="font-semibold">Miscellaneous:</span> Exploring
            Miscellaneous Topics in Technology
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">Help us Improve</h2>
        <p className="text-lg mt-2">
          We value your feedback! Contact us at{" "}
          <span className="font-bold">{contactEmail}</span>
        </p>

        <p className="text-lg mt-5">
          <a href="/">
            <button className="bg-transparent hover:bg-yellow-200 text-yellow-600 font-semibold hover:text-black py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
              Back to homepage
            </button>
          </a>
        </p>
      </div>
    </div>
  );
}
