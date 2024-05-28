import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    changeCount(state, action){
      const product = state.find(state => state.id === action.payload)
      if(product){
        product.count++
      }
    }
  }
})
export let { changeCount } = cart.actions




export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
}) 