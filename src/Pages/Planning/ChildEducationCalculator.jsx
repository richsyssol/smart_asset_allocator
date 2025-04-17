import { useState } from "react";
import { GraduationCap, Calculator, ChevronDown } from "lucide-react";

const ChildEducationCalculator = () => {
  // Configuration for ranges (easily modifiable)
  const rangeConfig = {
    years: { min: 0, max: 30, step: 1, defaultValue: 10 },
    cost: { min: 0, max: 100000000, step: 10000, defaultValue: 1000000 },
    inflation: { min: 0, max: 20, step: 0.5, defaultValue: 7 },
    savings: { min: 0, max: 100000000, step: 10000, defaultValue: 200000 },
    returnRate: { min: 0, max: 60, step: 0.5, defaultValue: 12 },
  };

  // State using range config
  const [yearsUntilEducation, setYearsUntilEducation] = useState(
    rangeConfig.years.defaultValue
  );
  const [currentEducationCost, setCurrentEducationCost] = useState(
    rangeConfig.cost.defaultValue
  );
  const [inflationRate, setInflationRate] = useState(
    rangeConfig.inflation.defaultValue
  );
  const [currentSavings, setCurrentSavings] = useState(
    rangeConfig.savings.defaultValue
  );
  const [expectedReturn, setExpectedReturn] = useState(
    rangeConfig.returnRate.defaultValue
  );

  // Calculate future cost and required savings
  const futureCost =
    currentEducationCost *
    Math.pow(1 + inflationRate / 100, yearsUntilEducation);
  const futureValueOfCurrentSavings =
    currentSavings * Math.pow(1 + expectedReturn / 100, yearsUntilEducation);
  const monthlySavingsRequired =
    ((futureCost - futureValueOfCurrentSavings) * (expectedReturn / 1200)) /
    (Math.pow(1 + expectedReturn / 1200, yearsUntilEducation * 12) - 1);

  // Format currency with Indian numbering system
  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Crore`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakh`;
    }
    return `₹${amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-26">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">
            <Calculator className="h-8 w-8 mr-2 text-blue-600" />
            CHILD EDUCATION PLANNER
          </h1>
          <p className="text-gray-600">
            Plan your child's educational future with our comprehensive
            calculator
          </p>
        </div>

        {/* Calculator Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-blue-50 p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
              Child Education Planning
            </h2>
            <p className="text-gray-600 mt-1">
              Calculate the investment needed for your child's higher education
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* Years Until Education */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                After how many years will your child begin higher studies?
                <span className="ml-2 font-semibold text-gray-900">
                  {yearsUntilEducation} years
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.years.min}
                max={rangeConfig.years.max}
                step={rangeConfig.years.step}
                value={yearsUntilEducation}
                onChange={(e) => setYearsUntilEducation(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{rangeConfig.years.min} year</span>
                <span>{rangeConfig.years.max} years</span>
              </div>
            </div>

            {/* Current Education Cost */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Current estimated cost of education
                <span className="ml-2 font-semibold text-gray-900">
                  {formatCurrency(currentEducationCost)}
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.cost.min}
                max={rangeConfig.cost.max}
                step={rangeConfig.cost.step}
                value={currentEducationCost}
                onChange={(e) =>
                  setCurrentEducationCost(Number(e.target.value))
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹0</span>
                <span>{formatCurrency(rangeConfig.cost.max)}</span>
              </div>
            </div>

            {/* Inflation Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Expected education inflation rate
                <span className="ml-2 font-semibold text-gray-900">
                  {inflationRate}%
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.inflation.min}
                max={rangeConfig.inflation.max}
                step={rangeConfig.inflation.step}
                value={inflationRate}
                onChange={(e) => setInflationRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{rangeConfig.inflation.min}%</span>
                <span>{rangeConfig.inflation.max}%</span>
              </div>
            </div>

            {/* Current Savings */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Current savings/investments
                <span className="ml-2 font-semibold text-gray-900">
                  {formatCurrency(currentSavings)}
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.savings.min}
                max={rangeConfig.savings.max}
                step={rangeConfig.savings.step}
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹0</span>
                <span>{formatCurrency(rangeConfig.savings.max)}</span>
              </div>
            </div>

            {/* Expected Return */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Expected rate of return on investments
                <span className="ml-2 font-semibold text-gray-900">
                  {expectedReturn}%
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.returnRate.min}
                max={rangeConfig.returnRate.max}
                step={rangeConfig.returnRate.step}
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{rangeConfig.returnRate.min}%</span>
                <span>{rangeConfig.returnRate.max}%</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Your Education Plan
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Future education cost
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {formatCurrency(futureCost)}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Years until education
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {yearsUntilEducation} years
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Current investment growth
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {formatCurrency(futureValueOfCurrentSavings)}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Monthly savings needed
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {formatCurrency(Math.abs(monthlySavingsRequired))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Us */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              About Us
            </h3>
            <p className="text-gray-600 text-sm">
              We provide financial planning tools to help you secure your
              child's educational future. Our calculators offer clear insights
              to make informed decisions.
            </p>
          </div>

          {/* Important Links */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Important Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                >
                  <ChevronDown className="h-4 w-4 mr-1" /> Education Planning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                >
                  <ChevronDown className="h-4 w-4 mr-1" /> Investment Options
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Need Help?
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              Contact our education planning specialists
            </p>
            <a
              href="mailto:education@financialplanner.com"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              education@financialplanner.com
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center text-xs text-gray-500">
          *Results are projections based on your inputs. Actual returns may
          vary. Consider consulting a financial advisor for personalized
          planning.
        </div>
      </div>
    </div>
  );
};

export default ChildEducationCalculator;
