// Define the initial state
export const initialState = {
  searchValue: false,
  batchValue: false,
  testValue: false,
};

// Define the reducer function
export const overlayReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_SEARCH":
      return {
        searchValue: true,
        batchValue: false,
        testValue: false,
      };
    case "NEW_BATCH":
      return {
        searchValue: false,
        batchValue: true,
        testValue: false,
      };

    case "NEW_TEST":
      return {
        searchValue: false,
        batchValue: false,
        testValue: true,
      };

    case "CLOSE_OVERLAY":
      return {
        searchValue: false,
        batchValue: false,
        testValue: false,
      };
    default:
      return state;
  }
};
