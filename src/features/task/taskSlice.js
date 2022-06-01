import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

/**
 * @typedef {{id:string,label:string,done:boolean}} Task
 *
 * @type {{items:Task[]}}
 */
const initialState = {
  items: [],
}

const taskSlice = createSlice({
  initialState,
  name: "task",
  reducers: {
    addTask(state, action) {
      const id = nanoid()
      state.items.unshift({ id, label: action.payload, done: false })
    },
    deleteTask(state, action) {
      state.items = state.items.filter((t) => t.id !== action.payload)
    },
    toggleTask(state, action) {
      state.items = state.items.map((t) => {
        if (t.id === action.payload.id) {
          t.done = action.payload.done
        }
        return t
      })
    },
  },
})

export const { addTask, deleteTask, toggleTask } = taskSlice.actions

export default taskSlice.reducer
