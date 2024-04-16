import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addCacheResult: (state, action) => {
      const { query, results } = action.payload;
      state[query] = results;
    },
  },
});

export const { addCacheResult } = searchSlice.actions;

export default searchSlice.reducer;
