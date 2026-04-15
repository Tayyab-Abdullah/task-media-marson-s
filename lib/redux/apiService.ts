import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Project {
  id: string;
  title: string;
  status: string;
  deadline: string;
  progress: number;
  category: string;
}

export interface UserPerformance {
  id: string;
  name: string;
  xp: number;
  performance: 'excellent' | 'good' | 'medium' | 'low';
  avatar: string;
  rank: number;
  role: string;
  joinedDate: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  xp: number;
  performance: string;
  avatar: string;
  department: string;
  level: number;
}

export interface Note {
  id?: string;
  content: string;
  createdAt: string;
}

export const apiService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Projects', 'Leaderboard', 'User', 'Notes'],
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => '/projects',
      providesTags: ['Projects'],
    }),
    getLeaderboard: builder.query<UserPerformance[], void>({
      query: () => '/leaderboard',
      providesTags: ['Leaderboard'],
    }),
    getUser: builder.query<UserProfile, void>({
      query: () => '/user',
      providesTags: ['User'],
    }),
    getNotes: builder.query<Note[], void>({
      query: () => '/notes',
      providesTags: ['Notes'],
    }),
    addNote: builder.mutation<Note, Partial<Note>>({
      query: (note) => ({
        url: '/notes',
        method: 'POST',
        body: note,
      }),
      invalidatesTags: ['Notes'],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetLeaderboardQuery,
  useGetUserQuery,
  useGetNotesQuery,
  useAddNoteMutation,
} = apiService;
