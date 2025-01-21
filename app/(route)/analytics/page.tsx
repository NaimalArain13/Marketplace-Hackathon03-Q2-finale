"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import Navbar from "@/app/Component/header";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsDashboard = () => {
  const salesData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [1200, 1900, 3000, 5000, 2000, 3000],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const trafficData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Traffic",
        data: [300, 500, 700, 800],
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const popularProductsData = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Popularity",
        data: [200, 300, 400, 250],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allows custom height
    plugins: {
        legend: {
          position: "top" as const, // Explicitly cast to the allowed type
        },
      },
  };

  return (
    <>
    <Navbar />
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="bg-white p-4 rounded-lg shadow-lg h-[300px]">
          <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
          <div className="h-[200px]">
            <Bar data={salesData} options={chartOptions} />
          </div>
        </div>

        {/* Traffic Chart */}
        <div className="bg-white p-4 rounded-lg shadow-lg h-[300px]">
          <h2 className="text-xl font-semibold mb-4">User Traffic</h2>
          <div className="h-[200px]">
            <Line data={trafficData} options={chartOptions} />
          </div>
        </div>

        {/* Popular Products Chart */}
        <div className="bg-white p-4 rounded-lg shadow-lg h-[350px] col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Popular Products</h2>
          <div className="h-[250px]">
            <Bar data={popularProductsData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AnalyticsDashboard;