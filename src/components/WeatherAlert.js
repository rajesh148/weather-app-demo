import React, { useState } from "react";

const WeatherAlert = ({ onAddAlert }) => {
  const [condition, setCondition] = useState("");
  const [threshold, setThreshold] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAlert({ condition, threshold });
    setCondition("");
    setThreshold("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 sm:max-w-lg">
      <h2 className="text-2xl font-bold text-center">Add Weather Alert</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="Condition (e.g., rain)"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          placeholder="Threshold (e.g., 10mm)"
          className="w-full px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          Add Alert
        </button>
      </form>
    </div>
  );
};

export default WeatherAlert;
