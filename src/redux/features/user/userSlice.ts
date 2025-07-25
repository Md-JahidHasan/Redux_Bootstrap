import type { Iuser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit"

interface InitialState {
    users: Iuser[]
}


const initialState: InitialState = {
    users: []
}

type DraftUser = Pick<Iuser,"name">;



const createUser = (userData: DraftUser): Iuser => {
    return {
        id : nanoid(), ...userData
    }
}



const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<Iuser>) => {
            const userData = createUser(action.payload);
            state.users.push(userData);
        },
        removeUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter((user)=>user.id !== action.payload)
        }
    }
})





export default userSlice.reducer;