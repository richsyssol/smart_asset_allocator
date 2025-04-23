import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  LineChart,
  Shield,
  PieChart,
  Landmark,
  HandCoins,
  TrendingUp,
  Briefcase,
  Gem,
  Wallet,
} from "lucide-react";

import BriefSection from "./MutualFunds/BriefSection";

const MutualFunds = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Product Basket Section - Matches the image */}
      <BriefSection />

      {/* Additional Content Sections */}

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="max-w-2xl">
            <h1 className="text-4xl font-bold sm:text-5xl mb-4">
              Invest in Mutual Funds
            </h1>
            <p className="text-xl mb-8">
              Diversify your portfolio with professionally managed funds
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg"
            >
              Explore Funds
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Wide Selection",
                description: "Choose from 1000+ funds across categories",
                icon: <PieChart className="h-10 w-10" />,
              },
              {
                title: "Expert Research",
                description: "Access our curated fund recommendations",
                icon: <LineChart className="h-10 w-10" />,
              },
              {
                title: "Low Investment",
                description: "Start with as little as ₹500 per month",
                icon: <Landmark className="h-10 w-10" />,
              },
              {
                title: "Tax Benefits",
                description: "ELSS funds with tax savings under 80C",
                icon: <Shield className="h-10 w-10" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fund Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Fund Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from various mutual fund categories based on your financial
              goals and risk appetite
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                id: 1,
                name: "Equity Funds",
                description: "Invest primarily in stocks for long-term growth",
                fundsCount: 342,
                returns: "12-15% avg. returns",
              },
              {
                id: 2,
                name: "Debt Funds",
                description:
                  "Lower risk funds investing in bonds and fixed income",
                fundsCount: 187,
                returns: "7-9% avg. returns",
              },
              {
                id: 3,
                name: "Hybrid Funds",
                description: "Balanced mix of equity and debt instruments",
                fundsCount: 156,
                returns: "9-11% avg. returns",
              },
              {
                id: 4,
                name: "ELSS Funds",
                description: "Tax-saving funds with 3-year lock-in period",
                fundsCount: 45,
                returns: "12-14% avg. returns",
              },
            ].map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{category.fundsCount} funds</span>
                    <span>{category.returns}</span>
                  </div>
                </div>
                <div className="bg-blue-50 px-6 py-3">
                  <button className="text-blue-600 font-medium w-full text-left flex items-center justify-between">
                    View Funds <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to start your investment journey?
          </h2>
          <p className="text-xl mb-8">Open your account in just 5 minutes</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
          >
            Invest Now
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default MutualFunds;
