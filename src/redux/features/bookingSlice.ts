import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUser", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
});

export const bookingSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(fetchUsers.pending, (state) => {
  //     state.loading = true;
  //   })

  // },
});

export const {} = bookingSlice.actions;

export default bookingSlice.reducer;
