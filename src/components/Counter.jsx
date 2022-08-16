import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  decreamentCounter,
  increamentCounter,
  resetCounter,
} from "../store/actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncreament = () => {
    dispatch(increamentCounter());
  };

  const handleDecreament = () => {
    dispatch(decreamentCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="font-serif font-bold text-3xl text-yellow-400">
        Welcome to React Redux Counter App
      </h1>

      <h3 className="font-sans font-bold text-2xl text-red-600 mt-14">
        Count: {count}
      </h3>

      <div className="mt-10 space-x-10 text-lg font-mono font-semibold">
        <button
          onClick={handleIncreament}
          className="px-8 py-4 rounded-lg bg-yellow-300"
        >
          Increament
        </button>
        <button
          onClick={handleDecreament}
          className="px-8 py-4 rounded-lg bg-yellow-400"
        >
          Decreament
        </button>
        <button
          onClick={handleReset}
          className="px-8 py-4 rounded-lg bg-yellow-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
