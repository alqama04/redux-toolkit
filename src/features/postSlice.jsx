import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id:1,title:'learning redux toolkit', content:"this for id 1"},
    {id:2,title:'Slices .....', content:"this for id 2"}
]
const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded(state,action){
            state.push(action.payload)

        }
    }
})

export const selectAllPost=(state)=>state.posts

export const{postAdded}=postSlice.actions
export default postSlice.reducer