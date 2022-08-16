import {
  DECREAMENT_COUNTER,
  INCREAMENT_COUNTER,
  RESET_COUNTER,
} from "../constants/counterConstants";

const initialCount = {
  count: 0,
};

const counterReducer = (state = initialCount, action) => {
  switch (action.type) {
    case INCREAMENT_COUNTER:
      return { ...state, count: state.count + 1 };

    case DECREAMENT_COUNTER:
      let decreamentCount;
      if (state.count > 1) {
        decreamentCount = state.count - 1;
      }
      return { ...state, count: decreamentCount };

    case RESET_COUNTER:
      return { ...state, count: 0 };

    default:
      return state;
  }
};

export default counterReducer;
