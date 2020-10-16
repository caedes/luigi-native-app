import { createSlice } from "@reduxjs/toolkit";

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: [],
  reducers: {
    initPizzas(state, action) {
      const { pizzas } = action.payload;
      return pizzas;
    },
  },
});

export const { initPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
