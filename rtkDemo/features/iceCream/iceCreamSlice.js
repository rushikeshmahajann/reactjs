const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIceCreams: 10,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
});
module.exports = iceCreamSlice.reducer;
module.exports.icecreamActions = iceCreamSlice.actions;
