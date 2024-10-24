import React, { useState } from "react";

const WantToCook = ({ allData, setWanttocook, wanttocook }) => {
  const [preparing, setPreparing] = useState([]);
  console.log(preparing);
  function handelPrepearing(xxxx) {
    setPreparing((pre) => [...pre, xxxx]);
    setWanttocook(
      wanttocook.filter((item) => item.recipe_id !== xxxx.recipe_id)
    );
  }
  return (
    <div className="w-[30%] flex justify-center">
      <div className="w-full max-w-2xl p-4 bg-white shadow-lg rounded-lg">
        {/* Want to cook section */}
        <h2 className="text-lg font-semibold mb-4">
          Want to cook: {wanttocook.length}
        </h2>
        <table className="w-full mb-6">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Name</th>
              <th className="p-2">Time</th>
              <th className="p-2">Calories</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {allData?.map((data) => (
              <tr className="border-b">
                <td className="p-2">{data.recipe_name}</td>
                <td className="p-2">{data.preparing_time}</td>
                <td className="p-2">{data.calories}</td>
                <td className="p-2">
                  <button
                    onClick={() => handelPrepearing(data)}
                    className="bg-green-500 text-white px-2 py-1 rounded-full text-sm"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Currently cooking section */}
        <h2 className="text-lg font-semibold mb-4">
          Currently cooking: {preparing.length}
        </h2>
        <table className="w-full mb-6">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Name</th>
              <th className="p-2">Time</th>
              <th className="p-2">Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparing?.map((item) => (
              <tr className="border-b">
                <td className="p-2">{item.recipe_name}</td>
                <td className="p-2">{item.preparing_time}</td>
                <td className="p-2">{item.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total section */}
        <div className="flex justify-between text-lg font-semibold">
          <p>
            Total Time ={" "}
            {preparing.reduce(
              (acc, crr) => acc + parseInt(crr.preparing_time),
              0
            )}{" "}
            minutes
          </p>
          <p>
            Total Calories ={" "}
            {preparing.reduce((acc, crr) => acc + parseInt(crr.calories), 0)}{" "}
            calories
          </p>
        </div>
      </div>
    </div>
  );
};

export default WantToCook;
