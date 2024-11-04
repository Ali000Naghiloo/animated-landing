import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: 1,
};

export const preLoaderSlice = createSlice({
  name: "preLoader",
  initialState,
  reducers: {
    setShowPreLoader: (state, action) => {
      state.show = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowPreLoader } = preLoaderSlice.actions;

export default preLoaderSlice.reducer;
