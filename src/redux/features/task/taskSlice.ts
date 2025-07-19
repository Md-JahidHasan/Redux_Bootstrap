import type { RootState } from "@/redux/store";
import type { Itask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";




interface InitialState{
  task: Itask[],
  filter: "All" | "Medium" | "High"
}



const initialState : InitialState = {
  task: [
    {
      id: "asdasd",
      title: "Ini sibfd",
      descripton: "Create Homepage and routing",
      dueDate: "2025-11",
      isCompleted: true,
      priority: "High",
    },
  ],
  filter: "All"
};


const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export const selectTasks = (state: RootState) => {
  return state.tasks.task;
};

export const selectFilter = (state: RootState) => {
  return state.tasks.filter;
}

export default taskSlice.reducer;

