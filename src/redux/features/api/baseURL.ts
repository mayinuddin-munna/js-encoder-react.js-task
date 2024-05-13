import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = 'bookingData.json';
console.log(baseURL);


const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}/api/v1` }),
  endpoints: () => ({}),
});

export default baseApi;
