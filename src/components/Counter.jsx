import React from "react";

const Counter = () => {
  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="font-serif font-bold text-3xl text-yellow-400">
        Welcome to React Redux Counter App
      </h1>

      <h3 className="font-sans font-bold text-2xl text-red-600 mt-14">
        Count: 0
      </h3>

      <div className="mt-10 space-x-10 text-lg font-mono font-semibold">
        <button className="px-8 py-4 rounded-lg bg-yellow-300">
          Increament
        </button>
        <button className="px-8 py-4 rounded-lg bg-yellow-400">
          Decreament
        </button>
        <button className="px-8 py-4 rounded-lg bg-yellow-500">Reset</button>
      </div>
    </div>
  );
};

export default Counter;
