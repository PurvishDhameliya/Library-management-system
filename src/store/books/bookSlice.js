import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  searchResults: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    searchBooks: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      const filteredBooks = state.books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm) ||
          book.author.toLowerCase().includes(searchTerm)
      );
      state.books = filteredBooks;
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    },
  },
});

export const { setBooks, searchBooks } = bookSlice.actions;


export default bookSlice.reducer;
