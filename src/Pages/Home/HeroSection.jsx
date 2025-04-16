import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [heroContent, setHeroContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Replace API call with dummy data
    const dummyData = [
      {
        image:
          "https://images.unsplash.com/photo-1553451166-232112bda6f6?q=80&w=2072&auto=format&fit=crop",
        title: "Expert Financial Planning",
        description:
          "Tailored investment strategies to maximize returns and minimize risks for sustainable financial growth.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop",
        title: "Comprehensive Risk Management",
        description:
          "Ensuring financial security with cutting-edge risk assessment and mitigation strategies.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?q=80&w=2070&auto=format&fit=crop",
        title: "Smart Asset Allocation",
        description:
          "Optimizing asset distribution to align with your long-term financial goals and market trends.",
      },
    ];

    setHeroContent(dummyData);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, heroContent]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
    );
  };

  if (heroContent.length === 0) return null;

  const { image, title, description } = heroContent[currentIndex];

  return (
    <div className="relative shadow-2xl w-full h-[550px] md:h-[650px] flex items-center justify-center text-white overflow-hidden mt-20">
      <motion.div
        key={image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/50"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></motion.div>

      <button onClick={prevImage} className="absolute left-10 md:left-20">
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <button onClick={nextImage} className="absolute right-10 md:right-20">
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        key={title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="md:mt-4 text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-6 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition duration-300">
            Book Your Consultation Today!
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
