import { configureStore } from "@reduxjs/toolkit";
import preLoader from "./reducers/preLoaderSlice";

export const store = configureStore({
  reducer: { preLoader },
});
