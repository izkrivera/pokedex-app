import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Pokemon } from '@/types/pokemon';
import type { SearchStatus } from '@/types/model';

interface SearchHistoryState {
  value: { history: Pokemon[]; status: SearchStatus };
}

const initialState: SearchHistoryState = {
  value: { history: [], status: 'initial' },
};

const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState,
  reducers: {
    clear: (state) => {
      state.value = initialState.value;
    },
    setStatus: (state, action: PayloadAction<SearchStatus>) => {
      state.value = { ...state.value, status: action.payload };
    },
    addEntry: (state, action: PayloadAction<Pokemon>) => {
      const filteredHistory = state.value.history.filter(
        (p) => p.name !== action.payload.name,
      );
      state.value = {
        history: [action.payload, ...filteredHistory],
        status: 'success',
      };
    },
  },
});

export const { clear, addEntry, setStatus } = searchHistorySlice.actions;
export default searchHistorySlice.reducer;
