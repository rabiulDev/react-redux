import {
  DECREAMENT_COUNTER,
  INCREAMENT_COUNTER,
  RESET_COUNTER,
} from "../constants/counterConstants";

export const increamentCounter = () => {
  return {
    type: INCREAMENT_COUNTER,
  };
};

export const decreamentCounter = () => {
  return {
    type: DECREAMENT_COUNTER,
  };
};

export const resetCounter = () => {
  return {
    type: RESET_COUNTER,
  };
};
