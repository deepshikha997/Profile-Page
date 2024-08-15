import React, { useState } from "react";


const CountryDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [showStateDropdown, setShowStateDropdown] = useState(false);

  const countries = [
    { name: "United States", code: "USA", flag: "🇺🇸" },
    { name: "Germany", code: "GER", flag: "🇩🇪" },
    { name: "Italy", code: "ITA", flag: "🇮🇹" },
    { name: "China", code: "CHN", flag: "🇨🇳" },
  ];

  const states = {
    USA: ["California", "New York", "Texas"],
    GER: ["Bavaria", "Berlin", "Hamburg"],
    ITA: ["Lazio", "Lombardy", "Sicily"],
    CHN: ["Beijing", "Shanghai", "Guangdong"],
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country.code);
    setShowCountryDropdown(false);
    setSelectedState(""); // Reset the state selection
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setShowStateDropdown(false);
  };

  return (
    <div className="flex space-x-4">
      {/* Country Dropdown */}
      <div className="relative inline-block text-left">
        <button
          onClick={() => setShowCountryDropdown(!showCountryDropdown)}
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          <span className="me-2">
            {countries.find((country) => country.code === selectedCountry)?.flag}
          </span>
          {countries.find((country) => country.code === selectedCountry)?.name}
          <svg
            className="ms-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {showCountryDropdown && (
          <div className="absolute z-10 mt-2 w-44 rounded-md bg-white shadow-lg">
            <ul className="py-1 text-sm text-gray-700">
              {countries.map((country) => (
                <li key={country.code}>
                  <button
                    onClick={() => handleCountrySelect(country)}
                    className="flex w-full items-center px-4 py-2 text-left hover:bg-gray-100"
                  >
                    <span className="me-2">{country.flag}</span>
                    {country.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* State Dropdown */}
      <div className="relative inline-block text-left">
        <button
          onClick={() => setShowStateDropdown(!showStateDropdown)}
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          {selectedState ? selectedState : "Choose a state"}
          <svg
            className="ms-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {showStateDropdown && (
          <div className="absolute z-10 mt-2 w-44 rounded-md bg-white shadow-lg">
            <ul className="py-1 text-sm text-gray-700">
              {(states[selectedCountry] || []).map((state) => (
                <li key={state}>
                  <button
                    onClick={() => handleStateSelect(state)}
                    className="flex w-full items-center px-4 py-2 text-left hover:bg-gray-100"
                  >
                    {state}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDropdown;
