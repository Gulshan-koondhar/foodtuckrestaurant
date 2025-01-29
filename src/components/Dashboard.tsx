"use client";
import { useState } from "react";
import {
  ChartBar,
  PieChart,
  UserCircle,
  Search,
  Bell,
  ShoppingCart,
} from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-white w-64 p-4 border-r transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static z-20`}
      >
        <h1 className="text-xl font-bold mb-6">Sedap</h1>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-3 text-gray-700">
            <ChartBar className="h-5 w-5" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700">
            <PieChart className="h-5 w-5" />
            <span>Order List</span>
          </a>
          {/* Add more sidebar links as needed */}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 bg-gray-50 border-b">
          <div className="flex items-center space-x-4">
            <button
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search here"
                className="pl-10 pr-4 py-2 bg-white border rounded-lg focus:ring focus:ring-blue-300"
              />
              <Search className="h-5 w-5 text-gray-500 absolute left-3 top-3" />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Bell className="h-6 w-6" />
            <ShoppingCart className="h-6 w-6" />
            <UserCircle className="h-8 w-8" />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 bg-gray-50 flex-1 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-medium">Total Orders</h3>
              <p className="text-2xl font-bold">75</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-medium">Total Delivered</h3>
              <p className="text-2xl font-bold">357</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-medium">Total Cancelled</h3>
              <p className="text-2xl font-bold">65</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-medium">Total Revenue</h3>
              <p className="text-2xl font-bold">$128</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-lg font-medium mb-4">Pie Chart</h3>
              {/* Placeholder for Pie Chart */}
              <div className="h-40 bg-gray-100 flex items-center justify-center rounded-lg">
                Pie Chart Here
              </div>
            </div>

            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-lg font-medium mb-4">Chart Order</h3>
              {/* Placeholder for Line Chart */}
              <div className="h-40 bg-gray-100 flex items-center justify-center rounded-lg">
                Line Chart Here
              </div>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="mt-6 bg-white p-6 shadow rounded-lg">
            <h3 className="text-lg font-medium mb-4">Total Revenue</h3>
            {/* Placeholder for Revenue Chart */}
            <div className="h-40 bg-gray-100 flex items-center justify-center rounded-lg">
              Revenue Chart Here
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
