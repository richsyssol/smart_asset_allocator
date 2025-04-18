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

const MutualFunds = () => {
  const products = [
    {
      icon: <LineChart size={24} className="text-blue-500" />,
      title: "Mutual Funds",
      description:
        "Diversified portfolio of stocks and bonds managed by professionals.",
    },
    {
      icon: <HandCoins size={24} className="text-green-500" />,
      title: "Loan Against MF",
      description:
        "Get loans using your mutual fund units as collateral without selling them.",
    },
    {
      icon: <TrendingUp size={24} className="text-purple-500" />,
      title: "Equity & ETFs*",
      description:
        "Direct equity investments and Exchange Traded Funds for seasoned investors.",
    },
    {
      icon: <Briefcase size={24} className="text-orange-500" />,
      title: "PMS",
      description:
        "Portfolio Management Services for high net-worth individuals.",
    },
    {
      icon: <Gem size={24} className="text-yellow-500" />,
      title: "Sov. Gold Bond*",
      description:
        "Sovereign Gold Bonds offering interest income plus gold price appreciation.",
    },
    {
      icon: <Wallet size={24} className="text-red-500" />,
      title: "NPS",
      description:
        "National Pension System for retirement planning with tax benefits.",
    },
  ];
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <LineChart size={32} className="text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Mutual Funds & Investment Products
            </h1>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  {product.icon}
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                </div>
                <p className="text-gray-600">{product.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-blue-600 font-medium flex items-center gap-1"
                >
                  Learn more <ArrowUpRight size={16} />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-blue-50 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              Investment Solutions Overview
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                  <Landmark className="text-blue-500" /> Wealth Creation
                </h3>
                <p className="text-gray-600">
                  Our diverse range of investment products helps you build
                  wealth through different market conditions. From mutual funds
                  to direct equities, we offer solutions for all risk appetites.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                  <PieChart className="text-blue-500" /> Portfolio
                  Diversification
                </h3>
                <p className="text-gray-600">
                  Spread your investments across asset classes including
                  equities, debt, gold, and more. Our experts can help you
                  create a balanced portfolio matching your financial goals.
                </p>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p>
                *ETFs and Sovereign Gold Bonds are subject to market risks.
                Please read all scheme related documents carefully.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

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
