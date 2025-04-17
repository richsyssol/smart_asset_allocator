import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Award,
  TrendingUp,
  Star,
  HeartPulse,
  PiggyBank,
  BadgeCheck,
  ChevronRight,
  Zap,
  Gem,
  ShieldCheck,
} from "lucide-react";

const LifeInsurancePage = () => {
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
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const insurancePlans = [
    {
      title: "Term Plans",
      description: "Affordable pure protection plans with high coverage",
      benefits: [
        "₹11 Cr Life Cover @₹501/month*",
        "Tax benefits under 80C & 10(10D)",
        "Flexible payout options",
      ],
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      tags: ["best seller"],
      color: "blue",
    },
    {
      title: "Term + Wealth Plans",
      description: "Protection with wealth creation benefits",
      benefits: [
        "₹1 Cr Life Cover + 276.4% Returns",
        "Benchmark beating performance",
        "Flexible premium payment terms",
      ],
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      tags: ["trending", "award winning"],
      color: "green",
    },
    {
      title: "Guaranteed Return Plans",
      description: "Predictable returns with capital protection",
      benefits: [
        "₹47 Lakh+ Guaranteed Returns",
        "Tax-free maturity benefits*",
        "Flexible premium payment options",
      ],
      icon: <BadgeCheck className="h-6 w-6 text-purple-600" />,
      image:
        "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      tags: [],
      color: "purple",
    },
    {
      title: "Health Plans/ULPs",
      description: "Health coverage with investment benefits",
      benefits: [
        "276.4% Returns (Benchmark:16.57%)",
        "0 LTCO tax*",
        "Comprehensive health riders available",
      ],
      icon: <HeartPulse className="h-6 w-6 text-red-600" />,
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      tags: ["trending"],
      color: "red",
    },
    {
      title: "Health Plans",
      description: "Comprehensive health protection solutions",
      benefits: [
        "₹20 Lakh Surgery Cover",
        "Market linked returns",
        "Cashless hospitalization",
      ],
      icon: <Star className="h-6 w-6 text-yellow-500" />,
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      tags: ["award winning"],
      color: "yellow",
    },
    {
      title: "Retirement Plans",
      description: "Secure your golden years with regular income",
      benefits: [
        "Build corpus with top rated funds",
        "Guaranteed pension options",
        "Tax benefits on contributions",
      ],
      icon: <PiggyBank className="h-6 w-6 text-indigo-600" />,
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      tags: ["best seller"],
      color: "indigo",
    },
  ];

  const getTagColor = (tag) => {
    switch (tag) {
      case "trending":
        return "bg-orange-100 text-orange-800";
      case "award winning":
        return "bg-blue-100 text-blue-800";
      case "best seller":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTagIcon = (tag) => {
    switch (tag) {
      case "trending":
        return <TrendingUp className="h-3 w-3 mr-1" />;
      case "award winning":
        return <Award className="h-3 w-3 mr-1" />;
      case "best seller":
        return <Star className="h-3 w-3 mr-1" />;
      default:
        return null;
    }
  };

  const getColorClass = (color) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 border-blue-100";
      case "green":
        return "bg-green-50 border-green-100";
      case "purple":
        return "bg-purple-50 border-purple-100";
      case "red":
        return "bg-red-50 border-red-100";
      case "yellow":
        return "bg-yellow-50 border-yellow-100";
      case "indigo":
        return "bg-indigo-50 border-indigo-100";
      default:
        return "bg-gray-50 border-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-20 from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Enhanced Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
              <ShieldCheck className="h-4 w-4 mr-2" />
              Financial Protection
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Life Insurance Plans
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of comprehensive insurance solutions to
              protect what matters most
            </p>
          </motion.div>

          {/* Benefits Ribbon */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center">
                <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Why choose our insurance plans?
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
                <div className="flex items-center text-sm">
                  <Gem className="h-4 w-4 text-blue-500 mr-2" />
                  <span>Trusted by 5M+ customers</span>
                </div>
                <div className="flex items-center text-sm">
                  <Award className="h-4 w-4 text-green-500 mr-2" />
                  <span>15+ industry awards</span>
                </div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-purple-500 mr-2" />
                  <span>Market-leading returns</span>
                </div>
                <div className="flex items-center text-sm">
                  <Shield className="h-4 w-4 text-red-500 mr-2" />
                  <span>99.3% claim settlement</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {insurancePlans.map((plan, index) => (
              <motion.div
                key={index}
                // variants={itemVariants}
                whileHover="hover"
                variants={cardHoverVariants}
                className={`rounded-xl overflow-hidden border ${getColorClass(
                  plan.color
                )}`}
              >
                {/* Image with overlay */}
                <div className="relative h-48">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Tags */}
                  <div className="absolute top-3 right-3 flex flex-wrap gap-2">
                    {plan.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTagColor(
                          tag
                        )}`}
                      >
                        {getTagIcon(tag)}
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start mb-4">
                    <div
                      className={`flex-shrink-0 p-2 rounded-lg ${getColorClass(
                        plan.color
                      )} mr-4`}
                    >
                      {plan.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {plan.title}
                      </h2>
                      <p className="text-gray-600 mt-1">{plan.description}</p>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <ul className="space-y-2 mb-6">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              plan.color === "yellow"
                                ? "bg-yellow-500"
                                : `bg-${plan.color}-500`
                            }`}
                          />
                        </div>
                        <span className="ml-2 text-sm text-gray-700">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center justify-center px-4 py-2 rounded-lg ${
                      plan.color === "yellow"
                        ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                        : `bg-${plan.color}-500 hover:bg-${plan.color}-600 text-white`
                    } font-medium transition-colors`}
                  >
                    Get Details
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ/Additional Info Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-white rounded-xl shadow-sm p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Common Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  What's the right coverage amount?
                </h4>
                <p className="text-gray-600 text-sm">
                  A good rule of thumb is 10-15 times your annual income. Our
                  advisors can help customize this based on your specific needs.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  How are claims processed?
                </h4>
                <p className="text-gray-600 text-sm">
                  We have a 48-hour quick claim process with 99.3% settlement
                  ratio. Most claims are processed within 7 working days.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Can I change my plan later?
                </h4>
                <p className="text-gray-600 text-sm">
                  Yes, most plans allow riders and coverage enhancements. Our
                  team can help modify your plan as your needs evolve.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Are there tax benefits?
                </h4>
                <p className="text-gray-600 text-sm">
                  Premiums qualify for deduction under Section 80C and maturity
                  benefits are tax-free under Section 10(10D) as per current tax
                  laws.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Disclaimer */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <p className="text-xs text-gray-500 max-w-3xl mx-auto">
              *Terms and conditions apply. Insurance cover is available under
              the mentioned products. The premium paid in Unit Linked Insurance
              Plans (ULIPs) is subject to investment risks associated with
              capital markets and the NAVs of the units may go up or down based
              on the performance of fund and factors influencing the capital
              market and the insured is responsible for his/her decisions. Past
              performance is not indicative of future performance. Please read
              the sales brochure carefully before concluding a sale.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LifeInsurancePage;
