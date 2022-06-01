import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
import { useSelector as rawUseSelector } from "react-redux"
import taskReducer from "./features/task/taskSlice"

const loadTasks = () => {
  try {
    const v = localStorage.getItem("task")
    if (v === null) throw null
    return JSON.parse(v)
  } catch (e) {
    return undefined
  }
}

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  const val = JSON.stringify(store.getState().task)
  localStorage.setItem("task", val)
  return result
}

export const store = configureStore({
  preloadedState: {
    task: loadTasks(),
  },
  reducer: {
    task: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})

/**
 * @typedef {ReturnType<typeof store.getState>} RootState
 * @typedef {typeof store.dispatch} AppDispatch
 */

/**
 * @type {import("react-redux").TypedUseSelectorHook<RootState>}
 */
export const useSelector = rawUseSelector
