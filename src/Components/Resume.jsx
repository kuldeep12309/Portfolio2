import React from "react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-10 bg-white shadow-lg rounded-xl  text-gray-900">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="font-bold">Kuldeep Gupta</h1>

          <p className="text-blue-600 underline mt-1">
            <a href="https://github.com/kuldeep12309" target="_blank">GitHub</a> |
            <a href="https://portfolio-rho-rosy-kyenn36oir.vercel.app/" target="_blank" className="ml-2">Portfolio</a>
          </p>
        </div>

        <div className="text-right mt-4 md:mt-0">
          <p><strong>Email:</strong> kuldeepgupta8800@gmail.com</p>
          <p><strong>Mobile:</strong> +91 8418835697</p>
        </div>
      </div>

      <hr className="my-5" />

      {/* EDUCATION */}
      <section className="mb-6">
        <h3 className="font-semibold border-b pb-1">EDUCATION</h3>

        <div className="flex justify-between mt-2">
          <p><strong>Bachelor of Commerce (B.Com)</strong></p>
          <p>Final Year</p>
        </div>
      </section>

      {/* SKILLS SUMMARY */}
      <section className="mb-6">
        <h3 className="font-semibold border-b pb-1">SKILLS SUMMARY</h3>

        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Languages:</strong> HTML5, CSS3, JavaScript (ES6+), Python</li>
          <li><strong>Frontend:</strong> React.js, Redux Toolkit, Tailwind CSS</li>
          <li><strong>Backend:</strong> Django, Django REST Framework</li>
          <li><strong>Database:</strong> MySQL, SQLite</li>
          <li><strong>Tools:</strong> Git, GitHub, Postman, Vercel</li>
          <li><strong>React Hooks:</strong> useState, useEffect, Context API</li>
          <li><strong>Soft Skills:</strong> Communication, Teamwork, Problem Solving</li>
        </ul>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="mb-6">
        <h3 className="font-semibold border-b pb-1">WORK EXPERIENCE</h3>

        <div className="mt-3">
          <div className="flex justify-between">
            <h4 className="font-bold">Full Stack Developer (Trainee) — Universal CodeBox</h4>
            <p>April 2024 – Present</p>
          </div>

          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Developed full-stack web applications using React.js and Django REST.</li>
            <li>Created and integrated REST APIs for frontend–backend communication.</li>
            <li>Developed dynamic UI using React Hooks and Tailwind CSS.</li>
            <li>Managed backend logic with Django ORM and MySQL.</li>
            <li>Used Git & GitHub for source control and Vercel for deployment.</li>
            <li>Tested APIs using Postman for smooth integration.</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-6">
        <h3 className="font-semibold border-b pb-1">PROJECTS</h3>

        <div className="mt-3 space-y-4">

          <div>
            <h4 className="font-semibold">1. E-Commerce Website (React + Redux Toolkit)</h4>
            <p className="ml-6 text-gray-700">
              Developed an e-commerce app using React, Redux Toolkit and REST API. Deployed on Vercel.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">2. Portfolio Website (React + Animations)</h4>
            <p className="ml-6 text-gray-700">
              Built a modern personal portfolio with smooth UI and animations using React.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">3. E-Commerce (React + Django REST + MySQL)</h4>
            <p className="ml-6 text-gray-700">
              Full-stack project with product APIs, cart system, and MySQL backend.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">4. REST API Project (DRF + MYSQL)</h4>
            <p className="ml-6 text-gray-700">
              Built CRUD APIs using Django REST Framework and MYSQL database.
            </p>
          </div>

        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="mb-6">
        <h3 className="font-semibold border-b pb-1">CERTIFICATES</h3>

        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Full Stack Developer Internship – Universal CodeBox</li>
          <li>Django REST API </li>
          <li>React + Redux Toolkit Training</li>
        </ul>
      </section>

    </div>
  );
};

export default Resume;
