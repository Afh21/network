import { TEST_DISPATCH } from "../actions/types";

const initalState = {
  isAuthenticated: false,
  user: {},
  hello: "test"
};

export default function(state = initalState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
