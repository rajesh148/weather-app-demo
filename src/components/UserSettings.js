import React from "react";

const UserSettings = ({ alerts, onRemoveAlert }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 sm:max-w-lg">
      <h2 className="text-2xl font-bold text-center">Your Alerts</h2>
      <ul className="space-y-2">
        {alerts.map((alert, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
          >
            <div>
              <p className="font-semibold">{alert.condition}</p>
              <p>{alert.threshold}</p>
            </div>
            <button
              onClick={() => onRemoveAlert(index)}
              className="px-3 py-1 bg-red-500 text-white rounded-md"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSettings;
