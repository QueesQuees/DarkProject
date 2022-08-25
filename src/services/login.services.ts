import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiLogin = createApi({
  reducerPath: 'apiLogin',

  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost'}),

  endpoints: builder => ({
    getPost: builder.query({
      query: () => '/posts',
    }),
  }),
});

export const {useGetPostQuery} = apiLogin;
