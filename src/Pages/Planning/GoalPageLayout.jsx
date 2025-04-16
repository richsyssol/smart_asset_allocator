import React from "react";
import { motion } from "framer-motion";
import { goalsMap } from "../../constants/goals";
import GoalSidebar from "./GoalSidebar";

// Unsplash image URLs for each goal type
const goalImages = {
  "child-education":
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "child-wedding":
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "dream-home":
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "dream-car":
    "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "dream-vacation":
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80",
  "family-protection":
    "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  custom:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
};

function GoalPageLayout({ data }) {
  const imageSrc = goalImages[data.id] || goalImages["custom"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4 }}
      className="mt-30 grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto"
    >
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-8">
        <GoalHeader
          title={data.title}
          subtitle={data.subtitle}
          tagline={data.tagline}
          image={imageSrc}
        />
        <GoalAbout aboutContent={data.aboutContent} />
        <GoalFeatures features={data.features} />
        <GoalWhyUs points={data.whyUsPoints} />
      </div>

      {/* Sidebar */}
      <div>
        <GoalSidebar
          links={data.sidebarLinks.goals}
          downloads={data.sidebarLinks.downloads}
        />
      </div>
    </motion.div>
  );
}

export default GoalPageLayout;

export const GoalHeader = ({ title, subtitle, tagline, image }) => (
  <div className="relative rounded-xl overflow-hidden shadow-lg">
    <div className="absolute inset-0 bg-black/40 z-10" />
    <img src={image} alt={title} className="w-full h-96 object-cover" />
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {title}
      </motion.h1>
      <motion.h2
        className="text-xl md:text-2xl text-gray-100 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {subtitle}
      </motion.h2>
      <motion.p
        className="text-lg text-gray-200 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {tagline}
      </motion.p>
    </div>
  </div>
);

export const GoalAbout = ({ aboutContent }) => (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h3 className="text-2xl font-semibold text-gray-800">About This Goal</h3>
      <p className="text-gray-700 text-lg leading-relaxed">{aboutContent}</p>
    </motion.div>
  </div>
);

export const GoalFeatures = ({ features }) => (
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 md:p-8">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-gray-800">Key Features</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700">{feature}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </div>
);

export const GoalWhyUs = ({ points }) => (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-semibold text-gray-800">Why Choose Us</h3>
      <ul className="space-y-4">
        {points.map((point, index) => (
          <motion.li
            key={index}
            className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 rounded-r hover:bg-blue-100 transition-colors"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-1">
                {index + 1}
              </div>
              <p className="text-gray-700">{point}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </div>
);
