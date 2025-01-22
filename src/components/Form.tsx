"use client";
import { ChangeEvent, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    zipCode: "",
    address1: "",
  });

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <form>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First name
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={() => handleChange}
            required
            className="w-[250px] sm:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={() => handleChange}
            required
            className="w-[250px] sm:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>

      {/* Repeat similar blocks for the rest of the fields */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={() => handleChange}
            required
            className="w-[250px] sm:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={() => handleChange}
            required
            className="w-[250px] sm:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Address
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.address1}
            onChange={() => handleChange}
            required
            className="w-[250px] sm:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Country
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.country}
            onChange={() => handleChange}
            required
            className="w-[250px] sm:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            City
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.city}
            onChange={() => handleChange}
            required
            className="w-[250px] sm:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Zip Code
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.zipCode}
            onChange={() => handleChange}
            required
            className="w-[250px] sm:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
