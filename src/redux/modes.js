import { createSlice } from "@reduxjs/toolkit";
import { getMode } from "../services/api";

const modes = createSlice({
  name: "modes",
  initialState: {
    fields: null,
    chosenMode: null,
  },
  reducers: {
    setFields: (state, { payload }) => {
      state.fields = Object.values(payload.fields);
    },
    chooseMode: (state, { payload }) => {
      state.chosenMode = state.fields[payload.mode].field;
    },
  },
});

export default modes.reducer;

export const modeSelector = (state) => state.modes.chosenMode;

export const { setFields, chooseMode } = modes.actions;

export function getModeRedux() {
  return async (dispatch) => {
    try {
      const response = await getMode();
      dispatch(setFields({ fields: response }));
    } catch (error) {
      alert(error);
    }
  };
}

export function chooseModeRedux(mode) {
  return (dispatch) => {
    dispatch(chooseMode({ mode: mode }));
  };
}
