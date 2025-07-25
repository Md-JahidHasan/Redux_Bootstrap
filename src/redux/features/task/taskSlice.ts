import type { RootState } from "@/redux/store";
import type { Itask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";



interface InitialState{
  task: Itask[],
  filter: "All" | "Low" | "Medium" | "High"
}



const initialState: InitialState = {
  task: [
    {
      id: "asdasd",
      title: "Init Github",
      description: "Create Homepage and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "asdasd3",
      title: "Init Redux",
      description: "Create Homepage and routing",
      dueDate: "2025-11",
      isCompleted: true,
      priority: "Low",
    },
    {
      id: "asdasd3r",
      title: "Init Redux",
      description: "Create Homepage and routing",
      dueDate: "2025-11",
      isCompleted: true,
      priority: "Medium",
    },
  ],
  filter: "All",
};


const taskSlice = createSlice({
    name: "task",
    initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Itask>) => {
      const id = uuidv4();
      const taskData = {
        ...action.payload,
        id,
        isCompleted : false

      }
      state.task.push(taskData)
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.task.forEach((task) =>
        task.id === action.payload ? (task.isCompleted = !task.isCompleted) : task
      )
      
      
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.task = state.task.filter((t) =>
        t.id !== action.payload
      )
    },
    updateFilter: (state, action:PayloadAction<"All" | "Medium" | "High"| "Low">) => {
      state.filter = action.payload
    }
    }
})

export const selectTasks = (state: RootState) => {
  const filter = state.tasks.filter;
  if (filter === "Medium") {
    return state.tasks.task.filter((t) => t.priority === "Medium" )
  } else if (filter === "Low") {
    return state.tasks.task.filter((t)=>t.priority === "Low")
  } else if (filter === "High") {
    return state.tasks.task.filter((t)=>t.priority === "High")
  } else {
    return state.tasks.task;
  }
  
};

export const selectFilter = (state: RootState) => {
  return state.tasks.filter;
}

export const { addTask, toggleCompleteState, deleteTask, updateFilter } = taskSlice.actions;
export default taskSlice.reducer;

