"use client";

import { client } from "@/sanity/lib/client";
import { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    tableNo: "",
    noOfPersons: "",
    dateTime: "",
    contactNumber: "",
    email: "",
    specialRequests: "",
    reservationType: "Dine-in",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await client.create({
        _type: "reservation",
        customerName: formData.customerName,
        tableNo: parseInt(formData.tableNo), // Convert to number
        noOfPersons: parseInt(formData.noOfPersons), // Convert to number
        dateTime: new Date(formData.dateTime).toISOString(), // Convert to ISO string format
        contactNumber: formData.contactNumber,
        email: formData.email,
        specialRequests: formData.specialRequests,
        reservationType: formData.reservationType,
      });
      alert("Reservation successful!");
      setFormData({
        customerName: "",
        tableNo: "",
        noOfPersons: "",
        dateTime: "",
        contactNumber: "",
        email: "",
        specialRequests: "",
        reservationType: "Dine-in",
      });
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("Error submitting reservation.");
    }
    console.log(formData);
  };

  return (
    <div className="max-w-screen-lg mx-auto bg-white p-6 rounded-lg shadow-md my-5">
      <h2 className="text-2xl font-bold mb-4">Table Reservation</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="number"
          name="tableNo"
          placeholder="Table No"
          value={formData.tableNo}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="number"
          name="noOfPersons"
          placeholder="No of Persons"
          value={formData.noOfPersons}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <textarea
          name="specialRequests"
          placeholder="Special Requests (Optional)"
          value={formData.specialRequests}
          onChange={handleChange}
          className="w-full p-2 border rounded-md col-span-1 sm:col-span-2"
        ></textarea>
        <select
          name="reservationType"
          value={formData.reservationType}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="Dine-in">Dine-in</option>
          <option value="Event">Special Event</option>
        </select>
      </form>
      <div className="flex justify-center items-center my-5">
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          onClick={handleSubmit}
        >
          Reserve Table
        </button>
      </div>
    </div>
  );
};

export default ReservationForm;
