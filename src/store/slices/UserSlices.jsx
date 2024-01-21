import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    deleteUser(state, action) {
      state.splice(action.payload, 1);
    },
    removeAllUser(state, action) {
      // state.splice(0,action.payload)
      return [];
    },
  },
  // extraReducers(builder) {
  //   builder.addCase(userSlice.actions.removeAllUser, () => {
  //     return [];
  //   });
  // },
});
// console.log(userSlice.actions, "checking actionCreators");
export default userSlice.reducer;
export const { addUser, deleteUser, removeAllUser } = userSlice.actions;
