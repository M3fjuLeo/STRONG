import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

interface MuscleState {
  muscleId: string | null;
  data: any[];
}

const initialState: MuscleState = {
  muscleId: null,
  data: [],
};

const muscleSlice = createSlice({
  name: "muscle",
  initialState,
  reducers: {
    setMuscleId: (state, action: PayloadAction<string | null>) => {
      state.muscleId = action.payload;
    },
    setData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: { muscle: muscleSlice.reducer },
});

// Typy dla TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooki do TS
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Eksport akcji
export const { setMuscleId, setData } = muscleSlice.actions;
