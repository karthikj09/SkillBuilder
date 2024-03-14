import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      {/* First Column */}
      <div>
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        Master DSA & Development
      </h1>
      <p className="py-4">
        Explore the world of Data Structures and Algorithms (DSA) and unlock the power to develop efficient and scalable software solutions.
      </p>
        {/* Social Media Icons */}
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaXTwitter size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>

      {/* Second Column*/}
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h2 className="font-medium text-gray-400">About Us</h2>
          <ul>
            <li className="py-2 text-sm">Our Story</li>
            <li className="py-2 text-sm">Our Team</li>
            <li className="py-2 text-sm">Mission & Vision</li>
            <li className="py-2 text-sm">Values</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-gray-400">Services</h2>
          <ul>
            <li className="py-2 text-sm">Consulting</li>
            <li className="py-2 text-sm">Development</li>
            <li className="py-2 text-sm">Training</li>
            <li className="py-2 text-sm">Support</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-gray-400">Contact</h2>
          <ul>
            <li className="py-2 text-sm">General Inquiries</li>
            <li className="py-2 text-sm">Partnerships</li>
            <li className="py-2 text-sm">Feedback</li>
            <li className="py-2 text-sm">Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
