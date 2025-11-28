import "./chart.scss";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useState } from "react";

const Chart = () => {
  const [range, setRange] = useState("daily");

  const dataSets = {
    daily: [
      { name: "Mon", exercises: 30, calories: 200 },
      { name: "Tue", exercises: 45, calories: 250 },
      { name: "Wed", exercises: 20, calories: 150 },
      { name: "Thu", exercises: 60, calories: 300 },
      { name: "Fri", exercises: 40, calories: 220 },
      { name: "Sat", exercises: 35, calories: 210 },
      { name: "Sun", exercises: 55, calories: 260 },
    ],
    weekly: [
      { name: "W1", exercises: 210, calories: 1400 },
      { name: "W2", exercises: 250, calories: 1600 },
      { name: "W3", exercises: 180, calories: 1100 },
      { name: "W4", exercises: 300, calories: 1900 },
    ],
    monthly: [
      { name: "Jan", exercises: 900, calories: 6000 },
      { name: "Feb", exercises: 700, calories: 5200 },
      { name: "Mar", exercises: 1100, calories: 7000 },
      { name: "Apr", exercises: 950, calories: 6300 },
    ],
    yearly: [
      { name: "2022", exercises: 9000, calories: 60000 },
      { name: "2023", exercises: 11000, calories: 74000 },
      { name: "2024", exercises: 12500, calories: 80000 },
    ],
  };

  return (
    <div className="chart beautiful-chart">
      <div className="header">
        <h2>Activity Overview</h2>

        <select
          className="filter"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Gradient defs */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="lineBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3f8cff" stopOpacity="1" />
            <stop offset="100%" stopColor="#3f8cff" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="lineOrange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff8c42" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff8c42" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={dataSets[range]}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eaeaea" />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              backgroundColor: "#ffffffef",
              border: "1px solid #eee",
            }}
          />

          <Line
            type="monotone"
            dataKey="exercises"
            stroke="url(#lineBlue)"
            strokeWidth={4}
            dot={{ r: 5, strokeWidth: 2, stroke: "#3f8cff" }}
            activeDot={{ r: 7 }}
          />

          <Line
            type="monotone"
            dataKey="calories"
            stroke="url(#lineOrange)"
            strokeWidth={4}
            dot={{ r: 5, strokeWidth: 2, stroke: "#ff8c42" }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
