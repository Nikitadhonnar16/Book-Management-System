import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://66d2e039184dce1713cea49a.mockapi.io/books",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      return result;
    } catch (err) {
      console.error("Error in createUser:", err);
      return rejectWithValue(err.message);
    }
  }
);

//read action [GET]

export const showUser = createAsyncThunk(
  "showUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://66d2e039184dce1713cea49a.mockapi.io/books"
      );

      const result = await response.json();
      return result;
    } catch (err) {
      console.log("Error in showUser:", err);
      rejectWithValue(err.message);
    }
  }
);

//delete action []

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://66d2e039184dce1713cea49a.mockapi.io/books/${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();
      return result;
    } catch (err) {
      //   console.log("Error in deleteUser:", err);
      rejectWithValue(err.message);
    }
  }
);

//update action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://66d2e039184dce1713cea49a.mockapi.io/books/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("updated data", data);

      const result = await response.json();
      return result;
    } catch (err) {
      console.error("Error in updateUser:", err);
      return rejectWithValue(err.message);
    }
  }
);

const userDetailSlice = createSlice({
  name: "userDetailSlice",
  initialState: {
    users: [],
    loading: false,
    err: null,
    searchData: [],
  },
  reducers: {
    searchUSer: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handling createUser action
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.err = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.err = action.payload;
      })
      // Handling showUser action
      .addCase(showUser.pending, (state) => {
        state.loading = true;
        state.err = null;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.err = action.payload;
      })
      // Handling deleteUser action
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.err = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log("delete action", action.payload);
        const { id } = action.payload;
        if (id) {
          state.users = state.users.filter((cur) => cur.id !== id);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.err = action.payload;
      })
      // Handling updateUser action
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.err = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((ele) =>
          ele.id === action.payload.id ? action.payload : ele
        );
      })

      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.err = action.payload;
      });
  },
});

export default userDetailSlice.reducer;
export const { searchUSer } = userDetailSlice.actions;
