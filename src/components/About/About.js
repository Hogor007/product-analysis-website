import React from "react";
import logo from "../../assests/images/logo.png";

const About = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800 container mx-auto">
      <img src={logo} className="mx-auto my-4" alt="" />
      <h1 className="text-center text-4xl font-serif">BengalMeat</h1>
      <p className="w-2/4 mx-auto mt-8 font-sans">
        From the very beginning our core mission has been to bring the safest and best quality meat to your table. Every single product that leaves our factory goes through rigorous processes to uphold our commitment towards complete food safety and quality. :D
      </p>
    </div>
  );
};

export default About;
