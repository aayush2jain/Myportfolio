"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState, useMemo,use } from "react";
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

export default function VisitorPage() {
  const [data, setData] = useState([]);
  const id = useParams().id;
  console.log("data", data);
  console.log("Visitor ID:", id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://portfolioback-kappa.vercel.app/getvisitor",
          { params: { id }, withCredentials: true }
        );
        setData(response.data.userDetails || []);
      } catch (err) {
        console.error("Error fetching visitor data:", err);
      }
    };
    fetchData();
  }, [id]);

  // ---- Daily Grouping ----
  const dailyData = useMemo(() => {
    const counts = {};
    data.forEach(v => {
      const date = v.visit_date.split("T")[0];
      counts[date] = (counts[date] || 0) + 1;
    });
    return Object.entries(counts).map(([date, visits]) => ({ date, visits }));
  }, [data]);

  // ---- Weekly Grouping ----
  const weeklyData = useMemo(() => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const counts = {};
    data.forEach(v => {
      const day = new Date(v.visit_date).getDay();
      counts[day] = (counts[day] || 0) + 1;
    });
    return Object.entries(counts).map(([day, visits]) => ({
      day: days[day],
      visits,
    }));
  }, [data]);

  // ---- Hourly Grouping (for current day only) ----
  const hourlyData = useMemo(() => {
    if (data.length === 0) return [];
    const today = new Date().toISOString().split("T")[0];
    const counts = {};
    data.forEach(v => {
      const date = v.visit_date.split("T")[0];
      if (date === today) {
        const hour = v.visit_time.split(":")[0]; // take hour part
        counts[hour] = (counts[hour] || 0) + 1;
      }
    });
    return Object.entries(counts).map(([hour, visits]) => ({
      hour: `${hour}:00`,
      visits,
    }));
  }, [data]);

  return (
    <>
    <nav className="fixed w-full top-0 flex justify-center items-center overflow-visible z-50 h-15 bg-[linear-gradient(to_bottom,_black,_#2e2e2e,_#666666)] opacity-60 backdrop-blur-xl">
        <h1 className="text-3xl font-bold tracking-wider text-white">
          <a href="/">PORTIGO</a>
        </h1>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-10 mx-5 bg-indigo-600 text-white text-md rounded-full hover:bg-indigo-700">
          <a href="/profile">PROFILE</a>
        </button>
        {/* <button className="absolute right-40 top-1/2 transform -translate-y-1/2 w-32 h-10 mx-5 bg-indigo-600 text-white text-md rounded-full hover:bg-indigo-700">
          <a href="/">HOME</a>
        </button> */}
      </nav>
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <h1 className="text-3xl ml-2 mt-10 font-bold col-span-2">Visitor Analysis</h1>

      {/* Daily */}
      <div className="shadow-lg rounded-2xl p-4 bg-white">
        <h2 className="text-lg font-semibold mb-2">Visits Per Day</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dailyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="visits" fill="#ff4d4d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Weekly */}
      <div className="shadow-lg rounded-2xl p-4 bg-white">
        <h2 className="text-lg font-semibold mb-2">Visits Per Weekday</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="visits" stroke="#ff4d4d" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Hourly (today only) */}
      <div className="shadow-lg rounded-2xl p-4 bg-white col-span-2">
        <h2 className="text-lg font-semibold mb-2">Visits Per Hour (Today)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={hourlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="visits" fill="#4d79ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    </>
  );
}
