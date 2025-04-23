import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Heart,
  Car,
  Bike,
  Plane,
  Home,
  Battery,
  Dog,
  Laptop,
  Briefcase,
  Truck,
  Building,
  Scale,
  Construction,
  Flame,
  Ship,
  ShoppingBag,
  Cog,
  FileText,
  RefreshCw,
} from "lucide-react";
import { Skeleton } from "antd";

// Helper function to capitalize first letter
const capitalizeFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const insuranceData = {
  generalInsurance: {
    personal: {
      health: {
        plans: [
          "My Health Care Plan",
          "Health Guard",
          "Extra Care Plus",
          "Criti Care",
          "Global Personal Guard",
          "Personal Guard",
        ],
        icon: "🩺",
      },
      car: {
        plans: ["Comprehensive", "Third Party", "Pay As You Drive"],
        icon: "🚗",
      },
      bike: {
        plans: ["Comprehensive", "Third Party"],
        icon: "🏍️",
      },
      travel: {
        plans: ["Individual Travel", "Family Travel", "Senior Citizen Travel"],
        icon: "✈️",
      },
      home: {
        plans: ["Home Shield", "Home Content Protect"],
        icon: "🏠",
      },
      ev: {
        plans: ["EV Comprehensive", "EV Third Party"],
        icon: "🔋",
      },
      pet: {
        plans: ["Dog Health Insurance", "Cat Health Insurance"],
        icon: "🐕",
      },
      cyber: {
        plans: ["Cyber Safe", "Cyber Insurance for Families"],
        icon: "💻",
      },
    },
    commercial: {
      employee: {
        plans: ["Group Health Insurance", "Workmen Compensation"],
        icon: "👨‍💼",
      },
      transit: {
        plans: ["Goods in Transit", "Marine Cargo"],
        icon: "🚛",
      },
      property: {
        plans: ["Fire Insurance", "Burglary Insurance"],
        icon: "🏢",
      },
      liability: {
        plans: ["Public Liability", "Professional Indemnity"],
        icon: "⚖️",
      },
      engineering: {
        plans: ["Contractor All Risk", "Erection All Risk"],
        icon: "🏗️",
      },
    },
    msme: {
      fire: {
        plans: ["Standard Fire Policy", "Industrial All Risk"],
        icon: "🔥",
      },
      marine: {
        plans: ["Inland Marine", "Marine Hull"],
        icon: "🚢",
      },
      shop: {
        plans: ["Shopkeeper Policy", "MSME Package Policy"],
        icon: "🛍️",
      },
      engineering: {
        plans: ["Boiler Insurance", "Machinery Breakdown"],
        icon: "⚙️",
      },
      liability: {
        plans: ["Product Liability", "Directors Liability"],
        icon: "📜",
      },
      miscellaneous: {
        plans: ["Business Interruption", "Money Insurance"],
        icon: "📦",
      },
      claimReg: {
        plans: ["Online Claim Registration"],
        icon: "📝",
      },
      renew: {
        plans: ["Policy Renewal"],
        icon: "🔄",
      },
    },
  },
};
const iconComponents = {
  health: Heart,
  car: Car,
  bike: Bike,
  travel: Plane,
  home: Home,
  ev: Battery,
  pet: Dog,
  cyber: Laptop,
  employee: Briefcase,
  transit: Truck,
  property: Building,
  liability: Scale,
  engineering: Construction,
  fire: Flame,
  marine: Ship,
  shop: ShoppingBag,
  engineeringEquipment: Cog,
  claimReg: FileText,
  renew: RefreshCw,
};

const Carousel = ({ items, loading, onItemClick, isPlanCarousel = false }) => {
  const carouselContainer = useRef();

  const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - container.offsetWidth / 2
        : container.scrollLeft + container.offsetWidth / 2;
    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative mb-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={() => navigation("left")}
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </motion.button>

      <div
        ref={carouselContainer}
        className="flex overflow-x-auto gap-4 py-4 scrollbar-hide px-2"
      >
        {!loading
          ? items.map((item) => {
              const IconComponent = iconComponents[item.id] || null;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onItemClick(item.id)}
                  className={`flex-shrink-0 ${
                    isPlanCarousel ? "w-56 h-40" : "w-48 h-32"
                  } rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all border-2 ${
                    item.isActive
                      ? "border-blue-500 bg-blue-50 shadow-md"
                      : "border-gray-100 bg-gray-50 hover:shadow-md"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {!isPlanCarousel && IconComponent && (
                    <IconComponent className="w-8 h-8 mb-2 text-blue-600" />
                  )}
                  <p className="text-center font-medium px-2 text-gray-800">
                    {item.name}
                  </p>
                  {isPlanCarousel && (
                    <p className="text-sm text-gray-500 mt-1">
                      {item.category}
                    </p>
                  )}
                </motion.div>
              );
            })
          : [1, 2, 3].map((item) => (
              <Skeleton
                key={item}
                className={`flex-shrink-0 ${
                  isPlanCarousel ? "w-56 h-40" : "w-48 h-32"
                } rounded-lg`}
                active
              />
            ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={() => navigation("right")}
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </motion.button>
    </div>
  );
};
function GeneralSection() {
  const [activeTab, setActiveTab] = useState("personal");
  const [openCategories, setOpenCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab.toLowerCase());
    setOpenCategories([]);
  };

  const handleCategorySelect = (category) => {
    setOpenCategories((prev) => {
      if (!prev.includes(category)) {
        return [category];
      }
      return [];
    });
  };

  const currentTabData = insuranceData.generalInsurance[activeTab];

  return (
    <section className="w-full bg-white rounded-2xl p-4 md:p-8 mb-20 shadow-md">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-bold text-2xl text-center mb-6 text-gray-800"
      >
        Discover Our Insurance Offerings
      </motion.h2>

      <div className="flex justify-center mb-8">
        <div className="flex bg-gray-100 p-1 rounded-lg">
          {["Personal", "Commercial", "MSME"].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === tab.toLowerCase()
                  ? "bg-white shadow-md text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Categories Carousel */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Select Category
        </h3>
        <Carousel
          items={Object.keys(currentTabData).map((key) => ({
            id: key,
            name: capitalizeFirstLetter(key),
            icon: currentTabData[key].icon,
            isActive: openCategories.includes(key),
          }))}
          loading={loading}
          onItemClick={handleCategorySelect}
        />
      </div>

      {/* Plans Carousels for each open category */}
      <AnimatePresence>
        {openCategories.map((category) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {capitalizeFirstLetter(category)} Plans
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleCategorySelect(category)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Minus className="w-5 h-5" />
                </motion.button>
              </div>
              <Carousel
                items={currentTabData[category].plans.map((plan) => ({
                  id: plan,
                  name: plan,
                  category: capitalizeFirstLetter(category),
                }))}
                loading={loading}
                onItemClick={(plan) => {
                  console.log("Selected plan:", plan);
                }}
                isPlanCarousel
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
}

export default GeneralSection;
