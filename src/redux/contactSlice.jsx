import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    formData: {
      name: '',
      phone: '',
      subject: '',
      message: '',
    },
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { updateFormData } = contactSlice.actions;
export default contactSlice.reducer;
