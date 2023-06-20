import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myList: JSON.parse(localStorage.getItem("favsMovies")) || [],
};

export const favSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    handleFav: (state, action) => {
      let exists = state.myList.some((movie) => movie.id === action.payload.id);
      if (!exists) {
        state.myList = [...state.myList, action.payload];
      } else {
        let newArray = state.myList.filter(
          (movie) => movie.id !== action.payload.id
        );
        state.myList = newArray;
      }
      localStorage.setItem("favsMovies", JSON.stringify(state.myList));
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { handleFav } = favSlice.actions;

export default favSlice.reducer;
