/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action } from "../action/action"

export interface NotesState {
  notes: any[]
}

const initialState = {
  notes: []
}

export const notesReducer = (state:NotesState = initialState, action: Action) => {
  console.log("🚀 ~ notesReducer ~ action:", action)

  switch(action.type){
    case "ADD_NOTE": {
      return {...state, notes: [...state.notes, action.payload]}
    }
    default:
      return state
  }
}

