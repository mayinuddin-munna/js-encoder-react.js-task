import { createSlice } from "@reduxjs/toolkit";
import bookingData from "../../data/json/__stayListing.json";

export interface CounterState {
  value: any;
}

const initialState: CounterState = {
  value: bookingData,
};

export const bookingSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});

export const {} = bookingSlice.actions;

export default bookingSlice.reducer;
