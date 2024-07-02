import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getGalleryData} from '../api/dogGetter';

const initialState = {
  image: "",
  status: 'idle',
};

export const fetchDogImage = createAsyncThunk(
  'dogDataGetter',
  async () => {
    const response = await getGalleryData();
    return response?.data;
  }
);

const dogSlice = createSlice({
  name: 'dogdata',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDogImage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDogImage.fulfilled, (state, action) => {
        state.status = 'success';
        state.image = action.payload;
        
      })
      .addCase(fetchDogImage.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectDogImage = (state) => state.dog.image;

export default dogSlice.reducer;

