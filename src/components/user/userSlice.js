import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../Data";


// const initialState = 
//     {
//         users: [
//             {
//                 name: "Sahil Satardekar",
//                 email: "sahilsatardekar999@gmail.com"
//             }
//         ]
//     }


export const userSlice = createSlice({
    name: "user",
    initialState: userList,
    reducers:{
        addUser:(state, action) => {
            // console.log(action);
            state.push(action.payload);
        },
        updateUser:(state, action) => {
            const {id, name, email} = action.payload;
            const uu = state.find(user => user.id == id);
            if(uu){
                uu.name = name;
                uu.email = email;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            // Use filter to create a new array without the user to be deleted
            return state.filter(user => user.id !== id);
        }
    }
})
export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;