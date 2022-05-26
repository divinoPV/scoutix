import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Scope {
  id: number,
  activity: { id: number, title: string },
  locality: { id: number, title: string },
}

export const scope = createSlice(
  {
    name: 'scope',
    initialState: {
      id: 0,
      activity: { id: 0, title: '' },
      locality: { id: 0, title: '' },
    } as Scope,
    reducers: {
      set: (state, action: PayloadAction<Scope>) => {
        state.id = action.payload.id;
        state.activity.id = action.payload.activity.id;
        state.activity.title = action.payload.activity.title;
        state.locality.id = action.payload.locality.id;
        state.locality.title = action.payload.locality.title;
      },
      reset: (state) => {
        state.id = 0;
        state.activity.id = 0;
        state.activity.title = '';
        state.locality.id = 0;
        state.locality.title = '';
      },
    },
  },
);

export const { set, reset } = scope.actions;

export default scope.reducer;
