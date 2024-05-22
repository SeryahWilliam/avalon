import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto p-6 h-[66vh] flex flex-col md:flex-row items-center bg-gray-100">
        <div className="md:w-1/3 w-full mb-6 md:mb-0">
          <img
            src="/images/profile.jpeg"
            alt="Profile"
            className="rounded-md shadow-lg w-72 object-cover mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-2/3 w-full md:pl-8 text-center md:text-left">
          <h1 className="text-3xl font-semibold text-blue-800 mb-4">
            About Me
          </h1>
          <p className="text-gray-700 mb-4">
            Hi, I'm Seryah, a computer science student turned software engineer!
            I have successfully completed the General Assembly bootcamp, where I
            honed my skills in various programming languages and frameworks
            including Javascript, React, Python, Express etc. I am passionate
            about technology and constantly strive to learn new things. In my
            spare time, I enjoy working on personal projects, contributing to
            open source, and staying updated with the latest tech trends.
          </p>
          <p className="text-gray-700 mb-4">
            When I'm not coding, you can find me exploring new places, reading
            books on software development, or playing video games. I believe in
            continuous improvement and always look forward to challenging myself
            with new and exciting projects.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://github.com/SeryahWilliam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-600 text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default About;
