import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  transactions: []
}

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload
    }
  }
})

const { reducer: transactionReducer, actions} = transactionSlice

export const { setTransactions } = actions
export default transactionReducer